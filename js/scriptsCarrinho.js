// ---------------------------- produtos + infos ----------------------------
let produtos = [
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

// ---------------------------- Ativa quando clica no botão alugar ----------------------------
let alugar = document.querySelectorAll('.opcooesdiv2')
const nomeproduto = document.getElementById('produto').textContent



for (let i=0; i < alugar.length; i++){
    alugar[i].addEventListener('click', () => {
        numerocarrinho(produtos[conta(produtos, nomeproduto)])
        custotal(produtos[conta(produtos, nomeproduto)])
        
    })
}


// ---------------------------- Conta o numero de itens no carrinho ----------------------------
function numerocarrinho(prt){
    let numeroprodutos = localStorage.getItem('numerocarrinho')

    numeroprodutos = parseInt(numeroprodutos)

    if( numeroprodutos){
        localStorage.setItem('numerocarrinho', numeroprodutos + 1)
        document.querySelector('.nmrcarrinho span').textContent = numeroprodutos + 1
    } else{
        localStorage.setItem('numerocarrinho', 1)
        document.querySelector('.nmrcarrinho span').textContent = 1
    }

    additem(prt)

}

// -------------------------- Verifica o index do produto apartir do nome --------------------------
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

// ----------------------- Verificar se o item está no local storage e o add -----------------------
function additem(prt){
    let itemcarrinho = localStorage.getItem('Produtos no Carrinho')
    let qtid = localStorage.getItem('numerocarrinho')
    itemcarrinho = JSON.parse(itemcarrinho)

    if( itemcarrinho != null){

        if(itemcarrinho[prt.tag] == undefined){
            itemcarrinho = {
                ...itemcarrinho,
                [qtid] : prt
            }

        }
        itemcarrinho[qtid].nocarrinho += 1
    }
    else{
    
        prt.nocarrinho = 1
        itemcarrinho = {
            [qtid]: prt
        }
    }

    localStorage.setItem('Produtos no Carrinho', JSON.stringify(itemcarrinho))
}


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