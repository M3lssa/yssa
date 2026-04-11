let total = 0;

function adicionarCarrinho(nome, preco){
    let lista = document.getElementById("lista-carrinho");

    let item = document.createElement("li");
    item.textContent = `${nome} - R$ ${preco.toFixed(2)}`;

    lista.appendChild(item);

    total += preco;
    document.getElementById("total").textContent = total.toFixed(2);
}

function abrirCarrinho(){
    let carrinho = document.getElementById("carrinho");

    if(carrinho.style.display === "none" || carrinho.style.display === ""){
        carrinho.style.display = "block";
    } else {
        carrinho.style.display = "none";
    }
}