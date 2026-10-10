class VioletStickyAddToCart extends HTMLElement {
  connectedCallback() {
    this.targetEl = document.getElementById(this.dataset.target);
    this.sectionId = this.dataset.sectionId;
    this.targetInView = true;
    this.minScroll = 360;
    this.updateVisibility = this.updateVisibility.bind(this);

    if (this.targetEl) {
      this.observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          this.targetInView = entry.isIntersecting;
          this.updateVisibility();
        },
        { threshold: 0 }
      );
      this.observer.observe(this.targetEl);
    }

    window.addEventListener('scroll', this.updateVisibility, { passive: true });
    this.updateVisibility();

    if (typeof subscribe === 'function' && typeof PUB_SUB_EVENTS !== 'undefined') {
      this.variantChangeUnsubscriber = subscribe(
        PUB_SUB_EVENTS.variantChange,
        this.handleVariantChange.bind(this)
      );
    }
  }

  handleVariantChange({ data } = {}) {
    if (data?.sectionId !== this.sectionId) return;

    const variant = data?.variant;
    if (!variant) return;

    const priceEl = this.querySelector('[data-violet-sticky-atc-price]');
    if (priceEl && variant.price != null && window.Shopify?.formatMoney) {
      priceEl.textContent = window.Shopify.formatMoney(
        variant.price,
        window.Shopify.money_format
      );
    }

    const button = this.querySelector('.violet-sticky-atc__button');
    const label = this.querySelector('[data-violet-sticky-atc-label]');
    const variantInput = this.querySelector('[data-violet-sticky-atc-variant]');
    const variantTitle = this.querySelector('[data-violet-sticky-atc-variant-title]');
    const status = this.querySelector('[data-violet-sticky-atc-status]');
    const image = this.querySelector('[data-violet-sticky-atc-image]');
    if (!button || !label) return;

    if (variantTitle) variantTitle.textContent = variant.title || '';

    const previewImage = variant.featured_media?.preview_image || variant.featured_media;
    if (image && previewImage?.src) {
      image.src = previewImage.src;
      image.srcset = '';
      image.alt = variant.featured_media?.alt || variant.title || '';
    }

    if (!variant.available) {
      button.setAttribute('disabled', 'disabled');
      variantInput?.setAttribute('disabled', 'disabled');
      label.textContent = window.variantStrings?.soldOut || 'Sold out';
      if (status) {
        status.textContent = window.variantStrings?.soldOut || 'Sold out';
        status.classList.add('violet-sticky-atc__status--sold-out');
      }
    } else {
      button.removeAttribute('disabled');
      variantInput?.removeAttribute('disabled');
      if (variantInput) variantInput.value = variant.id;
      label.textContent = window.variantStrings?.addToCart || 'Add to cart';
      if (status) {
        status.textContent = window.variantStrings?.inStock || 'In stock';
        status.classList.remove('violet-sticky-atc__status--sold-out');
      }
    }
  }

  updateVisibility() {
    const shouldShow = !this.targetInView && window.scrollY > this.minScroll;
    this.classList.toggle('violet-sticky-atc--visible', shouldShow);
  }

  disconnectedCallback() {
    this.observer?.disconnect();
    window.removeEventListener('scroll', this.updateVisibility);
    this.variantChangeUnsubscriber?.();
  }
}

if (!customElements.get('violet-sticky-add-to-cart')) {
  customElements.define('violet-sticky-add-to-cart', VioletStickyAddToCart);
}
