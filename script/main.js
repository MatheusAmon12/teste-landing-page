/*const Main = {
    init: function(){
        this.cacheSelectors()
        this.bindEvents()
    },

    cacheSelectors: function(){
        this.$images = document.querySelectorAll('.image')
        this.$productName = document.querySelectorAll('.productName')
        this.$oldPrice = document.querySelectorAll('.oldPrice')
        this.$newPrice = document.querySelectorAll('.newPrice')
        this.$btnBuy = document.querySelectorAll('.buy')
    },

    bindEvents: function(){
        const self = this
        this.$images.forEach(function(img){
            img.onload = self.Events.$image_onload     
        })
    },

    Events: {
        $image_onload: 
            fetch('https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1')
            .then(function(response){
                return response.json()
            })
            .then(function(data){
                console.log(data)
            })
        ,
    },
}
Main.init()*/

const btn = document.querySelector('.buy')
const image = document.querySelectorAll('.image')
const productsName = document.querySelectorAll('.productName')
const items = document.querySelectorAll('.item')
let src
let c = 0

image.onload = 
    fetch(`https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1`)
    .then(toObject)
    .then(buildHtml)
    .catch(error)

function toObject(response){
    return response.json()
}

function buildHtml(data){
    console.log(items[1])
    console.log(data.products)
    
    items.forEach(function(item){
        let img = data.products[c].image
        let name = data.products[c].name
        let oldPrice = data.products[c].oldPrice
        let price = data.products[c].price
        let installmentsCount = data.products[c].installments.count
        let installmentsPrice = data.products[c].installments.value
        let description = data.products[c].description
        let windowWidth = window.innerWidth
        
        console.log(windowWidth)

        if (windowWidth < 1500){
            item.innerHTML = `
                <div class="photoProduct">
                    <img src="${img}" alt="" class="image">
                </div>
                <div class="infoProduct">
                    <h4 class="productName">${name}</h4>
                    <span class="oldPrice">De: R$${oldPrice}</span>
                    <span class="newPrice">Por: R$${price}</span>
                    <span>ou ${installmentsCount}x de R$${installmentsPrice}</span>
                    <button class="buy">Comprar</button>
                </div>
            `
    
            c++

        } else{
            item.innerHTML = `
                <div class="photoProduct">
                    <img src="${img}" alt="" class="image">
                </div>
                <div class="infoProduct">
                    <h4 class="productName">${name}</h4>
                    <span class="descriptionProduct">${description}</span>
                    <span class="oldPrice">De: R$${oldPrice}</span>
                    <span class="newPrice">Por: R$${price}</span>
                    <span>ou ${installmentsCount}x de R$${installmentsPrice}</span>
                    <button class="buy">Comprar</button>
                </div>
            `
    
            c++
        }

    })

    console.log(items)
}

function error(){
    console.log('Erro!')
}