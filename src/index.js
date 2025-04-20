import './styles.css';
import { format, compareAsc, add } from 'date-fns'
import { createIcons, icons } from 'lucide';
import { projectFactory } from './projectFactory'
import { renderTask } from './renderTask';
import { taskFactory } from  './taskFactory' 
import { loadTasks } from './loadTasks';
import {displayAddTaskContainer } from './displayAddTaskContainer'
import { hideButton } from './hideButton';

createIcons({ icons });
let inbox = []

const taskAddButton = document.querySelector('.task-add__display-button')
taskAddButton.addEventListener('click', () => {
    console.log("Hello World")
    displayAddTaskContainer()
    /*
    const Task = taskFactory()
    const ul = renderTask(Task)
    taskList.append(ul)
    inbox.push(Task)
    */
})

const taskDateInput = document.getElementById("task-date-input")
taskDateInput.value = format(new Date(), "yyyy-MM-dd")

const taskAddCancelButton = document.querySelector(".task-add__cancel")
taskAddCancelButton.addEventListener("click", () => {
    const taskAddFormContainer = document.querySelector(".task-add__form-container")
    const button = document.querySelector(".task-add__display-button")

    button.classList.remove("hide")
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
    
    const ul = renderTask(Task)

    const taskList = document.querySelector(".task-list")
    taskList.append(ul)
})
