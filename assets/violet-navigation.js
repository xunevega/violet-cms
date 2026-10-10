(() => {
  const key = 'violetMobileBarBound';

  if (window[key]) return;

  window[key] = true;

  const openHeaderDrawer = () => {
    const details = document.querySelector('#Details-menu-drawer-container');
    const summary = details?.querySelector('summary');
    const drawer = details?.closest('header-drawer');

    if (!details || !summary) return;

    if (drawer?.openMenuDrawer && !details.hasAttribute('open')) {
      details.setAttribute('open', '');
      drawer.openMenuDrawer(summary);
      return;
    }

    summary.click();
  };

  const openSearch = () => {
    document.querySelector('.header__search summary')?.click();
  };

  document.addEventListener('click', (event) => {
    if (event.target.closest('[data-violet-mobile-menu]')) {
      event.preventDefault();
      openHeaderDrawer();
      return;
    }

    if (event.target.closest('[data-violet-mobile-search]')) {
      event.preventDefault();
      openSearch();
    }
  });
})();
