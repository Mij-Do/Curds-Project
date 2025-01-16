// create section
// Price&Taxes&ads&discount total 

let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let createBtn = document.getElementById("createBtn");
let search = document.getElementById("search");

// getTotal 
function getTotal () {
    if (price.value != "") {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.backgroundColor = "green";
    } else {
        total.innerHTML = "";
        total.style.backgroundColor = "red";
    }
}

// create

let dataProduct;

if (localStorage.product != null) {
    dataProduct = JSON.parse(localStorage.product);
} else {
    dataProduct = [];
}

createBtn.addEventListener("click", function () {
    let product = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value,
    }
    dataProduct.push(product);
    window.localStorage.setItem("product", JSON.stringify(dataProduct));

    // clear data func
    clearData ();
});

// clear data
function clearData () {
    title.value = '';
    price.value = '';
    taxes.value = '';
    ads.value = '';
    discount.value = '';
    total.innerHTML = '';
    total.style.backgroundColor = "red";
    category.value = '';
    count.value = '';
};