
const searchTodoForm = document.getElementById('searchTodoForm');
const searchTodo = document.getElementById('searchTodo');
const newTodoForm = document.getElementById('newTodoForm');
const newTodo = document.getElementById('newTodo');
const editTodo = document.getElementById('editTodo');
const todoList = document.getElementById('todoList');
const clearAll = document.getElementById('clearAll');

const modal = document.getElementById('exampleModal');
const modalCancel = document.getElementById('cancel');
const modalSubmit = document.getElementById('submit');
const modalInput = document.getElementById('modalBodyInput');

const local = new LocalStorage();
const ui = new UI();


eventListeners();

function eventListeners(){
    searchTodoForm.addEventListener('submit', onSearchTodoComplete)
    newTodoForm.addEventListener('submit', onNewTodoComplete)
    clearAll.addEventListener('click', onClearAllComplete)
    document.addEventListener('DOMContentLoaded',UseEffect)
    todoList.addEventListener('click', onTodoList)

    modalSubmit.addEventListener('click', onModalSubmit)
}


function onModalSubmit(){
    todoList.innerHTML = ""
    let oldTodo = modal.childNodes[1].childNodes[1].childNodes[3].childNodes[1].childNodes[0].data;
    console.log(oldTodo)
    local.editTodo(oldTodo, modalInput.value)
    UseEffect();

    modalInput.value = "";

    modalCancel.click();

    

    ui.showAlert("Success","alert-success");
}

function onTodoList(e){
    
    if (e.target.id === 'deleteTodo'){
        oldTodo = e.target.parentElement.childNodes[3].innerText.trim()
        e.target.parentElement.parentElement.parentElement.remove();
        local.removeItem(oldTodo);
        ui.showAlert("Todo Deleted Success", "alert-success");
    }
    if (e.target.id === 'editTodo'){
        console.log("edited");
        oldTodo = e.target.parentElement.childNodes[3].innerText.trim()
        ui.showModal(oldTodo);
    }

}



function onClearAllComplete(){
    var agree = confirm('Are you sure clear all todos?');
    if(agree){
        local.clear();
        todoList.innerHTML = "";
    }else{
        ui.showAlert("Process cancelled!","alert-info");
    }


}




function UseEffect(){
    let todos = local.get();
    todos.forEach(todo => {
        todoList.innerHTML += ui.newTodo(todo);
    })
}




function onSearchTodoComplete(e){
    
    let todos = local.get();
    todoList.innerHTML = "";
    let newList = todos.filter(todo => todo.toLowerCase().includes(searchTodo.value.toLowerCase()));
    newList.forEach(todo => {
        todoList.innerHTML += ui.newTodo(todo);
    })

    searchTodo.value = ""

    e.preventDefault();
}



function onNewTodoComplete(e){
    todoList.innerHTML += ui.newTodo(newTodo.value);

    local.set(newTodo.value);

    newTodo.value = ""
    


    e.preventDefault();
}