document.addEventListener("DOMContentLoaded",useEffect);
productContainer = document.getElementById("productContainer");
navList = document.getElementById("navList");
modal = document.getElementById("exampleModal");
urll = "https://fakestoreapi.com/products";
navbarItems = document.getElementById("navbarSupportedContent");
cart = document.querySelector(".dropdown-menu");

addToCart = document.getElementById("addToCart");
clearCart = document.getElementById("clearCart");




function deleteHandler(id){
    productContainer.removeChild(document.getElementById(id+"id"));
}


function useEffect(){

    navList.addEventListener("click",categoryHandler)
    showAllProducts("https://fakestoreapi.com/products");
    showAllCategories();
    productContainer.addEventListener("click",detayHandler)
    

    addToCart.addEventListener("click",addToCartHandler)
    modal.addEventListener("click",modalHandler)
    
}

function addToCartHandler(){
    modalInside = modalHandler()

    if (cart.innerHTML.indexOf(src=modalInside[3]) == -1) {
        if (modalInside[0]!= ""){
                cart.innerHTML += `
                <li class="list-group-item d-flex justify-content-between align-items-center p-3 row">
                    <img class="p-2 col-4" style="width:5rem;" src="${modalInside[3]}">
                    <span class="col-4">${modalInside[2]}</span>
                    <span class=" col-2 badge bg-success rounded-pill">${modalInside[4]}</span>
                    <btn class="btn btn-danger col-2 badge rounded-pill">X</btn>
                    <hr class="dropdown-divider">
                </li>
                `;
            }else{
                cart.innerHTML += `
                <li><btn class="dropdown-item btn btn-danger bg-danger text-white" id="clearCart" onclick="clearCartHandler()" >Sepeti temizle</btn></li>
                `;        
            }
    }
    
    
}

function clearCartHandler(){
    console.log(cart.innerHTML, "clearcarthandler");
    
    if(confirm("Are you sure you want to clear the cart?")) {
        cart.innerHTML = `
        <li><btn class="dropdown-item btn btn-danger bg-danger text-white" id="clearCart" onclick="clearCartHandler()">Sepeti temizle</btn></li>
        
        `;
        // clearCart.addEventListener("click", clearCartHandler);
    }
    
}

function modalHandler(e){
    title = exampleModalLabel.innerText
    description = modalBody.innerText
    price = document.getElementById("price").innerText
    photoURL = document.getElementById("modalPhoto").src;
    index = 1;

    return [title, description, price, photoURL, index]

}

function detayHandler(e){
    if (e.target.className == "btn btn-primary"){
        title = e.target.parentElement.parentElement.children[0].innerText;
        description = e.target.parentElement.parentElement.children[1].innerText;
        price = e.target.parentElement.parentElement.children[2].innerText;

        photoURL = (e.target.parentElement.parentElement.parentElement.firstElementChild.src);

        document.getElementById("exampleModalLabel").innerHTML = title;
        document.querySelector("#modalBody").innerHTML = description;
        document.getElementById("price").innerHTML = price;
        document.getElementById("modalPhoto").src = photoURL;

    }
    
}

function categoryHandler(e){
    data = encodeURI(e.target.id);
    productContainer.innerHTML = "";
    showAllProducts("https://fakestoreapi.com/products/category/"+data)

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





