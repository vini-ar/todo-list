import '../styles/styles.css'
import { createIcons, icons } from 'lucide';
import { taskFormFactory } from '../components/taskFormFactory'
import { getFormData } from '../components/getFormData';
import { clearForm } from '../components/clearForm'
import { renderTask } from '../components/renderTask'
import { handleEventListenerTaskItem } from '../components/handleEventListenerTaskItem';
import { displaySidebar } from '../components/displaySidebar';
import { handleAddTaskSideBarButtonClick } from '../components/handleAddTaskSideBarButtonClick.js';


createIcons({ icons });

export let allTasks = [];

let userTasksDatabaseKey = localStorage.getItem("userTasks")
export let userTasksDatabase = JSON.parse(userTasksDatabaseKey)

 
const content = document.querySelector("#content")
const taskList = document.querySelector('.task-list')
const displayButton = document.querySelector(".task-add__display-button") 
const taskAdd = document.querySelector('.task-add')
const taskAddButton = document.getElementById('create-task-add-form')



function handleContentAddTaskSubmitButton(formContainer) {
    const Task = getFormData(formContainer);
        
    if (!Task.name) {
        return alert("You Cannot Create Task Without Name")
    }

    allTasks.push(Task)

    const taskItemDiv = renderTask(Task)
    taskList.append(taskItemDiv)
    handleEventListenerTaskItem(taskItemDiv)
        
    localStorage.setItem("userTasks", JSON.stringify(allTasks))
}


function handleEventListenerContentFormButtonInbox(formContainer) {
    const cancelButton = formContainer.querySelector(".task-add__cancel")

    if (cancelButton) {
        cancelButton.onclick = () => {
            formContainer.remove()
            displayButton.style.display = 'flex'
        }
    
    }

    const submitButton = formContainer.querySelector(".task-add__submit")

    if (submitButton) {
        submitButton.onclick = () => {
            handleContentAddTaskSubmitButton(formContainer)
            clearForm()
        }
    }

}

function handleContentTaskAddButtonClick() {
    if (taskAddButton) {
        taskAddButton.onclick = () => {
            taskAddButton.style.display = 'none'
            const formContainer = taskFormFactory()
            handleEventListenerContentFormButtonInbox(formContainer)
            taskAdd.append(formContainer)
        }
    }

}

function displayUserTask() {
    const inboxTasks = userTasksDatabase.filter( (task) => task.projectId === 'inbox')
    if (taskList) {
        inboxTasks.forEach((Task) =>  {
            const taskItemDiv = renderTask(Task)
            taskItemDiv.dataset.id = Task.id
            handleEventListenerTaskItem(taskItemDiv)
            taskList.append(taskItemDiv)
        })
    }
}

document.addEventListener("DOMContentLoaded", () => {
    displaySidebar()
    handleContentTaskAddButtonClick();
    displayUserTask()
    handleAddTaskSideBarButtonClick()
})
