document.addEventListener('DOMContentLoaded', () => {
  dropdownMenu();
  function dropdownMenu() {
    const dropdownLinks = document.querySelector('.dropdown-navigation-links');
    const hamburger = document.querySelector('#hamburger');
    const bars = document.querySelector('#bars');
    const close = document.querySelector('#close');
    const openDropdown = () => {
      const cl = dropdownLinks.classList;
      cl.toggle('showitem');
      cl.toggle('hideitem');
      if (Array.from(cl).includes('d-none')) {
        cl.toggle('d-none');
      } else {
        setTimeout(() => cl.toggle('d-none'), 1000);
      }
    };
    const hamburgerToggle = () => {
      bars.classList.toggle('d-none');
      close.classList.toggle('d-none');
    };
    hamburger.addEventListener('click', () => {
      openDropdown();
      hamburgerToggle();
    });
  }
});
