import { addNewTask, taskManager } from './taskManager.js';
import { getMontDayFormatString, getNextWeek, getToday, getTomorrow, getNextWeekendDay } from './dateManager.js';
import { clearForm, placeElementAt, removeContainer, removeElementById, toggleButtonVisibility } from './domChanger.js';
import { elementFactory } from './elementFactory.js';
import { isValidForm } from './formValidations.js';
import { getFormData } from './getFormData.js';
import { createDateContainer, renderTaskPage } from "./renderElements.js";
import { renderTask } from './renderTask.js';
import { taskFormFactory } from "./taskFormFactory.js";
import { setDate } from 'date-fns';
import { bindDateButtonsClick, handleSetDateButtonClick, handleSetPriorityButtonClick, handleTaskFormCancelButton, handleTaskFormCancelButtonClick, handleTaskFormDateButtonClick, handleTaskFormPriorityButtonClick, handleTaskFormSubmitButtonClick } from './taskFormHandleActions.js';
import { handleTaskItemCheckboxClick } from './taskItemHandleActions.js';

export function attachTaskFormActionListeners(formContainer) {
    const cancelButton = formContainer.querySelector(".task-add__cancel")
    const submitButton = formContainer.querySelector(".task-add__submit")
    const dateButton = formContainer.querySelector("#displayDateContainerButton")
    const priorityButton = formContainer.querySelector("#priorityButton")
    
    cancelButton?.addEventListener("click",  () => handleTaskFormCancelButtonClick(formContainer))
    submitButton?.addEventListener("click", () => handleTaskFormSubmitButtonClick(formContainer))
    dateButton?.addEventListener("click", (e) => handleTaskFormDateButtonClick(e))
    priorityButton?.addEventListener("click", (e) => handleTaskFormPriorityButtonClick(e))

}



export function attachSetDateButtonsActionListeners() {
    const setDateButtonNodeList = document.querySelectorAll(".setDateButton")

    for (let i = 0; i < 4; i++) {
        const button = setDateButtonNodeList[i]
        const dateValue = button.getAttribute("data-value")
        button.addEventListener("click", (e) => handleSetDateButtonClick(e, dateValue))   
    } 
}

export function attachSetPriorityActionListeners(priorityContainer) {
    const allButtons = priorityContainer.querySelectorAll(".priorityButton")
    for(let i = 0; i < 4; i++) {
        const button = allButtons[i]
        button.addEventListener("click", () => handleSetPriorityButtonClick(button))
    }
}


export function attachTaskItemActionListeners(taskItemDiv) {
    const taskItemInfoDiv = taskItemDiv.querySelector(".task-item__info")
    const taskItemcheckbox = taskItemDiv.querySelector(".task-item__checkbox-input")

    taskItemInfoDiv?.addEventListener("click", (e) => renderTaskPage(e.target))
    taskItemcheckbox?.addEventListener("click", (e) => handleTaskItemCheckboxClick(e.target))

}