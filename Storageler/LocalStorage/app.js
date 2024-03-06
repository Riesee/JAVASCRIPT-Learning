// Local Storage

// SetItem

// localStorage.setItem("Haraket","Burpee");
// localStorage.setItem("tekrar",50);



// GetItem

// const value = localStorage.getItem("tekrar");
// console.log(value);
// console.log(typeof value);


// Clear Local Storage

// localStorage.clear();

// localStorage.setItem("Haraket","Burpee");
// localStorage.setItem("tekrar",50);

// console.log(localStorage.getItem("sport"));


// if (localStorage.getItem("Haraket") === null){
//     console.log("Sorguladığınız Veri Bulunmuyor.");
// }
// else {
//     console.log("Sorguladığınız Veri Bulunuyor.");
// }



// LocalStorage - Array yazma

// const todos = ["Todo 1","Todo 2","Todo 3"];

// localStorage.setItem("todos", JSON.stringify(todos));

// const value = JSON.parse(localStorage.getItem("todos"));

// console.log(value);




/////////////////////////////////////////////////////////////







const form = document.getElementById("todo-form");
const todoInput = document.getElementById("todo");



form.addEventListener("submit",addToDo);


function addToDo(e){
    const value = todoInput.value;


    let todos;

    if(localStorage.getItem("todos") === null) {
        todos = [];
    }
    else{
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(value);

    localStorage.setItem("todos", JSON.stringify(todos));






    e.preventDefault();
}