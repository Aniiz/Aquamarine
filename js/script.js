// ---------------------------- Script Botão menu superior ----------------------------

const btnmenu = document.getElementById('clicavel')
const options = document.getElementById('options')

function show(){
    options.classList.toggle('ativo')
    options.classList.toggle('options')
}

btnmenu.addEventListener('click', show)

// ------------------- Da get no numero de itens no carrinho e exibe no menu -------------------
function numeroitenscarrinho() {
    let numeroprodutos = localStorage.getItem('numerocarrinho')

    if(numeroprodutos) {
        document.querySelector('.nmrcarrinho span').textContent = numeroprodutos
    }
}

numeroitenscarrinho()

 // ---------------------------- Abre e fecha o carrinho ----------------------------
let carrinhocomitem = document.querySelector('.blockcarrinho')
let fecharcarrinho = document.querySelector('.fecharopcoes1')
let abrircarrinho = document.querySelector('.nmrcarrinho')
let corpo = document.querySelector('body')


fecharcarrinho.addEventListener('click', esconder)
abrircarrinho.addEventListener('click', aparecer)

function esconder(){
    carrinhocomitem.style.display = 'none';
    corpo.style.overflow = 'auto';
}

function aparecer(){
    carrinhocomitem.style.display = 'flex';
    corpo.style.overflow = 'hidden';
    montarcarrinho()
}

// ---------------------------- Calcular custo total ---------------------------- 
function custotal(prt){
    let custocarrinho = localStorage.getItem('ValorTotal')

    if(custocarrinho != null) {
        custocarrinho = parseInt(custocarrinho)
        localStorage.setItem("ValorTotal", custocarrinho + prt.preço)
    }
    else{
        localStorage.setItem("ValorTotal",prt.preço)
    }



}

// ---------------------------- Montar produtos no carrinho ----------------------------
function montarcarrinho(){
    let itenscarrinho = localStorage.getItem('Produtos no Carrinho')
    itenscarrinho = JSON.parse(itenscarrinho)


    carrinhohtml = document.querySelector('.blockcarrinhoprodutos')  
    divdocarrinho = document.querySelector('.blockcarrinhofilho') 

    if (itenscarrinho && carrinhohtml){
        carrinhohtml.innerHTML = ''
        Object.values(itenscarrinho).map(item => {
            carrinhohtml.innerHTML +=  `
            <div class="produto">
                <img src="../../img/Carrinho/${item.tag}.PNG">
            </div>
            `
        })
    }
}

montarcarrinho()