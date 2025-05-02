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


createIcons({ icons });

export let allTasks = [];
export let allProjects = ["inbox", "teste"];

let userTasksDatabaseKey = localStorage.getItem("userTasks")
export let userTasksDatabase = JSON.parse(userTasksDatabaseKey)

const taskList = document.querySelector('.task-list')
const displayButton = document.querySelector(".task-add__display-button")  




function handleEventListenerContentFormButtonInbox(taskFormDiv) {
    const cancelButton = taskFormDiv.querySelector(".task-add__cancel")
    const submitButton = taskFormDiv.querySelector(".task-add__submit")


    cancelButton.onclick = () => {
        taskFormDiv.remove()
        displayButton.style.display = 'flex'
    }

    submitButton.onclick = () => {
        const obj = getFormData()
        const Task = taskFactory(obj.taskName, obj.taskDescription, obj.taskDate, obj.taskProject);
        
        if (!Task.name) {
            return alert("You Cannot Create Task Without Name")
        }

        allTasks.push(Task)

        clearForm()

        const taskItemDiv = renderTask(Task)
        taskItemDiv.dataset.id = Task.id
        handleEventListenerTaskItem(taskItemDiv)

        taskList.append(taskItemDiv)
        
        localStorage.setItem("userTasks", JSON.stringify(allTasks))
    }
}

function handleTaskAddButtonClick() {
    const taskAddButton = document.getElementById('create-task-add-form')
    const taskAdd = document.querySelector('.task-add')

    if (taskAddButton) {
        taskAddButton.onclick = () => {
            taskAddButton.style.display = 'none'
            const taskFormDiv = taskFormFactory()
            handleEventListenerContentFormButtonInbox(taskFormDiv)
            taskAdd.append(taskFormDiv)
        }
    }

}

function displayUserTask() {

    const inboxTasks = userTasksDatabase.filter( (task) => task.projectId === 'inbox')
    

    inboxTasks.forEach(taskItem => {
        const taskItemDiv = renderTask(taskItem)
        handleEventListenerTaskItem(taskItemDiv)
        taskList.append(taskItemDiv)
    });

}

document.addEventListener('DOMContentLoaded', () => {
    handleTaskAddButtonClick();
    sidebarControlls()
    displayUserTask()
});
