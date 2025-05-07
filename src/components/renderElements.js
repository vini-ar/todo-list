import { userTasksDatabase } from "./dataManager"
import { elementFactory } from "./elementFactory"
import { handleAddTaskCancelButtonClick, handleAddTaskSubmitButtonClick } from "./eventListenerHandler"
import { handleEventListenerTaskItem } from "./handleEventListenerTaskItem"
import { renderTask } from "./renderTask"
import { taskFormFactory } from "./taskFormFactory"




export function renderDateContainer(formContainer) {
    const dateButton = formContainer.querySelector("#displayDateContainerButton")

    if (dateButton) {
        dateButton.onclick = (e) => {
            e.preventDefault()
            const dateContainer = elementFactory("div", "", { class: "userDateContainer"})
            dateContainer.innerHTML = ` 
                    <div class="userDateButtons">
                        <button id="todayButton">Today</button>
                        <button id="tomorrowButton">Tomorrow</button>
                        <button id="thisWeekendButton">This weekend</button>
                        <button id="nextWeekButton">Next week</button>
                    </div>
                    <div class="userDateCalendar">
                        <span>Calendar</span>
                    </div>
                    <div class="userHour">
                        <button id="timeButton">Time</button>
                    </div>
            
            `


            const positionObj = dateButton.getBoundingClientRect();
            const topPosition = positionObj.y + dateButton.offsetHeight
            const leftPosition = positionObj.x

            dateContainer.style.position = "absolute"
            dateContainer.style.top = JSON.stringify(topPosition) + "px"
            dateContainer.style.left = JSON.stringify(leftPosition) + "px"

            content.append(dateContainer)
        }
    }
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
            <i data-lucide="plus"></i>
            <span class="task-add__label">Add New Task</span>
        </button>
        <div class="task-add"></div>
`
}

export function renderAddTaskFloatingFormContainer() {
    const formContainer = taskFormFactory()
    formContainer.setAttribute("id", "floating-task-add-container")
    content.append(formContainer)


    const cancelButton = formContainer.querySelector(".task-add__cancel")
    const submitButton = formContainer.querySelector(".task-add__submit")

    cancelButton.addEventListener("click", () => formContainer.remove())
    submitButton.addEventListener("click", () => formContainer.remove())
    
    
}

export function renderAddTaskFormContainer() {
    const formContainer = taskFormFactory()
    content.append(formContainer)

    const cancelButton = formContainer.querySelector(".task-add__cancel")
    const submitButton = formContainer.querySelector(".task-add__submit")
    const dateButton = formContainer.querySelector("#displayDateContainerButton")
    const priorityButton = formContainer.querySelector("#priorityButton")

    cancelButton.addEventListener("click", handleAddTaskCancelButtonClick)
    submitButton.addEventListener("click", handleAddTaskSubmitButtonClick(formContainer))
    dateButton.addEventListener("click", () => formContainer.remove())
    priorityButton.addEventListener("click", () => formContainer.remove())

    
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