document.getElementById("botao-entrar").addEventListener("click", async function() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const apiUrl = "http://localhost:3000";

    try {
        const resposta = await fetch(`${apiUrl}/adm/auth`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, senha }),
        });

        if (resposta.ok) {
            window.location.href = "../pages/collection.html";
        } else {
            const dados = await resposta.json();
            alert(dados.message);
        }
    } catch (error) {
        console.error("Erro na autenticação:", error);
        window.location.replace('IARA')
        alert("Erro na autenticação. Tente novamente.");
    }
});