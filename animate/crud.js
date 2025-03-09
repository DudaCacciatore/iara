const apiUrl = "http://localhost:3000"; // Backend rodando localmente

        //CRUD PRODUTOS
        async function criarProduto() {
            const nome = document.getElementById("nome").value;
            const colecao = document.getElementById("colecao").value;
            const preco = document.getElementById("preco").value;
            const imagem_url = document.getElementById("imagem_url").value;

            await fetch(apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome, colecao, preco, imagem_url }),
            });

            listarProdutos();
        }

        async function listarProdutos() {
            const resposta = await fetch(apiUrl);
            const produtos = await resposta.json();
            const lista = document.getElementById("lista-produtos");
            lista.innerHTML = "";

            produtos.forEach((produto) => {
                lista.innerHTML += `
                    <li id="produto-${produto._id}">
                        <strong>${produto.nome}</strong> - R$${produto.preco}
                        <button onclick="editarProduto('${produto._id}')">✏️ Editar</button>
                        <button onclick="deletarProduto('${produto._id}')">❌ Excluir</button>
                    </li>
                `;
            });
        }

        async function editarProduto(id) {
            const novoNome = prompt("Novo nome do produto:");
            const novaColecao = prompt("Nova coleção:");
            const novoPreco = prompt("Novo preço:");
            const novaImagem = prompt("Nova URL da imagem:");

            await fetch(`${apiUrl}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nome: novoNome, colecao: novaColecao, preco: novoPreco, imagem_url: novaImagem }),
            });

            listarProdutos();
        }

        async function deletarProduto(id) {
            await fetch(`${apiUrl}/${id}`, { method: "DELETE" });
            listarProdutos();
        }


        //CRUD ADM
        async function adicionarAdm() {
            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            await fetch(`${apiUrl}/adm`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, senha }),
            });
            console.log(JSON.stringify({ email, senha }))

            listarAdms();
        }

        async function listarAdms() {
            const resposta = await fetch(`${apiUrl}/adm`);
            const adms = await resposta.json();
            const lista = document.getElementById("lista-adms");
            lista.innerHTML = "";

            adms.forEach((adm) => {
                lista.innerHTML += `
                    <li>
                        ${adm.email}
                        <button onclick="editarAdm('${adm._id}')">✏️ Editar</button>
                        <button onclick="excluirAdm('${adm._id}')">❌ Excluir</button>
                    </li>
                `;
            });
        }

        async function editarAdm(id) {
            const novoEmail = prompt("Novo email do ADM:");
            const novaSenha = prompt("Nova senha do ADM:");

            await fetch(`${apiUrl}/adm/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email: novoEmail, senha: novaSenha }),
            });

            listarAdms();
        }

        async function excluirAdm(id) {
            await fetch(`${apiUrl}/adm/${id}`, { method: "DELETE" });
            listarAdms();
        }

        document.addEventListener("DOMContentLoaded", () => {
            listarProdutos();
            listarAdms();
        });