document.addEventListener('DOMContentLoaded', function () {
  const wrapper = document.querySelector('.wrapper');
  const palette = document.querySelector('.palette');
  const searchInput = document.querySelector('.search-input');

  // Listen for CMD+K keypress
  document.addEventListener('keydown', function (event) {
    if (event.key === 'k' && (event.ctrlKey || event.metaKey)) {
      togglePalette();
    }
  });

  // Toggle the visibility of the palette
  function togglePalette() {
    wrapper.classList.toggle('show');
    palette.classList.toggle('fade-in');
    palette.classList.toggle('fade-out');
    
    if (wrapper.classList.contains('show')) {
      searchInput.focus();
    }
  }
});
