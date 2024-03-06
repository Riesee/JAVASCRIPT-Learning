// Klavye Eventleri

const header = document.querySelector(".card-header");
const todoInput = document.querySelector("#todo");

todoInput.addEventListener("keyup",changeText);

function changeText(e){
    header.textContent = e.target.value;
    // console.log(e.target.value)
}





/* BENİM YAZDIĞIM KODLAR!!!!!

const todoInput = document.getElementById("todo");
const hh1 = document.querySelector(".card-header");

console.log(hh1.textContent)


todoInput.addEventListener("click", fcs)


function fcs(e){
    todoInput.addEventListener("keypress",run);
}

function run(a){
    if (hh1.textContent == "Todo List") hh1.textContent = "";
    console.log(a.key)
    hh1.textContent += a.key;
}

 */

// Keypress
// document.addEventListener("keypress",run);

// function run(e) {
//     // console.log(e.which);
//     console.log(e.key);
// }

// Keydown

// document.addEventListener("keydown",run);

// function run(e) {
//     // console.log(e.which);
//     console.log(e.key);
// }



// Keyup

// document.addEventListener("keyup",run);

// function run(e) {
//     // console.log(e.which);
//     console.log(e.key);
// }
