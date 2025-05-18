import { getMontDayFormatString, getNextWeek, getNextWeekendDay, getToday, getTomorrow } from "./dateManager"
import { clearForm, placeElementAt, toggleButtonVisibility } from "./domChanger"
import { isValidForm } from "./formValidations"
import { getFormData } from "./getFormData"
import { createDateContainer, renderPriorityContainer } from "./renderElements"
import { renderTask } from "./renderTask"
import { attachSetDateButtonsActionListeners, attachSetPriorityActionListeners, attachTaskItemActionListeners } from "./taskAttachEventListener"
import { taskManager} from "./taskManager"

export function handleTaskFormCancelButtonClick (formContainer) {
    const taskAddButton = document.querySelector('#create-task-add-form')
    if (formContainer.id !== 'task-add-form-container') return formContainer.remove()
    toggleButtonVisibility(taskAddButton)
}


export function handleTaskFormSubmitButtonClick (button) {
    if (!isValidForm()) {
        window.alert('Task name empty')
        return
    }
    const form = button.closest('.task-add__form-container')
    const newTask = getFormData(form)
    taskManager.addTask(newTask)

    if (form.id !== 'task-add-form-container') return form.remove()    

    const taskList = document.querySelector('.task-list')
    const taskItemDiv = renderTask(newTask)

    attachTaskItemActionListeners(taskItemDiv)

    taskList.append(taskItemDiv)
    clearForm()
}

export function handleSetDateButtonClick (e, dateValue) {
    e.stopPropagation()
    const dateContainer = e.target.closest('.userDateContainer')

    let targetElement
    if (e.target.closest('task-date-update')) {
        targetElement = e.target.closest('#task-date-update')
    } else {
        targetElement = document.querySelector('#task-date-span')
    }
    
    let targetDay;

    if (dateValue === 'today') {
        targetDay = getToday()
    } else if (dateValue === 'tomorrow') {
        targetDay = getTomorrow()
    } else if (dateValue === 'weekend') {
        targetDay = getNextWeekendDay()
    } else {
        targetDay = getNextWeek()
    }
    targetElement.setAttribute('data-value', targetDay)
    targetElement.textContent = getMontDayFormatString(targetDay)
    dateContainer.remove()
}


export function handleTaskFormDateButtonClick (e) {
    e.stopPropagation()
    const dateContainer = document.querySelector('.userDateContainer')
    const taskDateUpdate = e.target?.closest('#task-date-update')
    
    if (dateContainer) return dateContainer.remove()
    
    const newDateContainer = createDateContainer()
    const buttonCoordinates = e.target.getBoundingClientRect()

    taskDateUpdate === null 
        ? placeElementAt(newDateContainer, buttonCoordinates.x, buttonCoordinates.y) 
        : taskDateUpdate.append(newDateContainer) 
    attachSetDateButtonsActionListeners(e)
}

export function handleSetPriorityButtonClick (setPriorityButton) {
    let targetElement = setPriorityButton.closest('#task-priority-update')
    const priorityValue = setPriorityButton.getAttribute('data-priority')

    if (!targetElement) {
        targetElement = document.querySelector('#task-priority-span')
        targetElement.textContent = priorityValue
    } else {
        targetElement.textContent = 'Priority: ' + priorityValue
    }
    targetElement.setAttribute('priority-value', priorityValue)
    const priorityContainer = setPriorityButton.closest('.priorityContainer')
    priorityContainer.remove()
}


export function handleTaskFormPriorityButtonClick (e) {
    const priorityContainer = renderPriorityContainer()
    const buttonCoordinates = e.target.getBoundingClientRect()

    placeElementAt(priorityContainer, buttonCoordinates.x, buttonCoordinates.y)
    attachSetPriorityActionListeners(priorityContainer)
}

