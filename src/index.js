import "./styles.css"
import { Todo } from "./todoFactory"
import { ElementFactory } from "./elementFactory"




class TodoUi {
    constructor(todoList) {
        this.todoList = todoList;
        this.todoListActive = document.querySelector(".todo-list-active");
        this.createTodoBtn = document.querySelector("#create-todo-btn");
        this.todoNameInput = document.querySelector(".todo-name-input");
        this.todoCheckbox = document.querySelector(".todo-checkbox")

        this.createTodoBtn.addEventListener("click", () => this.addTask());
        // Attach event listener for Dynamically Generator Input Checkbox
        document.body.addEventListener('click', (event) => {
            const checkboxInput = event.target
            if (checkboxInput.className == 'todo-checkbox') {
                this.updateTask(checkboxInput.value)
            }
                
        })

    }

    addTask() {
        const todoName = this.todoNameInput.value;
        if (todoName.trim()) {
            const newTodo = new Todo(todoName, "pending", "Default");
            this.displayTask(newTodo);
        }
    }
    displayTask(todo) {
        const div = ElementFactory.div({class: "todo-container"}, "")
        const label = ElementFactory.label({
        }, todo.name);
        const input = ElementFactory.input( {
            class: "todo-checkbox",
            type: "checkbox", 
            value: todo.id,  
        })
        div.append(input, label);
        this.todoListActive.append(div);
    }
    updateTask(id) {
        console.log(id)
    }   
}

const todoUi = new TodoUi(Todo);
