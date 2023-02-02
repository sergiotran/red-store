document.addEventListener('DOMContentLoaded', () => {
  const navigation = document.querySelector('.header-navigation');
  const toggleButton = document.querySelector('#toggle-nav');

  toggleButton.addEventListener('click', (event) => {
    event.preventDefault();
    if(navigation.classList.contains('active')) {
      navigation.classList.remove('active');
    } else {
      navigation.classList.add('active');
    }
  });
});