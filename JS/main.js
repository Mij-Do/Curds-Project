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
let mood = 'create';
let tmp;

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
        title: title.value.toLowerCase(),
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        category: category.value.toLowerCase(),
    }
    if (mood === 'create') {
        if (product.count > 1) {
            for (let i = 0; i < product.count; i++) {
                dataProduct.push(product);
            } 
        } else {
            dataProduct.push(product);
        }
    } else {
        dataProduct[tmp] = product;
        mood = 'create';
        createBtn.innerHTML = 'Create';
        count.style.display = 'block';
    }
    
    
    window.localStorage.setItem("product", JSON.stringify(dataProduct));

    // clear data func
    clearData ();
    // show data
    showData ();
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


// read data

function showData () {
    let table = '';
    for (let i = 0; i < dataProduct.length; i++) {
        table += `
            <tr>
                <td>${i}</td>
                <td>${dataProduct[i].title}</td>
                <td>${dataProduct[i].price}</td>
                <td>${dataProduct[i].taxes}</td>
                <td>${dataProduct[i].ads}</td>
                <td>${dataProduct[i].discount}</td>
                <td>${dataProduct[i].category}</td>
                <td>${dataProduct[i].total}</td>
                <td><button onclick="updateData (${i})" id='update'>update</button></td>
                <td><button onclick="deleteData (${i})"  id='delete'>delete</button></td>
            </tr>
        `;
    }
    let tbody = document.getElementById('tbody').innerHTML = table;
    let deleteAll = document.getElementById('deleteAll');
    if (dataProduct.length > 0) {
        deleteAll.innerHTML = `<button onclick="deleteAll ()">Delete All(${dataProduct.length})</button>`;
    } else {
        deleteAll.innerHTML = '';
    }
};

showData ();

// delete func
function deleteData (i) {
    dataProduct.splice(i,1);
    localStorage.product = JSON.stringify(dataProduct);
    showData ();
};

// delete all
function deleteAll () {
    localStorage.clear();
    dataProduct.splice(0);
    showData ();
};

// update data
function updateData (i) {
    title.value = dataProduct[i].title;
    price.value = dataProduct[i].price;
    taxes.value = dataProduct[i].taxes;
    ads.value = dataProduct[i].ads;
    discount.value = dataProduct[i].discount;
    getTotal();
    count.style.display = 'none';
    createBtn.innerHTML = `Update`;
    category.value = dataProduct[i].category;
    mood = 'update';
    tmp = i;
    scroll({
        top: 0,
        behavior: "smooth",
    });
}

// search function

let searchMood = 'title';

function searchFunc (id) {
    if (id == 'searchTitle') {
        searchMood = 'title';
        search.placeholder = 'Search By Title';
    } else {
        searchMood = 'category';
        search.placeholder = 'Search By Category';
    }
    search.focus();
    showData();
    search.value = '';
}

function searchData (value) {
    let table = '';
    for (let i = 0; i < dataProduct.length; i++) {
        if (dataProduct[i].title.includes(value.toLowerCase())) {
            table += `
                <tr>
                    <td>${i}</td>
                    <td>${dataProduct[i].title}</td>
                    <td>${dataProduct[i].price}</td>
                    <td>${dataProduct[i].taxes}</td>
                    <td>${dataProduct[i].ads}</td>
                    <td>${dataProduct[i].discount}</td>
                    <td>${dataProduct[i].category}</td>
                    <td>${dataProduct[i].total}</td>
                    <td><button onclick="updateData (${i})" id='update'>update</button></td>
                    <td><button onclick="deleteData (${i})"  id='delete'>delete</button></td>
                </tr>
            `;
            let tbody = document.getElementById('tbody').innerHTML = table;
        } else if  (dataProduct[i].category.includes(value.toLowerCase())) {
            table += `
                <tr>
                    <td>${i}</td>
                    <td>${dataProduct[i].title}</td>
                    <td>${dataProduct[i].price}</td>
                    <td>${dataProduct[i].taxes}</td>
                    <td>${dataProduct[i].ads}</td>
                    <td>${dataProduct[i].discount}</td>
                    <td>${dataProduct[i].category}</td>
                    <td>${dataProduct[i].total}</td>
                    <td><button onclick="updateData (${i})" id='update'>update</button></td>
                    <td><button onclick="deleteData (${i})"  id='delete'>delete</button></td>
                </tr>
            `;
            let tbody = document.getElementById('tbody').innerHTML = table;
        }
    }
}