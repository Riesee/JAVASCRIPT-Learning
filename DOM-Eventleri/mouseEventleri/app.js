  const cardBody = document.querySelectorAll(".card-body")[1];

  const title = document.querySelector("#tasks-title");


// Click Eventi

// title.addEventListener("click",run);



// double click eventi


// title.addEventListener("dblclick",run);


// Mouse Down eventi

// title.addEventListener("mousedown",run);


// Mouse Up Event

// title.addEventListener("mouseup",run);


// Mouse Over Event

// title.addEventListener("mouseover",run);


// Mouse Out Event

// title.addEventListener("mouseout",run);

// cardBody.addEventListener("mouseover",run);


// Mouse Enter ve Mouse Leave

cardBody.addEventListener("mouseenter",run);
cardBody.addEventListener("mouseleave",run);







function run(e){
    console.log(e.type);
}