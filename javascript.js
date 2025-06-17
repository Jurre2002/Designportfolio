const hoverLeft = document.querySelector('.hover-left');
const hoverRight = document.querySelector('.hover-right');
const leftContainer = document.querySelector('.slideshow-container.left');
const rightContainer = document.querySelector('.slideshow-container.right');

hoverLeft.addEventListener('mouseenter', () => {
  slideTrackUp.classList.add('highlight');
});
hoverLeft.addEventListener('mouseleave', () => {
  slideTrackUp.classList.remove('highlight');
});

hoverRight.addEventListener('mouseenter', () => {
  slideTrackDown.classList.add('highlight');
});
hoverRight.addEventListener('mouseleave', () => {
  slideTrackDown.classList.remove('highlight');
});

hoverLeft.addEventListener('mouseenter', () => {
  leftContainer.style.zIndex = 10;
});

hoverLeft.addEventListener('mouseleave', () => {
  leftContainer.style.zIndex = '';
});

hoverRight.addEventListener('mouseenter', () => {
  rightContainer.style.zIndex = 10;
});

hoverRight.addEventListener('mouseleave', () => {
  rightContainer.style.zIndex = '';
});
