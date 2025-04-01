document.addEventListener('DOMContentLoaded', function() {
    const elementos = document.querySelectorAll('.hidden');
    elementos.forEach((elemento, index) => {
      setTimeout(() => {
        elemento.style.opacity = 1;
        elemento.style.transition = 'opacity 1s ease-in-out';
      }, 500 * index);
    });
  });