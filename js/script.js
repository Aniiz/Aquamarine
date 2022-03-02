/* -----------------------------------------------------------------------------------------------------------
        Script Botão menu superior */

const btnmenu = document.getElementById('clicavel')
const options = document.getElementById('options')

function show(){
    options.classList.toggle('ativo')
    options.classList.toggle('options')
}

btnmenu.addEventListener('click', show)



// da get no numero de itens no carrinho e exibe no menu;
function numeroitenscarrinho() {
    let numeroprodutos = localStorage.getItem('numerocarrinho')

    if(numeroprodutos) {
        document.querySelector('.nmrcarrinho span').textContent = numeroprodutos
    }
}
numeroitenscarrinho()


 // Abre e fecha o carrinho
let carrinhocomitem = document.querySelector('.blockcarrinho')
let fecharcarrinho = document.querySelector('.fecharopcoes1')
let abrircarrinho = document.querySelector('.nmrcarrinho')


fecharcarrinho.addEventListener('click', esconder)
abrircarrinho.addEventListener('click', aparecer)

function esconder(){
    carrinhocomitem.style.display = 'none';
}

function aparecer(){
    carrinhocomitem.style.display = 'flex';
}

/* -----------------------------------------------------------------------------------------------------------
        calcular custo total */
function custotal(prt){
    let custocarrinho = localStorage.getItem('ValorTotal')

    
    console.log('Valor Carrinho é', custocarrinho)
    console.log(typeof custocarrinho)

    if(custocarrinho != null) {
        custocarrinho = parseInt(custocarrinho)
        localStorage.setItem("ValorTotal", custocarrinho + prt.preço)
    }
    else{
        localStorage.setItem("ValorTotal",prt.preço)
    }



}
