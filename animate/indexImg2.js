document.addEventListener("DOMContentLoaded", function() {
    const popup = document.getElementById("popup2");
    const popupCard = document.getElementById("popupCard");

    document.getElementById("colares").addEventListener("click", function() {
        console.log("Botão clicado");
        popup.style.display = "flex";
    });

    document.getElementById("comprarAgora2").addEventListener("click", function() {
        window.location.href = "https://wa.me/+5511972772655";
    });

    document.getElementById("fecharPopup2").addEventListener("click", function() {
        popup.style.display = "none";
    });

    // Impedir que o pop-up feche ao clicar dentro do card
    popupCard.addEventListener("click", function(event) {
        event.stopPropagation();
    });

    // Fechar o pop-up apenas se o usuário clicar fora do card
    popup.addEventListener("click", function() {
        popup.style.display = "none";
    });
});
