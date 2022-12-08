let btn = document.querySelector('.btn')
let overlay = document.querySelector('.overlay')
let mobileNavbar = document.querySelector('.mobile-navbar')
const links = document.querySelectorAll('.link')

btn.addEventListener('click', ()=>{
    mobileNavbar.classList.toggle('open')
})

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', ()=>{
        mobileNavbar.classList.toggle('open')
    })
}