let total = 0; // Cria a variável para acumular o valor total da compra.

function adicionarCarrinho(nome, preco){
    let lista = document.getElementById("lista-carrinho"); // Localiza a lista (UL/OL) no HTML.

    let item = document.createElement("li"); // Cria um novo marcador de item.
    item.textContent = `${nome} - R$ ${preco.toFixed(2)}`; // Define o texto do item com nome e preço formatado.

    lista.appendChild(item); // Insere o item criado dentro da lista no site.

    total += preco; // Soma o preço do produto ao valor total acumulado.
    document.getElementById("total").textContent = total.toFixed(2); // Atualiza o valor total exibido na tela.
}

function abrirCarrinho(){
    let carrinho = document.getElementById("carrinho"); // Localiza o container do carrinho no HTML.

    // Verifica se o carrinho está escondido para decidir se mostra ou esconde:
    if(carrinho.style.display === "none" || carrinho.style.display === ""){
        carrinho.style.display = "block"; // Se estiver oculto, torna-o visível.
    } else {
        carrinho.style.display = "none"; // Se estiver visível, oculta-o.
    }
}