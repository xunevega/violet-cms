class VioletProductCarousel extends HTMLElement {
  connectedCallback() {
    this.setup();
    this.mutationObserver = new MutationObserver(() => this.setup());
    this.mutationObserver.observe(this, { childList: true, subtree: true });
  }

  setup() {
    const nextViewport = this.querySelector('[data-violet-carousel-viewport]');
    const nextPrevButton = this.querySelector('[data-violet-carousel-prev]');
    const nextNextButton = this.querySelector('[data-violet-carousel-next]');

    if (!nextViewport || !nextPrevButton || !nextNextButton) return;
    if (this.viewport === nextViewport && this.prevButton === nextPrevButton && this.nextButton === nextNextButton) {
      this.updateButtons();
      return;
    }

    this.teardown();

    this.viewport = this.querySelector('[data-violet-carousel-viewport]');
    this.prevButton = this.querySelector('[data-violet-carousel-prev]');
    this.nextButton = this.querySelector('[data-violet-carousel-next]');

    if (!this.viewport || !this.prevButton || !this.nextButton) return;

    this.onPrevClick = () => this.scrollBySlide(-1);
    this.onNextClick = () => this.scrollBySlide(1);
    this.onScroll = () => this.updateButtons();

    this.prevButton.addEventListener('click', this.onPrevClick);
    this.nextButton.addEventListener('click', this.onNextClick);
    this.viewport.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onScroll);

    this.updateButtons();
  }

  disconnectedCallback() {
    this.mutationObserver?.disconnect();
    this.teardown();
  }

  teardown() {
    if (!this.viewport || !this.prevButton || !this.nextButton) return;

    this.prevButton.removeEventListener('click', this.onPrevClick);
    this.nextButton.removeEventListener('click', this.onNextClick);
    this.viewport.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onScroll);

    this.viewport = null;
    this.prevButton = null;
    this.nextButton = null;
  }

  scrollBySlide(direction) {
    const firstSlide = this.querySelector('.violet-product-carousel__slide');
    const amount = firstSlide ? firstSlide.getBoundingClientRect().width + this.getGap() : this.viewport.clientWidth * 0.85;

    this.viewport.scrollBy({
      left: amount * direction,
      behavior: 'smooth',
    });
  }

  getGap() {
    const track = this.querySelector('.violet-product-carousel__track');
    if (!track) return 16;

    return Number.parseFloat(window.getComputedStyle(track).columnGap) || 16;
  }

  updateButtons() {
    const maxScroll = this.viewport.scrollWidth - this.viewport.clientWidth - 1;

    this.prevButton.disabled = this.viewport.scrollLeft <= 1;
    this.nextButton.disabled = this.viewport.scrollLeft >= maxScroll;
  }
}

if (!customElements.get('violet-product-carousel')) {
  customElements.define('violet-product-carousel', VioletProductCarousel);
}
