// Elementi Id'e göre seçme

let element;

element = document.getElementById("todo-form");
element = document.getElementById("tasks-title");



// Element Class'a göre seçme

element = document.getElementsByClassName("list-group-item");

element = document.getElementsByClassName("card-header");


// Element Tag'e göre seçme

element = document.getElementsByTagName("div");



// Query Selector - Css Selector - tek bir element

element = document.querySelector("#todo-form");
element = document.querySelector("#tasks-title");

element = document.querySelector(".list-group-item");


element = document.querySelector("li");
element = document.querySelector("div");



// QuerySelectorAll - tüm elementleri seç

element = document.querySelectorAll(".list-group-item");

element.forEach(function(el){
    console.log(el);
})






console.log(element)