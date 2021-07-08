const slider = document.querySelector('.checkbox');
const body = document.querySelector('body');

slider.addEventListener('change', () => {
  body.classList.toggle('dark');
});