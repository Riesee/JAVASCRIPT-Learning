class UI {
  constructor() {
    this.modalBodyText = document.getElementById('modalBodyText');
    this.modalBody = document.getElementById('modalBody');
    this.local = new LocalStorage();
    this.todoList = document.getElementById('todoList');
    
  }

  showModal(e){
    this.modalBodyText.innerText = e;
    
  }

  showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector("#msg");
    const form = document.querySelector("#task-form");
    container.insertBefore(div, form);

    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }

  newTodo(value) {
    const li = `<li class="list-group-item border my-2">
        <div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="${value}">
                <label class="form-check-label" for="${value}">
                    ${value}
                </label>
                <button class="btn btn-outline-danger btn-sm float-end mx-2" id = "deleteTodo">Delete</button>
                <button class="btn btn-outline-primary btn-sm float-end" id = "editTodo" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
            </div>
        </div>
    </li>`

    return li
  }

}