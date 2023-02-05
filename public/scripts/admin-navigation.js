document.addEventListener('DOMContentLoaded', (event) => {
  const nav = document.querySelector('nav');
  const navItems = nav.querySelectorAll('.has-children');

  const handleEnchantItem = (subNav, icon) => {
    return (event) => {
      if (event) {
        event.preventDefault();
      }
      const isActive = subNav.classList.contains('is-show-nav');
      const iconClass = `fa-solid fa-chevron-${isActive ? 'down' : 'up'}`;
      if (isActive) {
        subNav.classList.remove('is-show-nav');
      } else {
        subNav.classList.add('is-show-nav');
      }
      icon.className = iconClass;
    };
  };

  navItems.forEach((item) => {
    const link = item.querySelector('a');
    const subNav = item.querySelector('ul');
    const icon = item.querySelector('i');
    link.addEventListener('click', handleEnchantItem(subNav, icon));
  });
});
