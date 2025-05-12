import { addNewTask, userTasksDatabase } from "./taskManager"
import { elementFactory } from "./elementFactory"
import { attachFormActionListeners, attachTaskFormActionListeners, handleEventListenerTaskItem } from "./taskAttachEventListener"
import { renderTask } from "./renderTask"
import { taskFormFactory } from "./taskFormFactory"
import { addProject, getColors, getUserProjecstLength, getUserProjectsList, projectObjectFactory, userProjectObjectFactory } from "./projectManager"
import { taskFactory } from "./taskFactory"
import { attachProjectFormActionListeners } from "./projectAttachEventListener"


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
                <button id="sidebarCreateProjectButton" class="sidebar__projects sidebar__projects--add-project">+</button>
            </div>
        </div>
    </div>`
}


export function renderSidebarAddTaskFormContainer() {
        const formContainer = taskFormFactory()
        formContainer.setAttribute("id", "floating-task-add-container")
        content.append(formContainer)

        attachTaskFormActionListeners(formContainer)
        
}

export function renderContentAddTaskFormContainer() {
    const formContainer = taskFormFactory()
    formContainer.setAttribute("id", "task-add-form-container")
    document.querySelector(".task-add").append(formContainer)
    
    attachTaskFormActionListeners(formContainer)
    
}

export function renderUserTask() {
    const taskList = document.querySelector(".task-list")
    const inboxTasks = userTasksDatabase.filter( (task) => task.projectId === 'inbox')
    if (taskList) {
        inboxTasks.forEach((Task) =>  {
            const taskItemDiv = renderTask(Task)
            taskItemDiv.dataset.id = Task.id
            // handleEventListenerTaskItem(taskItemDiv)
            taskList.append(taskItemDiv)
        })
    }
}

export function renderAddProjectForm(formContainer) {
    formContainer.innerHTML = `
    <form class="projectForm" id="newProjectForm">
        <label for="projectNameInput"> Name:
            <input type="text" name="projectName" id="projectNameInput">
        </label>
        <label for="projectColorSelect"> Color:
                <select id="projectColorSelect" name="projectColors"></select>
        </label>
        <label for="projectParentSelect"> Parent project:
            <select name="projectParents" id="projectParentSelect"></select>
        </label>
    </form>
    <div class="form-controlls">
        <button class="projectFormCancelButton" type='button'>Cancel</button>
        <button class="projectFormSubmitButton" type='submit'>Submit</button>
    </div>
                
    `
    formContainer.classList.toggle("hide")
    renderProjectColorOptions(formContainer)
    renderParentProjectOptions(formContainer)
    attachProjectFormActionListeners(formContainer)

}

function renderProjectColorOptions(formContainer) {
    const projectColorSelect = formContainer.querySelector("#projectColorSelect")
    const colors = getColors()
    colors.forEach((color) => {
        const colorOption = elementFactory(
            "option",
            color,
            {
                value: color
            }
        )
        projectColorSelect.append(colorOption)
    })

}

function renderParentProjectOptions(formContainer) {
    const projectParentSelect = formContainer.querySelector("#projectParentSelect")
    const userProjects = getUserProjectsList()
    const userProjectsLength = getUserProjecstLength()

    if (userProjectsLength !== 0) {
        userProjects.forEach((project) => {
            const projectOption = elementFactory(
                "option",
                project,
                {
                    value: project
                }
            )
            projectParentSelect.append(projectOption)
        })
    }

    const projectParentDefaultOption = elementFactory(
        "option",
        "No parent",
        {
            value: "No parent",
            selected: "selected"
        }
    )

    projectParentSelect.append(projectParentDefaultOption)
    
}


export function renderProjectItem(Project) {
    const projectList = document.querySelector(".project__list")

    const projectItemContainer = elementFactory(
        "div",
        "",
        {
            class: "projectItemContainer"            
        }

    )

    const projectItemButton = elementFactory(
        "button",
        Project.name,
        {
            class: "projecItemButton",
            "data-id": Project.id,
            style: "color: " + Project.color,
        }
    )

    projectItemContainer.append(projectItemButton)

    return projectItemContainer
}