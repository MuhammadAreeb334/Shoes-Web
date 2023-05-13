const wrapper = document.querySelector(".sliderWrapper")
const menuItem = document.querySelectorAll(".menuItem")

const products = [
    {
        id : 1,
        title : "AIR FORCE",
        price : 119,
        colors: [
            {
                code:"black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png",
            },
        ],
    },
    {
        id : 2,
        title : "JORDAN",
        price : 149,
        colors: [
            {
                code:"lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id : 3,
        title : "BLAZER",
        price : 119,
        colors: [
            {
                code:"lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png",
            },
        ],
    },
    {
        id : 4,
        title : "CRATER",
        price : 119,
        colors: [
            {
                code:"black",
                img: "./img/crater.png",
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id : 5,
        title : "HIPPIE",
        price : 99,
        colors: [
            {
                code:"gray",
                img: "./img/hippie.png",
            },
            {
                code: "black",
                img: "./img/hippie2.png",
            },
        ],
    },
]
let choosenProduct = products[0]
const currentproductImg = document.querySelector(".productImg")
const currentproductTitle = document.querySelector(".productTitle")
const currentproductPrice = document.querySelector(".productPrice")
const currentproductcolor = document.querySelectorAll(".color")
const currentproductsize = document.querySelectorAll(".size")
const close = document.querySelector("#close")
const payment = document.querySelector(".payment")
const productBuy = document.querySelector(".productBuy")

menuItem.forEach(function(item, index){
    item.addEventListener('click', function(){
        //change the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`
        
        //change the choosen product
        choosenProduct = products[index]

        //change details of current product

        currentproductTitle.textContent = choosenProduct.title
        currentproductPrice.textContent = "$" + choosenProduct.price
        currentproductImg.src = choosenProduct.colors[0].img
        
        //assign new colors
        currentproductcolor.forEach(function(color, index){
            color.style.backgroundColor = choosenProduct.colors[index].code
        })
    })
})

currentproductcolor.forEach(function(color, index){
    color.addEventListener('click', function(){
        currentproductImg.src = choosenProduct.colors[index].img
    })
})
currentproductsize.forEach(function(size,index){
    size.addEventListener('click', function(){
        currentproductsize.forEach(function(size){
            size.style.backgroundColor = "white"
            size.style.color = "black"
        })
        size.style.backgroundColor = "black"
        size.style.color = "white"
    })
})

/*close icon*/ 
close.addEventListener('click', function(){
    payment.style.display = "none"
})

productBuy.addEventListener('click', function() {
    payment.style.display = "flex"
})































/*menuItem[0].addEventListener('click', function() {
    wrapper.style.transform = "translateX(0px)"
})
menuItem[1].addEventListener('click', function() {
    wrapper.style.transform = "translateX(-100vw)"
})
menuItem[2].addEventListener('click', function() {
    wrapper.style.transform = "translateX(-200vw)"
})
menuItem[3].addEventListener('click', function() {
    wrapper.style.transform = "translateX(-300vw)"
})
menuItem[4].addEventListener('click', function() {
    wrapper.style.transform = "translateX(-400vw)"
})*/

