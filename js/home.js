
let intro = document.querySelector('.intro');
let logoContainer = document.querySelector('.logo-container-div')
let logo = document.querySelector('.intro-logo')

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {

        setTimeout(() => {
            logo.classList.add('start-animation')
        }, 400)

        setTimeout(() => {
            logo.classList.remove('start-animation')
            logo.classList.add('fade')
        }, 3000)

        setTimeout(() => {
            intro.style.top = '-100vh'
        }, 2300)

    })
})