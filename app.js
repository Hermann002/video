const btn1 = document.querySelector('#btn1')
const btn2 = document.querySelector('#btn2')
const ifr = document.querySelector('.ifr')

close(ifr)
btn1.addEventListener('click',opena)
btn2.addEventListener('click',closa)

function open(element){
    element.style.display = "block"
}

function close(element){
    element.style.display = "none"
}

function opena(){
    open(ifr)
}

function closa(){
    close(ifr)
}