(() => {
  const getCartSections = () => {
    const cartDrawer = document.querySelector('cart-drawer');

    if (cartDrawer?.getSectionsToRender) {
      return cartDrawer.getSectionsToRender().map((section) => section.id);
    }

    const sections = ['cart-icon-bubble'];
    if (cartDrawer) sections.push('cart-drawer');
    if (document.getElementById('main-cart-items')) {
      sections.push(document.getElementById('main-cart-items').dataset.id);
    }
    if (document.getElementById('main-cart-footer')) {
      sections.push(document.getElementById('main-cart-footer').dataset.id);
    }
    return sections;
  };

  const renderCart = (parsedState, context) => {
    const cartDrawer = document.querySelector('cart-drawer');

    if (cartDrawer && parsedState.sections?.['cart-drawer']) {
      if (context?.activeElement && cartDrawer.setActiveElement) cartDrawer.setActiveElement(context.activeElement);
      cartDrawer.renderContents(parsedState);
      return;
    }

    replaceSection('cart-icon-bubble', parsedState.sections?.['cart-icon-bubble'], '.shopify-section');

    const mainCartItems = document.getElementById('main-cart-items');
    if (mainCartItems) {
      replaceSection('main-cart-items', parsedState.sections?.[mainCartItems.dataset.id], '.js-contents');
    }

    const mainCartFooter = document.getElementById('main-cart-footer');
    if (mainCartFooter) {
      replaceSection('main-cart-footer', parsedState.sections?.[mainCartFooter.dataset.id], '.js-contents');
    }
  };

  const replaceSection = (id, html, selector) => {
    if (!html) return;
    const target = document.getElementById(id);
    const source = new DOMParser().parseFromString(html, 'text/html').querySelector(selector);
    const destination = selector ? target?.querySelector(selector) : target;
    if (source && destination) destination.innerHTML = source.innerHTML;
  };

  const isCartAddForm = (form) => {
    if (!form || form.closest('product-form')) return false;

    const action = form.getAttribute('action') || '';
    const actionUrl = new URL(action, window.location.origin);

    return actionUrl.pathname === (window.routes?.cart_add_url || '/cart/add');
  };

  const setFormLoading = (form, isLoading) => {
    const submitButton = form.querySelector('[type="submit"], button:not([type]), button[type="button"]');
    if (!submitButton) return;

    submitButton.toggleAttribute('disabled', isLoading);
    submitButton.setAttribute('aria-disabled', isLoading ? 'true' : 'false');
    submitButton.classList.toggle('loading', isLoading);
  };

  const parseCartResponse = async (response) => {
    const contentType = response.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      return response.json();
    }

    throw new Error(window.cartStrings?.error || 'Cart error');
  };

  const initAjaxCartForms = () => {
    if (window.VioletCartFormsReady) return;
    window.VioletCartFormsReady = true;

    document.addEventListener('submit', async (event) => {
      const form = event.target;
      if (!isCartAddForm(form)) return;

      event.preventDefault();
      setFormLoading(form, true);

      const formData = new FormData(form);
      formData.append('sections', getCartSections());
      formData.append('sections_url', window.location.pathname);

      try {
        const response = await fetch(window.routes?.cart_add_url || '/cart/add.js', {
          method: 'POST',
          headers: {
            'X-Requested-With': 'XMLHttpRequest',
          },
          body: formData,
        });
        const parsedState = await parseCartResponse(response);

        if (!response.ok || parsedState.status) {
          throw new Error(parsedState.description || parsedState.message || window.cartStrings?.error || 'Cart error');
        }

        renderCart(parsedState, { activeElement: document.activeElement });

        if (window.PUB_SUB_EVENTS && typeof publish === 'function') {
          publish(PUB_SUB_EVENTS.cartUpdate, {
            source: 'violet-cart-form',
            productVariantId: String(formData.get('id') || ''),
            cartData: parsedState,
          });
        }
      } catch (error) {
        const errorEl = form.querySelector('[data-violet-cart-error], .product-form__error-message');
        if (errorEl) {
          errorEl.textContent = error.message;
          errorEl.hidden = false;
        } else {
          console.error(error);
        }
      } finally {
        setFormLoading(form, false);
      }
    });
  };

  if (!customElements.get('violet-cart-add')) {
    customElements.define(
      'violet-cart-add',
      class extends HTMLElement {
        connectedCallback() {
          this.addEventListener('click', this.onClick.bind(this));
        }

        async onClick(event) {
          const button = event.target.closest('[data-violet-cart-add]');
          if (!button) return;

          event.preventDefault();

          const variantId = Number(button.dataset.variantId);
          if (!variantId) return;

          const errorEl = this.querySelector('[data-violet-cart-error]');
          button.setAttribute('disabled', 'disabled');
          if (errorEl) {
            errorEl.hidden = true;
            errorEl.textContent = '';
          }

          try {
            const sections = this.getSections();
            const formData = new FormData();
            formData.append('id', String(variantId));
            formData.append('quantity', '1');
            formData.append('sections', sections);
            formData.append('sections_url', window.location.pathname);

            const response = await fetch(window.routes?.cart_add_url || '/cart/add.js', {
              method: 'POST',
              headers: {
                'X-Requested-With': 'XMLHttpRequest',
              },
              body: formData,
            });

            const parsedState = await parseCartResponse(response);
            if (!response.ok || parsedState.status) {
              throw new Error(parsedState.description || parsedState.message || window.cartStrings?.error || 'Cart error');
            }

            this.renderCart(parsedState);
            if (window.PUB_SUB_EVENTS && typeof publish === 'function') {
              publish(PUB_SUB_EVENTS.cartUpdate, {
                source: 'violet-cart',
                productVariantId: String(variantId),
                cartData: parsedState,
              });
            }
          } catch (error) {
            if (errorEl) {
              errorEl.textContent = error.message;
              errorEl.hidden = false;
            }
          } finally {
            button.removeAttribute('disabled');
          }
        }

        getSections() {
          return getCartSections();
        }

        renderCart(parsedState) {
          renderCart(parsedState, { activeElement: document.activeElement });
        }
      }
    );
  }

  initAjaxCartForms();
})();
