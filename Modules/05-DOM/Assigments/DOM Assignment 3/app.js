// Declare DOM variables
const regBtn = document.querySelector('.register-button');
const clsBtn = document.querySelector('.close-button');
const slidePanel = document.querySelector('.slide-over-panel');
const wrapper = document.querySelector('.wrapper');
const backdrop = document.querySelector('.bg-backdrop');

// Function to toggle slide-over panel and backdrop
function toggleSlide() {
  slidePanel.classList.toggle('slide-out');
  slidePanel.classList.toggle('slide-in');
}

// Function to remove backdrop
function removeBackdrop() {
  if (backdrop.parentNode === wrapper) {
    wrapper.removeChild(backdrop);
  }
}

// Function to include backdrop
function includeBackdrop() {
  if (backdrop.parentNode !== wrapper) {
    wrapper.insertBefore(backdrop, wrapper.firstChild);
  }
}

// Event listener for "Register" button
regBtn.addEventListener('click', () => {
  toggleSlide();
  includeBackdrop();
});

// Event listener for close button
clsBtn.addEventListener('click', () => {
  toggleSlide();
  removeBackdrop();
});

// Initial setup: hide slide-over panel and remove backdrop
toggleSlide();
removeBackdrop();


