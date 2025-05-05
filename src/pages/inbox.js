import '../styles/styles.css'
import { createIcons, icons } from 'lucide';
import { taskFormFactory } from '../components/taskFormFactory'
import { sidebarControlls } from '../components/sideBarControlls';
import { getFormData } from '../components/getFormData';
import { taskFactory } from '../components/taskFactory';
import { clearForm } from '../components/clearForm'
import { renderTask } from '../components/renderTask'
import { handleEventListenerTaskItem } from '../components/handleEventListenerTaskItem';
import { addTaskProject, factoryProject } from '../components/projectsArray';
import { add } from 'date-fns';
import { handleAddTaskButtonClick } from '../components/handleAddTaskButtonClick';


createIcons({ icons });

export let allTasks = [];
export let allProjects = ["inbox", "teste"];

let userTasksDatabaseKey = localStorage.getItem("userTasks")
export let userTasksDatabase = JSON.parse(userTasksDatabaseKey)

 
const content = document.querySelector("#content")
const taskList = document.querySelector('.task-list')
const displayButton = document.querySelector(".task-add__display-button") 
const taskAdd = document.querySelector('.task-add')
const taskAddButton = document.getElementById('create-task-add-form')
const addTasKButton = document.querySelector(".sidebar__control--add-task")



function handleAddTaskSubmitButton(formContainer) {
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
    const submitButton = formContainer.querySelector(".task-add__submit")


    cancelButton.onclick = () => {
        formContainer.remove()
        displayButton.style.display = 'flex'
    }

    submitButton.onclick = () => {
        handleAddTaskSubmitButton(formContainer)
        clearForm()
    }
}

function handleTaskAddButtonClick() {
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

function handleAddTaskSideBarButtonClick() {
    addTasKButton.onclick = () => {
        const formContainer = taskFormFactory()
        formContainer.setAttribute("id", "floating-task-add-container")
        
        const cancelButton = formContainer.querySelector(".task-add__cancel")
        const submitButton = formContainer.querySelector(".task-add__submit")

        cancelButton.onclick = () => formContainer.remove()
        submitButton.onclick = () => {
            handleAddTaskSubmitButton(formContainer)
            formContainer.remove()          
        } 
        
        
        content.append(formContainer)
    }
    
}

document.addEventListener("DOMContentLoaded", () => {
    handleTaskAddButtonClick();
    displayUserTask()
    handleAddTaskSideBarButtonClick()

})
