import './styles.css';
import { format } from 'date-fns'
import { createIcons, icons } from 'lucide';
import { renderTask } from './renderTask';
import { taskFactory } from  './taskFactory' 
import { renderAddTaskContainer } from './renderAddTaskContainer'

createIcons({ icons });

let inbox = []

const taskAddButton = document.querySelector('.task-add__display-button')
taskAddButton.addEventListener('click', () => {
    const button = document.querySelector(".task-add__button-container")
    button.classList.add("hide")
    renderAddTaskContainer()
})


/*
const taskAddCancelButton = document.querySelector(".task-add__cancel")
taskAddCancelButton.addEventListener("click", () => {
    const taskAddFormContainer = document.querySelector(".task-add__form-container")

    taskAddButton.classList.remove("hide")
    taskAddFormContainer.classList.add("hide")
    
})



const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()
    const formData = new FormData(form);
    const taskName = formData.get("taskName")
    const taskDescription = formData.get("taskDescription")
    const taskDate = formData.get("taskDate")
    const taskProject = formData.get("taskProject") 
    
    const Task = taskFactory(taskName, taskDescription, taskDate, taskProject)
    renderTask(Task)
    inbox.push(Task)

})
*/