/* -----------------------------------------------------------------------------------------------------------
        Script Carrinho */

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


let alugar = document.querySelectorAll('.btnalugar')
const nomeproduto = document.getElementById('produto').textContent


    // Ativa quando clica no botão alugar77
for (let i=0; i < alugar.length; i++){
    alugar[i].addEventListener('click', () => {
    numerocarrinho()
        
    console.log(conta(produtos, nomeproduto))
    })
}


    // Conta o numero de itens no carrinho
function numerocarrinho(){
    let numeroprodutos = localStorage.getItem('numerocarrinho')

    numeroprodutos = parseInt(numeroprodutos)

    if( numeroprodutos){
        localStorage.setItem('numerocarrinho', numeroprodutos + 1)
        document.querySelector('.nmrcarrinho span').textContent = numeroprodutos + 1
    } else{
        localStorage.setItem('numerocarrinho', 1)
        document.querySelector('.nmrcarrinho span').textContent = 1
    }


}

    //Verifica o index do produto apartir do nome
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

