const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Air Force",
        price: 2499.00,
        colors: [
            {
                code: "black",
                img: "img/ni-removebg-preview.png",
            },
            {
                code: "blue",
                img: "img/nik-removebg-preview.png"
            },
        ],
    },
    //     {
    //         id: 1,
    //         title: "Air Force",
    //         price: 2499.00,
    //         colors: [
    //             {
    //                 code: ""
    //             }  
    // }
];

let choosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");


menuItem.forEach((item, index) => {
    item.addEventListener("click", () => {
        //chane the current slide
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        // change the choosen product
        choosenProduct = products[index]
        //change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title
        // currentProductPrice.textContent = choosenProduct.price
        currentProductImg.src = textContent = choosenProduct.colors[0].img

        choosenProductColors.forEach((color, index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });

    });
});


currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
        currentProductImg.src = choosenProduct.colors[index].img
    });
});


currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});



const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
    payment.style.display="flex"
})
close.addEventListener("click",()=>{
    payment.style.display="none"
})