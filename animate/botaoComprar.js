//Botão de Comprar + Pop-up
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("btnAbrirPopup").addEventListener("click", function() {
        console.log("Botão clicado")
        document.getElementById("popup").style.display = "flex";
    });

    document.getElementById("fecharPopup").addEventListener("click", function() {
        document.getElementById("popup").style.display = "none";
    });

    document.getElementById("abrirWhatsApp").addEventListener("click", function() {
        window.location.href = "https://wa.me/+5511972772655";
    });

    window.addEventListener("click", function(event) {
        if (event.target === document.getElementById("popup")) {
            document.getElementById("popup").style.display = "none";
        }
    });
});


