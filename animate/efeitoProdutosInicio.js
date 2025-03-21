document.addEventListener('DOMContentLoaded', function() {
    const container3 = document.getElementById('container3');
    const imagens = container3.querySelectorAll('.item');
   
    function verificarVisibilidade() {
      const posicaoContainer = container3.getBoundingClientRect().top;
      const alturaTela = window.innerHeight;
   
      if (posicaoContainer < alturaTela * 0.75) { 
        imagens.forEach((imagem, index) => {
          setTimeout(() => {
            imagem.classList.add('aparecendo');
          }, 200 * index); 
        });
        window.removeEventListener('scroll', verificarVisibilidade); 
      }
    }
   
    window.addEventListener('scroll', verificarVisibilidade);
    verificarVisibilidade(); 
  });