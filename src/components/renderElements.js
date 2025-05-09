import { addNewTask, userTasksDatabase } from "./dataManager"
import { toggleButtonVisibility, toggleElementVisibility } from "./domChanger"
import { elementFactory } from "./elementFactory"
import { handleContentAddTaskSubmitButtonClick, handleContentTaskFormButtonsClick, handleDateButtonClick, handleFormCancelButtonClick, handleTaskFormButtonsClick } from "./eventListenerHandler"
import { handleEventListenerTaskItem } from "./handleEventListenerTaskItem"
import { renderTask } from "./renderTask"
import { taskFormFactory } from "./taskFormFactory"



export function createDateContainer() { 
    const dateContainer = elementFactory("div", "", { class: "userDateContainer"})
    dateContainer.innerHTML = ` 
            <div class="userDateButtons">
                <button class="setDateButton" id="todayButton" data-value="today">Today</button>
                <button class="setDateButton" id="tomorrowButton" data-value="tomorrow">Tomorrow</button>
                <button class="setDateButton" id="thisWeekendButton" data-value="weekend">This weekend</button>
                <button class="setDateButton" id="nextWeekButton data-value="nextWeek">Next week</button>
            </div>
            <div class="userDateCalendar">
                <span>Calendar</span>
            </div>
            <div class="userHour">
                <button id="timeButton">Time</button>
            </div>
    
    `
    return dateContainer
}

export function renderSidebar() {
    const sidebar = document.querySelector("#sidebar")
    
    sidebar.innerHTML = `            
    <div class="sidebar__controls">
        <button class="sidebar__control sidebar__control--add-task">Add Task</button>
        <div class="sidebar__control">
            <a class="sidebar__control sidebar__control--inbox-page" href="/inbox.html">Inbox</a>
        </div>        
        <div class="sidebar__projects">
            <div class="sidebar__projects">
                <a href="/projects.html">My Projects</a>
                <button class="sidebar__projects sidebar__projects--add-project">+</button>
            </div>
        </div>
    </div>`
}

export function renderProjectContentTemplate() {
    const content = document.querySelector("#content")
    content.innerHTML =  `           
    <div class="header">
        <h1 class="task-list__project-name">Inbox</h1>
        </div>
        <div class="task-list"></div>  
        <button id='create-task-add-form' class="task-add__display-button">
            Add new task
        </button>
        <div class="task-add"></div>
`
}

export function renderSidebarAddTaskFormContainer() {
        const formContainer = taskFormFactory()
        formContainer.setAttribute("id", "floating-task-add-container")
        content.append(formContainer)
    
    
        const cancelButton = formContainer.querySelector(".task-add__cancel")
        const submitButton = formContainer.querySelector(".task-add__submit")
        const addTaskButton = document.querySelector("#create-task-add-form")

        if (cancelButton) {
            cancelButton.addEventListener("click", () => {
                addTaskButton.style.display = "flex"
            })
        }
    
        cancelButton.addEventListener("click", () => formContainer.remove())
        submitButton.addEventListener("click", () => formContainer.remove())
        
}

export function renderContentAddTaskFormContainer() {
    const formContainer = taskFormFactory()
    content.append(formContainer)
    handleContentTaskFormButtonsClick(formContainer)
    
}

export function renderUserTask() {
    const taskList = document.querySelector(".task-list")
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