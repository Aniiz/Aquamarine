/* -----------------------------------------------------------------------------------------------------------
        Script Botão menu superior */

const btnmenu = document.getElementById('clicavel')

function show(){
    const options = document.getElementById('options')
    options.classList.toggle('ativo')
    options.classList.toggle('options')
}

btnmenu.addEventListener('click', show)