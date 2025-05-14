import { getMontDayFormatString, getNextWeek, getNextWeekendDay, getToday, getTomorrow } from "./dateManager"
import { clearForm, placeElementAt, toggleButtonVisibility } from "./domChanger"
import { elementFactory } from "./elementFactory"
import { isValidForm } from "./formValidations"
import { getFormData } from "./getFormData"
import { createDateContainer, renderTaskPage } from "./renderElements"
import { renderTask } from "./renderTask"
import { attachSetDateButtonsActionListeners, attachSetPriorityActionListeners, attachTaskItemActionListeners } from "./taskAttachEventListener"
import { addNewTask, addTaskToArchive, displayAllTasks, findTaskById, removeTaskById, showAllTasks, showAllTasksArray, showTaskArchive, showTasks, taskManager, updateTaskProject, updateTasksArray } from "./taskManager"

export function handleTaskFormCancelButtonClick(formContainer) {
    //Can be everything in one logic improve later
    const taskAddButton = document.querySelector("#create-task-add-form")
    if (formContainer.id === "task-add-form-container") {
        toggleButtonVisibility(taskAddButton)
    }
    formContainer.remove()
}


export function handleTaskFormSubmitButtonClick(button) {
        if (!isValidForm()) {
            return alert("Task name empty")
        }
        const form = button.closest(".task-add__form-container")
        const newTask = getFormData(form)
        taskManager.addTask(newTask)
        
        if (form.id !== "task-add-form-container") {
            return form.remove()    
        }

        const taskList = document.querySelector(".task-list")
        const taskItemDiv = renderTask(newTask)

        attachTaskItemActionListeners(taskItemDiv)

        taskList.append(taskItemDiv)
        clearForm()
}

export function handleSetDateButtonClick(dateValue) {
    const dateContainer = document.querySelector(".userDateContainer")
    const dateSpan = document.querySelector("#task-date-span")
    let targetDay;
    
    if (dateValue === "today") {
        targetDay = getToday()
    }  
    else if (dateValue === "tomorrow") {
        targetDay = getTomorrow()
    } 
    else if (dateValue === "weekend") {
        targetDay = getNextWeekendDay()
    }
    else {
        targetDay = getNextWeek()
    }
    dateSpan.dataset.value = targetDay
    dateSpan.textContent = getMontDayFormatString(targetDay)
    dateContainer.remove()
}


export function handleTaskFormDateButtonClick(e) {
        const dateContainer = document.querySelector(".userDateContainer")
        if (dateContainer) {
            return dateContainer.remove()
        }
        const newDateContainer = createDateContainer()
        const buttonCoordinates = e.target.getBoundingClientRect()
        placeElementAt(newDateContainer, buttonCoordinates.x, buttonCoordinates.y)
        attachSetDateButtonsActionListeners()
}

export function handleSetPriorityButtonClick(button) {
    const prioritySpan = document.querySelector("#task-priority-span")
    const priorityContainer = document.querySelector(".priorityContainer")
    
    prioritySpan.textContent = button.getAttribute("data-priority")
    prioritySpan.dataset.priority = button.getAttribute("data-priority")
    priorityContainer.remove()
}


export function handleTaskFormPriorityButtonClick(e) {
    const priorityContainer = document.querySelector(".priorityContainer")
    if (priorityContainer) {
        return priorityContainer.remove()
    }
    //renderPriorityContainer
        //placeContainerAt()
        //renderPriorityButtons()
        //bindPriorityButtonsClick()
    const buttonCoordinates = e.target.getBoundingClientRect()
    const newPriorityContainer = elementFactory("div", "", {class: "priorityContainer"})
    placeElementAt(newPriorityContainer, buttonCoordinates.x, buttonCoordinates.y)
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
    attachSetPriorityActionListeners()
}

