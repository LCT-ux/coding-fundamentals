document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.querySelector('.add__button');
    const notification = document.querySelector('.notification');
    const closeBtn = document.querySelector('.cta__button');
  
    addButton.addEventListener('click', function () {
      notification.classList.add('show');
    });
  
    closeBtn.addEventListener('click', function () {
      notification.classList.remove('show');
    });
  });