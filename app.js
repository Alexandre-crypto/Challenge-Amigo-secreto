let amigos = [];

function adicionarAmigo() {
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    amigos.push(nome);
    console.log("Amigos:", amigos); // Exibir nomes no Console
    input.value = "";
    atualizarLista();
}