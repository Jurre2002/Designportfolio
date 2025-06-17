const hoverLeft = document.querySelector('.hover-left');
const hoverRight = document.querySelector('.hover-right');
const slideTrackUp = document.querySelector('.slide-track.up');
const slideTrackDown = document.querySelector('.slide-track.down');

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