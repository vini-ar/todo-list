import { getMontDayFormatString, getNextWeek, getNextWeekendDay, getToday, getTomorrow } from "./dateManager"
import { clearForm, placeElementAt, toggleButtonVisibility } from "./domChanger"
import { elementFactory } from "./elementFactory"
import { isValidForm } from "./formValidations"
import { getFormData } from "./getFormData"
import { createDateContainer, renderPriorityContainer, renderTaskPage } from "./renderElements"
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
        console.log(newTask)
        const taskItemDiv = renderTask(newTask)

        attachTaskItemActionListeners(taskItemDiv)

        taskList.append(taskItemDiv)
        clearForm()
}

export function handleSetDateButtonClick(e, dateValue) {
    e.stopPropagation()
    const dateContainer = e.target.closest(".userDateContainer")

    let targetElement;
    if (e.target.closest("#task-date-update")) {
        targetElement = e.target.closest("#task-date-update")
    }
    else {
        targetElement = document.querySelector("#task-date-span")
    }
    
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
    targetElement.setAttribute("data-value", targetDay)
    targetElement.textContent = getMontDayFormatString(targetDay)
    dateContainer.remove()
}


export function handleTaskFormDateButtonClick(e) {
        e.stopPropagation()
        const dateContainer = document.querySelector(".userDateContainer")
        const taskDateUpdate = e.target?.closest("#task-date-update")
        if (dateContainer) {
            return dateContainer.remove()
        }
        const newDateContainer = createDateContainer()
        const buttonCoordinates = e.target.getBoundingClientRect()
    
        if (taskDateUpdate) {
            taskDateUpdate.append(newDateContainer)
        } else {
            placeElementAt(newDateContainer, buttonCoordinates.x, buttonCoordinates.y)
        }
        attachSetDateButtonsActionListeners(e)
}

export function handleSetPriorityButtonClick(setPriorityButton) {
    const targetElement = document.querySelector("#task-priority-span")
    console.log(targetElement)
    const priorityContainer = setPriorityButton.closest(".priorityContainer")

    if (!targetElement) {
        targetElement = setPriorityButton.closest("#task-priority-update")
    }
    const priorityValue = setPriorityButton.getAttribute("data-priority")
    targetElement.setAttribute("priority-value", priorityValue)
    targetElement.textContent = priorityValue;
    priorityContainer.remove()
}


export function handleTaskFormPriorityButtonClick(e) {
    const priorityContainer = renderPriorityContainer(e)
    attachSetPriorityActionListeners(priorityContainer)
}

