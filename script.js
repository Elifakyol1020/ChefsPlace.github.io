const search= document.querySelector(".search-form");
const buttons=document.querySelector("#search-btn");
const cartitem=document.querySelector(".cart-items-container");
const cartbtn=document.querySelector("#cart-btn");
const menu=document.querySelector(".navbar");
const menubtn=document.querySelector("#menu-btn");
buttons.addEventListener('click',()=>{
search.classList.toggle("active");
document.addEventListener("click",e=>{
    if(!e.composedPath().includes(buttons)&&!e.composedPath().includes(search)){
        search.classList.remove("active");
    }
})
})
cartbtn.addEventListener('click',()=>{
    cartitem.classList.toggle("active");
    document.addEventListener("click",e=>{
        if(!e.composedPath().includes(cartbtn)&&!e.composedPath().includes(cartitem)){
            cartitem.classList.remove("active");
        }
 })
})
menubtn.addEventListener('click',()=>{
    menu.classList.toggle("active");
    document.addEventListener("click",e=>{
        if(!e.composedPath().includes(menubtn)&&!e.composedPath().includes(menu)){
            menu.classList.remove("active");
        }
})
})