import { addNewTask, findTaskById, taskManager, userTasksDatabase } from "./taskManager"
import { elementFactory } from "./elementFactory"
import { attachFormActionListeners, attachSetDateButtonsActionListeners, attachSetPriorityActionListeners, attachTaskFormActionListeners, handleEventListenerTaskItem } from "./taskAttachEventListener"
import { renderTask } from "./renderTask"
import { taskFormFactory } from "./taskFormFactory"
import { addProject, getColors, getUserProjecstLength, getUserProjectsList, projectObjectFactory, userProjectObjectFactory } from "./projectManager"
import { taskFactory } from "./taskFactory"
import { attachProjectFormActionListeners } from "./projectAttachEventListener"
import { handleTaskFormDateButtonClick } from "./taskFormHandleActions"
import { dateManager } from "./dateManager"
import { placeElementAt } from "./domChanger"


export function renderPriorityContainer() {
    const priorityContainer = document.querySelector(".priorityContainer")
        if (priorityContainer) {
            return priorityContainer.remove()
        }
        const newPriorityContainer = elementFactory("div", "", {class: "priorityContainer"})
        for (let i = 1; i < 5; i++) {
            const button = elementFactory(
                "button",
                `Priority ${i}`,
                {
                    id: `priority-p${i}`,
                    class: "priorityButton",
                    "data-priority": `p${i}`
                }
            )
            newPriorityContainer.append(button)
        }
        return newPriorityContainer
}

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

// export function renderSidebar() {
//     const sidebar = document.querySelector("#sidebar")
    
//     sidebar.innerHTML = `            
//     <div class="sidebar__controls">
//         <button class="sidebar__control sidebar__control--add-task">Add Task</button>
//         <div class="sidebar__control">
//             <a class="sidebar__control sidebar__control--inbox-page" href="/inbox.html">Inbox</a>
//         </div>        
//         <div class="sidebar__projects">
//             <div class="sidebar__projects">
//                 <a href="/projects.html">My Projects</a>
//                 <button id="sidebarCreateProjectButton" class="sidebar__projects sidebar__projects--add-project">+</button>
//             </div>
//         </div>
//     </div>`
// }


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
    const form = elementFactory("form", "", {class: "projectForm", id: "newProjectForm"})
    form.innerHTML = `
        <label for="projectNameInput"> Name:
            <input type="text" name="projectName" id="projectNameInput">
        </label>
        <label for="projectColorSelect"> Color:
                <select id="projectColorSelect" name="projectColors"></select>
        </label>
        <label for="projectParentSelect"> Parent project:
            <select name="projectParents" id="projectParentSelect"></select>
        </label>
    <div class="form-controlls">
        <button class="projectFormCancelButton" type='button'>Cancel</button>
        <button class="projectFormSubmitButton" type='submit'>Submit</button>
    </div>
                
    `
    renderProjectColorOptions(form)
    renderParentProjectOptions(form)
    return form


}

function renderProjectColorOptions(form) {
    const projectColorSelect = form.querySelector("#projectColorSelect")
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
    const projectItemDiv = elementFactory(
        "div",
        Project.name,
        {
            class: "projectItemDiv",
            "data-id": Project.id,
            style: "color: " + Project.color,
            "data-project-id": Project.id
        }
    )
    return projectItemDiv
}

function getTaskItemId(button) {
    const taskItemDiv = button.closest(".task-item")

    if (!taskItemDiv.classList.contains("task-item")) {
        return console.log("you didndt click right")
    }

    return taskItemDiv.getAttribute("data-task-id")
}

