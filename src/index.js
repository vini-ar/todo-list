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

const addTaskButton = document.querySelector('.task-add__button')
addTaskButton.addEventListener('click', () => {
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
    const button = document.querySelector(".task-add__button")

    button.classList.remove("hide")
    taskAddFormContainer.classList.add("hide")
    
})

document.addEventListener('DOMContentLoaded', () => loadTasks(inbox))



