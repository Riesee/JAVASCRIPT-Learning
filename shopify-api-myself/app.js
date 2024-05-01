document.addEventListener("DOMContentLoaded",useEffect);
productContainer = document.getElementById("productContainer");
navList = document.getElementById("navList");
modal = document.getElementById("exampleModal");
urll = "https://fakestoreapi.com/products";
navbarItems = document.getElementById("navbarSupportedContent");
clearCart = document.getElementById("clearCart");
cart = document.querySelector(".dropdown-menu");

addToCart = document.getElementById("addToCart");




function deleteHandler(id){
    productContainer.removeChild(document.getElementById(id+"id"));
}


function useEffect(){

    navList.addEventListener("click",categoryHandler)
    showAllProducts("https://fakestoreapi.com/products");
    showAllCategories();
    productContainer.addEventListener("click",detayHandler)
    

    clearCart.addEventListener("click",clearCartHandler)
    addToCart.addEventListener("click",addToCartHandler)
    
}

function addToCartHandler(){
    console.log(modal);
    if(modal.innerHTML!= ""){
        cart.innerHTML += `
        <li><a class="dropdown-item" href="#">${modal.name}</a>
        <span class="badge badge-primary badge-pill">1</span>
        </li>
        `
    }
}

function clearCartHandler(){
    if(confirm("Are you sure you want to clear the cart?")) cart.innerHTML = "";
    
}

function modalHandler(title, description, price){
    console.log(title, description, price);
}

function detayHandler(e){
    if (e.target.className == "btn btn-primary"){
        title = e.target.parentElement.parentElement.children[0].innerText;
        description = e.target.parentElement.parentElement.children[1].innerText;
        price = e.target.parentElement.parentElement.children[2].innerText;

        document.getElementById("exampleModalLabel").innerHTML = title;
        document.querySelector("#modalBody").innerHTML = description;
        document.getElementById("price").innerHTML = price;


        modalHandler(title, description, price)
    }
    
}

function categoryHandler(e){
    data = encodeURI(e.target.id);
    productContainer.innerHTML = "";
    showAllProducts("https://fakestoreapi.com/products/category/"+data)
    console.log(data, "category");

}


function showAllCategories(){
    fetch("https://fakestoreapi.com/products/categories")
   .then(response => response.json())
   .then(data => {
    data.map(categoryName => {
        navList.innerHTML += `
        <li class="nav-item">
            <button class="nav-link" aria-current="page" href="" id= "${categoryName}">${categoryName.toUpperCase()}</button>
        </li>  
        `
    })

})}



function showAllProducts(url){
    productContainer.innerHTML = ""

    fetch(url)
   .then(response => response.json())
   .then(data => {
    
        data.forEach(product => {

            productContainer.innerHTML +=

            `
            <div class="card m-3 col-4" style="max-width: 18rem; max-height: 50rem" id = "${product.id}id">
                <img src="${product.image}" class="card-img-top img-fluid rounded" style="width:15rem; height:20rem">
                <div class="card-body row">
                    <div>
                        <h5 class="card-title">${product.title}</h5>
                    </div>

                    <div class="card-text text-wrap" style="height: 10rem; width: 15rem;  overflow: hidden; text-overflow: ellipsis!important;">
                        ${product.description}
                    </div>

                    <div><b>${product.price} TL</b></div>


                    <div>
                        <btn href="#" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" id = "${product.id}pro">Detay</btn>
                        <btn href="#" class="btn btn-danger" onclick="deleteHandler(${product.id})">Delete</btn>
                    </div>
                    
                </div>
            </div>
            `
            
            
        })
    })
   }





