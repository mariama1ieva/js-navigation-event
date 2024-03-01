"use strict"

let h1 = document.querySelector("h1");
let test = document.querySelector(".test")
// let span = document.querySelector("span")
let product = document.querySelector(".product")
let item1 = document.querySelector(".item1")
let item = document.querySelector(".item")

// console.log(h1.nextElementSibling);

// console.log(test.lastElementChild.lastElementChild);
// console.log(span.parentNode);
// console.log(product.nextElementSibling.firstElementChild);
// console.log(item1.parentNode.parentNode);
// console.log(h1.closest(".product").children);
// console.log(document.querySelector("span").previousElementSibling.firstElementChild.innerHTML);


let btns = document.querySelectorAll("button");

btns.forEach(btn => {
    // console.log(btn);
    btn.addEventListener("click",function(e){
    //  this.nextElementSibling.style.backgroundColor = "red" ;
// console.log(e.target);

    })
});

// let button = document.querySelector("button");
// let color = document.querySelector("body")

// document.addEventListener("keydown",function(e){
//     if(e.keyCode==13){
//         color.style.backgroundColor = "red"
//     }
// });


// let sideBar  = document.querySelector(".sidebar")
// let open = document.querySelector(".open")
// let close = document.querySelector(".close");

// open.addEventListener("click",function(){
//     sideBar.classList.remove("move-sidebar")
//     this.classList.add("d-none")
//     this.previousElementSibling.classList.remove("d-none")
// })
// close.addEventListener("click",function(){
//     sideBar.classList.add("move-sidebar")
//     this.classList.add("d-none")
//     this.nextElementSibling.classList.remove("d-none")
// })




let input = document.querySelector("input")

// input.addEventListener("keydown", function(){
// console.log("Agshin bey");
// })
// input.addEventListener("keyup", function(){
//     console.log("Agshin bey");
//     })

// input.addEventListener("keypress", function(){
//         console.log("Agshin bey");
//         })
    

// let select = document.querySelector(".form-select")

// select.addEventListener("change",function(){
//     console.log(this.value);
// })


// console.log(document.querySelector("a").hasAttribute("href"));
// console.log(document.querySelector("a").getAttribute("href"));

// document.querySelector("a").setAttribute("href","salam")


let googleBtn = document.querySelector(".google");

let linkedinBtn = document.querySelector(".linkedin");

googleBtn.addEventListener("click",function(){
    document.querySelector("a").setAttribute("href","https://www.google.com/")
    document.querySelector("a").innerText = "go to google"
})

linkedinBtn.addEventListener("click",function(){
    document.querySelector("a").setAttribute("href","https://az.linkedin.com/")
    document.querySelector("a").innerText = "go to linkedin"
})