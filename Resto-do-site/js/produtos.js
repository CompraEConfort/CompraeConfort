(function () {

    var nomeCorredor = localStorage.getItem("nome-corredor");
    // var nomeMercado = localStorage.getItem("nome-corredor");
    var idSupermarket = localStorage.getItem('codigo-supermercado');
    var result = getprodutosNome(nomeCorredor, idSupermarket);
    console.log(result);
    //var produtos = getProductsByCategoryAndSupermarketId();
    var divprodutos = document.getElementById('produtos');
    var produtosDinamico = '';
    document.getElementById('Market-title').innerHTML = nomeCorredor;
    var produtosTotais = document.getElementsByClassName("simpleCart_quantity");
    var numv = localStorage.getItem("simpleCart_items");

    // document.getElementById('Market-Name').innerHTML = nomeMercado;

    result.produtos.forEach(function (produto) {

        produtosDinamico += `<div class="one-third column">`
        produtosDinamico +=   `<div class="simpleCart_shelfItem">`
        produtosDinamico +=       `<img src="${produto.imageLink}" class="item_thumb" />`
        produtosDinamico +=       `<h5 class="item_name">${produto.name}</h5>`
        produtosDinamico +=        `<h5 class="item_price"> R$ ${produto.value}</h5>`
        produtosDinamico +=       `<div class="qty" style="display:"none;">Quant. <input type="text" min="1" value="" class="item_Quantity"> </div>`
        produtosDinamico +=       `<a onclick="AparecerQty()" class="item_add button u-pull-right" href="javascript:;">Adicionar </a>`
        produtosDinamico +=   `</div>`
        produtosDinamico += `</div>`
        
    });
    divprodutos.innerHTML = produtosDinamico;

    console.log(numv);
  
})()

// Transição do botão de quantidade
function AparecerQty() {
    document.getElementsByClassName("qty")[0].style.display="flex";
    document.getElementsByClassName("item_add button u-pull-right")[0].style.width="50%";
    document.getElementsByClassName("item_add button u-pull-right")[0].style.padding="0px 20px";
    simpleCart_remove
    simpleCart_quantity
}


// antigo

// produtosDinamico +=  `<div class="col-lg-4 col-md-6 col-sm-6">`
// produtosDinamico +=      `<div class="product__item">`
// produtosDinamico +=         `<div class="product__item__pic set-bg">`
// produtosDinamico +=         `<img src="${element.imageLink}" alt="">`
// produtosDinamico +=            `<ul class="product__item__pic__hover">`
// produtosDinamico +=               `<li onclick="salvarProdutoNoCarrinho(${element.idProduto},${element.imageLink},${element.name},${element.value})"><i class="fa fa-shopping-cart"></i></li>`
// produtosDinamico +=            `</ul>`
// produtosDinamico +=         `</div>`
// produtosDinamico +=         `<div class="product__item__text">`
// produtosDinamico +=            `<h6><a href="#">${element.name}</a></h6>`
// produtosDinamico +=            `<h5>R$ ${element.value}</h5>`
// produtosDinamico +=         `</div>`
// produtosDinamico +=      `</div>`
// produtosDinamico +=  `</div>`