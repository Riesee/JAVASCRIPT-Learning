class LocalStorage {
    constructor(todos) {
        this.todos = [];
    }

    get() {
        if ( localStorage.getItem('todos') === null ){
            localStorage.setItem('todos', JSON.stringify(this.todos) );
            console.log("girdi");
        }
        else {
            this.todos = JSON.parse( localStorage.getItem('todos') );
        }
        return this.todos;
    }

    set(value) {
        let todos = this.get();
        todos.push(value);
        localStorage.setItem('todos', JSON.stringify(todos) );
    }


    clear() {
        localStorage.removeItem("todos");
    }

    removeItem(todo2) {
        let todos = this.get();

        todos.forEach(todo => {
            if ( todo === todo2 ) {
                todos.splice(todos.indexOf(todo), 1);
            }
        } )
        localStorage.setItem('todos', JSON.stringify(todos) );
        console.log(todo2);
    }

    editTodo(item,editText) {
        let todos = this.get();
        todos.forEach((todo,index) => {
            if ( todo === item ) {
                todos[index] = editText;
            }
        } )
        localStorage.setItem('todos', JSON.stringify(todos) );

    }

}