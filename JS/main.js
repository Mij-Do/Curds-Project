// create section
// Price&Taxes&ads&discount total 


let price = document.getElementById("price");
let texas = document.getElementById("texas");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");

// Function to save or remove item from localStorage
function saveOrRemoveFromLocalStorage(key, value) {
    if (value.trim() === "") {
        localStorage.removeItem(key); // Remove if value is empty
    } else {
        localStorage.setItem(key, value); // Save if value is not empty
    }
}


// Event listeners for inputs
price.addEventListener("input", function () {
    saveOrRemoveFromLocalStorage("price", this.value);
    calculateTotal();
});
texas.addEventListener("input", function () {
    saveOrRemoveFromLocalStorage("texas", this.value);
    calculateTotal();
});
ads.addEventListener("input", function () {
    saveOrRemoveFromLocalStorage("ads", this.value);
    calculateTotal();
});
discount.addEventListener("input", function () {
    saveOrRemoveFromLocalStorage("discount", this.value);
    calculateTotal();
});

// Function to calculate and display total
function calculateTotal() {
    let priceVal = parseInt(localStorage.getItem("price")) || 0;
    let texasVal = parseInt(localStorage.getItem("texas")) || 0;
    let adsVal = parseInt(localStorage.getItem("ads")) || 0;
    let discountVal = parseInt(localStorage.getItem("discount")) || 0;

    let totalValue = priceVal + texasVal + adsVal - discountVal;
    
    if (price.value == ''){
        total.style.backgroundColor = "red";
        total.innerHTML = `Total: 0`;
    } else if (localStorage.length > 0 && totalValue > 0) {
        total.style.backgroundColor = "green";
        total.innerHTML = `Total: ${totalValue}`;
    }
}
// Load initial values and calculate total
calculateTotal();



// show section
let titleShow = document.getElementById("titleShow");
let priceShow = document.getElementById("priceShow");
let taxesShow = document.getElementById("taxesShow");
let adsShow = document.getElementById("adsShow");
let discontShow = document.getElementById("discontShow");
let categoryShow = document.getElementById("categoryShow");
