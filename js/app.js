let button = document.getElementById('button')
let search = document.getElementById('search')
let global = document.getElementById('global')
let option2 = document.getElementById('option2')
let page = document.getElementById('page')
let footer = document.getElementById('footer')



function cambio(){
    console.log('ecambiado');
    button.classList.toggle('buttonx')
    search.classList.toggle('open')
    global.classList.toggle('open')
    option2.classList.toggle('open')
    page.classList.toggle('open')
    footer.classList.toggle('open')

}

button.addEventListener('click' , cambio)