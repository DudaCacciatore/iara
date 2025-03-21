document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup2");
    const popupCard = document.getElementById("popupCard");

    // Alterado para pegar a imagem e não o botão
    document.getElementById("img6").addEventListener("click", function() {
        console.log("Imagem clicada");
        popup.style.display = "flex";
    });

    document.getElementById("comprarAgora2").addEventListener("click", function() {
        window.location.href = "https://wa.me/+5511972772655";
    });

    document.getElementById("fecharPopup2").addEventListener("click", function() {
        popup.style.display = "none";
    });

    popupCard.addEventListener("click", function(event) {
        event.stopPropagation();
    });

    popup.addEventListener("click", function() {
        popup.style.display = "none";
    });
});
