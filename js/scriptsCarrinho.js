// ---------------------------- produtos + infos ----------------------------
const produtos = [
    {
        nome:'Azimut Grande S10',
        tag:'AzimutS10',
        preço: 100,
        nocarrinho: 0 
    },
    {
        nome:'Azimut S7',
        tag:'AzimutS7',
        preço: 100,
        nocarrinho: 0 
    },
    {
        nome:'JET SKI ULTRA 310X',
        tag:'JTultra310x',
        preço: 100,
        nocarrinho: 0 
    },
    {
        nome:'JET SKI ULTRA 310LX-S',
        tag:'JTultra310lxs',
        preço: 100,
        nocarrinho: 0 
    },
    {
        nome:'Lagoon 46',
        tag:'Lagoon46',
        preço: 100,
        nocarrinho: 0 
    },
    {
        nome:'Nautitech 46 Open',
        tag:'Lagoon46open',
        preço: 100,
        nocarrinho: 0 
    },
]



// ---------------------------- Abrir opções de alugel ----------------------------

const fundocinza = document.getElementById('blockcopcoes')
const botfechar = document.getElementById('fecharopcoes')
const iniciaralugar = document.getElementById('btnalugar')


botfechar.addEventListener('click', esconde)
iniciaralugar.addEventListener('click', aparece)

function esconde(){
    fundocinza.style.display = 'none';
}

function aparece(){
    fundocinza.style.display = 'flex';
}

 // ---------------------------- add item no carrinho ----------------------------
 function additemcarrinho(){
    let carrinhohtml = document.querySelector('.blockcarrinhoprodutos')
    let valortotalhtml = document.querySelector('.valortotal')
    let nomeproduto = document.getElementById('produto').textContent

    if( cartitens.length === 0){
        let itenslocalstorage = localStorage.getItem('carrinhoitens')
        itenslocalstorage = JSON.parse(itenslocalstorage)
        for(i in itenslocalstorage){
            cartitens.push(itenslocalstorage[i])
        }
    }

    carrinhohtml.innerHTML = ''
    prt = produtos[conta(produtos, nomeproduto)]
    cartitens.push(prt)
    for(let i=0; i < cartitens.length; i++){
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
                <p>Valor: R$ ${cartitens[i].preço}</p>
                <p>teste: ${cartitens[i].nocarrinho}  </p>
            </div>
        </div>
        ` 
    }
    selecionabotãodeletar()
    localStorage.setItem('carrinhoitens',JSON.stringify(cartitens))
    cartitens = []
}

const confirmaropcoes = document.querySelector('.opcooesdiv2')

confirmaropcoes.addEventListener('click' , additemcarrinho)

 //------------- Pega o nome do produto apartir da pagina e verifica seu index na lista -------------

function conta(obj, val){
    i = 0
    for(item in obj){
        for(var chave in obj[i]) {
            if(String(obj[i][chave]) === val) {
                return i;
            }
        }
        i ++
    }
}

