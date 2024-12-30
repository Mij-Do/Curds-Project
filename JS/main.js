// Price&Taxes&ads&discount total 

let price = document.getElementById("price");
let texas = document.getElementById("texas");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");

function totalPrice () {
    if (typeof price.value && typeof texas.value && typeof ads.value !== "number") {
        total.style.backgroundColor = "red";
        
    }
}
totalPrice();