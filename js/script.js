// ---------------------------- Script Botão menu superior ----------------------------

const btnmenu = document.getElementById('clicavel')
const options = document.getElementById('options')

function show(){
    options.classList.toggle('ativo')
    options.classList.toggle('options')
}

btnmenu.addEventListener('click', show)

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
    atualizar()
    selecionabotãodeletar()
}

// ------------------ Atualiza o carrinho ------------------

var cartitens = []


function atualizar(){
    let carrinhohtml = document.querySelector('.blockcarrinhoprodutos')
    let valortotal = document.querySelector('.valortotalexibir')
    let somavalor = 0
    
    if( cartitens.length === 0){
        itenslocalstorage = localStorage.getItem('carrinhoitens')
        itenslocalstorage = JSON.parse(itenslocalstorage)
        for(i in itenslocalstorage){
            cartitens.push(itenslocalstorage[i])
        }
    }
    carrinhohtml.innerHTML = ''

    for(let i=0; i < cartitens.length; i++){
        
        somavalor += cartitens[i].preço

        carrinhohtml.innerHTML +=  `
        <div  class="produto">

            <div class="deletarproduto">
                <label>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div class="produtodv1">
                <img src="../../img/Carrinho/${cartitens[i].tag}.PNG">
            </div>
        
            <div class="produtodv2">
                <h4>${cartitens[i].nome}</h4>
                <p>Data primeiro dia: ${cartitens[i].datainicial}  </p>
                <p>data ultimo dia: ${cartitens[i].datafinal}  </p>
                <p>Quantidade de dias: ${cartitens[i].dias}  </p>
                <p>Valor do aluguel: R$ ${cartitens[i].preço}</p>
            </div>
        </div>
        ` 
    }

    
    console.log(valortotal)
    
    valortotal.innerHTML = ''
    valortotal.innerHTML +=  `<h4> Valor Total: R$ ${somavalor} </h4>`

    selecionabotãodeletar()
    cartitens = []
}

atualizar()

// ------------------ Deleta item do carrinho ------------------

function selecionabotãodeletar(){

    let botaodeletar = document.querySelectorAll('.deletarproduto')
    let divprodutonocarrinho = document.querySelectorAll('.produto')
    let itemnocarrinho = localStorage.getItem('carrinhoitens')
    itemnocarrinho = JSON.parse(itemnocarrinho)
  
    for (let i=0; i < botaodeletar.length ; i++){
        botaodeletar[i].addEventListener('click', () => { 
            
            localStorage.removeItem('carrinhoitens')
            itemnocarrinho.splice(i,1)

            localStorage.setItem('carrinhoitens',JSON.stringify(itemnocarrinho))
            atualizar()
        })       
    }

}