export function renderTaskPage(button) {
    const taskId = getTaskItemId(button)
    const Task  = taskManager.getTaskById(taskId)
    
    const content = document.querySelector("#content")
    const taskUpdatePageContainer = elementFactory("div","", {class: "task-update-page-container"})
    content.append(taskUpdatePageContainer)
    const taskUpdatePage = elementFactory(
        "div", 
        "teste", 
        {
            id: "task-update-page",
            "data-task-id": Task.id
        }
    )
    taskUpdatePage.innerHTML = 
    `<div class="controlls">
        <button id='updateTaskQuitButton' class=''>Quit</button>
        <button id='removeTodo'>Remove Todo</button>
    </div>
    <div>
        <div class='task-info-container'>
            <div id='task-name-update'>Name: ${Task.name}</div>
            <div id='task-description-update'>Description: ${Task.description}</div>
            <div id='task-date-update' data-value='${Task.deadline}' class='task-info task-date-update'>Deadline: ${Task.getMonthDay()}</div>
            <div id='task-priority-update' class='task-info task-priority-update'>Priority: ${Task.priority}</div>
        </div>
    </div>
    `

    const updateDateDiv = taskUpdatePage.querySelector("#task-date-update")
    const updateTaskQuitButton = taskUpdatePage.querySelector("#updateTaskQuitButton")
    const updatePriorityDiv = taskUpdatePage.querySelector("#task-priority-update")
    const removeTodoButton = taskUpdatePage.querySelector("#removeTodo")

    removeTodoButton.addEventListener("click", () => {
        const taskItem = document?.querySelector(`.task-item[data-task-id='${Task.id}']`)
        taskItem.remove()
        taskManager.removeTaskById(Task.id)
        taskUpdatePage.innerHTML = ""
        taskUpdatePage.remove()
    })

    updateTaskQuitButton.addEventListener("click", (e) => {
        const container = e.target.closest("#task-update-page")
        const taskItem = document.querySelector(`.task-item[data-task-id=${Task.id} ]`)
        const taskItemName = taskItem.querySelector(".task-item__name")
        const taskItemDecription = taskItem.querySelector(".task-item__description")
        const taskItemDate = taskItem.querySelector(".task-item__date")
        const taskItemPriority = taskItem.querySelector(".task-item__priority")

        console.log("Depois: ", taskManager.getTaskById(Task.id))

        if (taskItemDecription) {
            taskItemDecription.textContent = taskManager.getTaskDescription(Task.id)
        }
        if (taskItemDate) {
            let date = updateDateDiv.getAttribute("data-value")
            Task.deadline = dateManager.formatDateWithStandardFormat(date)
            taskItemDate.setAttribute("data-value", Task.deadline)
            taskItemDate.textContent = Task.getMonthDay()
        }

        if (taskItemPriority) {
            taskItemPriority.textContent = taskManager.getTaskPriority(Task.id)
        }

        taskItemName.textContent = taskManager.getTaskName(Task.id)
        
        container.remove()
    })
    
    const updateNameDiv = taskUpdatePage.querySelector("#task-name-update")
    updateNameDiv.addEventListener("click", () => {
        if (updateNameDiv.querySelector("#update-task-input")) {
            return console.error("You cannot create two containers")
        }
        const updateInput = elementFactory(
            "input",
            "",
            {
                type: "text",
                id: "update-task-input",
            }
        )
        const updateButton = elementFactory(
            "button",
            "Save",
            {
                type: "button",
                id: "update-button-name"
            }

        )
        updateButton.addEventListener("click", (e) => {
            e.stopPropagation()
            const updadateTaskInput = updateNameDiv.querySelector("#update-task-input")
            const newTaskName = updadateTaskInput.value
            taskManager.updateTaskName(taskId, newTaskName)
            updateInput.remove()
            updateButton.remove()
            const updateTaskNameDiv = taskUpdatePage.querySelector("#task-name-update")
            updateTaskNameDiv.textContent = "Name: " + newTaskName
        })
        updateNameDiv.append(updateInput, updateButton)
        updateInput.focus()
    })

    const updateDescriptionDiv = taskUpdatePage.querySelector("#task-description-update")
    updateDescriptionDiv.addEventListener("click", () => {
        if (updateDescriptionDiv.querySelector("#update-task-description-input")) {
            return
        }

        const inputDescription = elementFactory(
            "input",
            "",
            {
                id: "update-task-description-input"
            }

        )
        const updateDescriptionButton = elementFactory(
            "button",
            "Save",
            {
                id: "update-task-description-button"
            }
        )

        updateDescriptionButton.addEventListener("click", (e) => {
            e.stopPropagation()
            if (updateDescriptionDiv) {
                taskManager.updateTaskDescription(Task.id ,inputDescription.value)
                updateDescriptionDiv.textContent = "Description: " + taskManager.getTaskDescription(Task.id)
            }
            console.log(taskManager.getTasks())
            inputDescription.remove()
            updateDescriptionButton.remove()
        })

        updateDescriptionDiv.append(inputDescription, updateDescriptionButton)
    })

    updateDateDiv.addEventListener("click", (e) => {
        e.stopPropagation()
        if (updateDateDiv.querySelector("#update-task-description-button")) {
            return
        }
        handleTaskFormDateButtonClick(e)
        //update logic to be equal as priority Div
    })

    updatePriorityDiv.addEventListener("click", (e) => {
        e.stopPropagation()
        let priorityContainer = updatePriorityDiv.querySelector(".priorityContainer")
        if (!priorityContainer) {
            const setPriorityContainer = renderPriorityContainer()
            attachSetPriorityActionListeners(setPriorityContainer)
            updatePriorityDiv.append(setPriorityContainer)

        }

        if (updatePriorityDiv?.querySelector("#update-priority-button")) {
            return 
        }
        const updateButton = elementFactory("button", "Save", {id: "update-priority-button"})
        updateButton.addEventListener("click", (e) => {
            e.stopPropagation()
            const priorityValue = updatePriorityDiv.getAttribute("data-priority")
            updatePriorityDiv.querySelector(".priorityContainer").remove()
            updateButton.remove()
        })
        updatePriorityDiv.append(updateButton)
    })

    taskUpdatePageContainer.append(taskUpdatePage)
    taskUpdatePage
}