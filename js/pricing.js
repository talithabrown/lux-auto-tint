
let carbonLabel = document.getElementById('carbon-label')
let ceramicLabel = document.getElementById('ceramic-label')

function showCarbonPrices() {
    ceramicLabel.classList.remove('active-price-toggle')
    carbonLabel.classList.add('active-price-toggle')

    let ceramicPrices = document.getElementsByClassName('ceramic-price')
    for (let i = 0; i < ceramicPrices.length; i++) {
        ceramicPrices[i].classList.add('display-none')
    }

    let carbonPrices = document.getElementsByClassName('carbon-price')
    for (let i = 0; i < carbonPrices.length; i++) {
        carbonPrices[i].classList.remove('display-none')
    }

}

function showCeramicPrices() {
    carbonLabel.classList.remove('active-price-toggle')
    ceramicLabel.classList.add('active-price-toggle')

    let carbonPrices = document.getElementsByClassName('carbon-price')
    for (let i = 0; i < carbonPrices.length; i++) {
        carbonPrices[i].classList.add('display-none')
    }

    let ceramicPrices = document.getElementsByClassName('ceramic-price')
    for (let i = 0; i < ceramicPrices.length; i++) {
        ceramicPrices[i].classList.remove('display-none')
    }
}

function hideCeramicPrices() {
    let ceramicPrices = document.getElementsByClassName('ceramic-price')
    for (let i = 0; i < ceramicPrices.length; i++) {
        ceramicPrices[i].classList.add('display-none')
    }
}

hideCeramicPrices()
carbonLabel.addEventListener('click', showCarbonPrices)
ceramicLabel.addEventListener('click', showCeramicPrices)