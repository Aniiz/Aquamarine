/* -----------------------------------------------------------------------------------------------------------
        Script Botão menu superior */

const btnmenu = document.getElementById('clicavel')
const options = document.getElementById('options')

function show(){
    options.classList.toggle('ativo')
    options.classList.toggle('options')
}

btnmenu.addEventListener('click', show)



// da get no numero de itens no carrinho;
function numeroitenscarrinho() {
    let numeroprodutos = localStorage.getItem('numerocarrinho')

    if(numeroprodutos) {
        document.querySelector('.nmrcarrinho span').textContent = numeroprodutos
    }
}
numeroitenscarrinho()