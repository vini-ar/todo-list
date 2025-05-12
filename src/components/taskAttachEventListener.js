import { addNewTask } from './taskManager.js';
import { getMontDayFormatString, getNextWeek, getToday, getTomorrow, getNextWeekendDay } from './dateManager.js';
import { clearForm, placeElementAt, removeContainer, removeElementById, toggleButtonVisibility } from './domChanger.js';
import { elementFactory } from './elementFactory.js';
import { isValidForm } from './formValidations.js';
import { getFormData } from './getFormData.js';
import { createDateContainer } from "./renderElements.js";
import { renderTask } from './renderTask.js';
import { taskFormFactory } from "./taskFormFactory.js";
import { setDate } from 'date-fns';
import { bindDateButtonsClick, handleSetDateButtonClick, handleSetPriorityButtonClick, handleTaskFormCancelButton, handleTaskFormCancelButtonClick, handleTaskFormDateButtonClick, handleTaskFormPriorityButtonClick, handleTaskFormSubmitButtonClick } from './taskFormHandleActions.js';

//Attach > colocar event listenr
//handle > codigo

// export function attachTaskFormActionListeners(formContainer) {
//     const cancelButton = formContainer.querySelector(".task-add__cancel")
//     const submitButton = formContainer.querySelector(".task-add__submit")
//     const dateButton = formContainer.querySelector("#displayDateContainerButton")
//     const priorityButton = formContainer.querySelector("#priorityButton")
//     const addTaskButton = document.querySelector("#create-task-add-form")
//     const taskList = document.querySelector(".task-list")

//     cancelButton?.addEventListener("click", (e) => {
//         formContainer.remove()
//         toggleButtonVisibility(addTaskButton)
//     })

//     submitButton?.addEventListener("click", () => {
//         if (!isValidForm()) {
//             return alert("Task name empty")
//         }
//         const newTask = getFormData(formContainer)
//         addNewTask(newTask)
//         const taskItemDiv = renderTask(newTask)
//         taskItemDiv.dataset.id = newTask.id
//         taskList.append(taskItemDiv)
//         clearForm()

//     })

//     dateButton?.addEventListener("click", (e) => handleDateButtonClick(e))
//     priorityButton?.addEventListener("click", (e) => handlePriorityButtonClick(e))

// }

// export function attachTaskItemEventListener(taskItemDiv) {
//     const checkboxRadio = taskItemDiv.querySelector(".task-item__checkbox-input")
//     const taskId = taskItemDiv.dataset.id

//     checkboxRadio.onclick = () => {
//         console.log(taskId)
//         taskItemDiv.remove()
//     }
// }

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
        button.addEventListener("click", () => handleSetDateButtonClick(dateValue))   
    } 
}

export function attachSetPriorityActionListeners() {
    const allButtons = document.querySelectorAll(".priorityButton")
    for(let i = 0; i < 4; i++) {
        const button = allButtons[i]
        button.addEventListener("click", () => handleSetPriorityButtonClick(button))
    }
}
