import { addNewTask } from './dataManager.js';
import { getMontDayFormatString, getNextWeek, getToday, getTomorrow, getNextWeekendDay } from './dateManager.js';
import { clearForm, placeElementAt, removeContainer, removeElementById, toggleButtonVisibility } from './domChanger.js';
import { isValidForm } from './formValidations.js';
import { getFormData } from './getFormData.js';
import { createDateContainer, renderDateContainer, renderSidebar } from "./renderElements.js";
import { renderTask } from './renderTask.js';
import { taskFormFactory } from "./taskFormFactory.js";



function handleTodayButtonClick(dateContainer) {
    const dateSpan = document.querySelector("#date-span")
    const todayButton = document.querySelector("#todayButton")

    console.log(dateContainer, dateSpan, todayButton)

    if (todayButton) {
        todayButton.onclick = () => {
            const todayDate = getToday()
            dateSpan.textContent = getMontDayFormatString(todayDate)
            dateContainer.remove() 
        }
    }
}

function handleTomorrowButtonClick() {
    const dateSpan = document.querySelector("#date-span")
    const tomorrowButton = document.querySelector('#tomorrowButton')
    const dateContainer = document.querySelector(".userDateContainer")

    if (tomorrowButton) {
        tomorrowButton.onclick = () => {
            const tomorrowDate = getTomorrow()
            dateSpan.textContent = getMontDayFormatString(tomorrowDate)
            dateContainer.remove()
        }

    }

}

function handleThisWeekendButtonClick() {
    const dateSpan = document.querySelector("#date-span")
    const thisWeekendButton = document.querySelector("#thisWeekendButton")

    if (thisWeekendButton) {
        thisWeekendButton.onclick = () => {
            const nextWeekendDate = getNextWeekendDay()
            dateSpan.textContent = getMontDayFormatString(nextWeekendDate)
            userDateContainer.remove() 
        }
    }

}

function handleNextWeekButtonClick() {
    const dateSpan = document.querySelector("#date-span")
    const nextWeekButton = document.querySelector("#nextWeekButton")

    if (nextWeekButton) {
        nextWeekButton.onclick = () => {
            const nextWeek = getNextWeek()
            dateSpan.textContent = getMontDayFormatString(nextWeek)   
        }

    }

}

export function handleFormCancelButtonClick() {
    return () => {
        
        removeElementById("task-add-form-container")
    }
}

export function handleContentAddTaskSubmitButtonClick() {
    return () => {
        //get form data
        //create obj
        //clearForm
        clearForm()
    }
}

export function handleProjectContentAddTaskButtonClick() {
    const taskAddButton = document.querySelector(".task-add__display-button")
    const taskAdd = document.querySelector(".task-add")
    
    if (taskAddButton) {
        taskAddButton.onclick = () => {
            taskAddButton.style.display = 'none'
            const formContainer = taskFormFactory()

            const cancelButton = formContainer.querySelector(".task-add__cancel")
            const submitButton = formContainer.querySelector(".task-add__submit")


            taskAdd.append(formContainer)
        }
    }
}
export function handleContentTaskFormButtonsClick(formContainer) {
    const cancelButton = formContainer.querySelector(".task-add__cancel")
    const submitButton = formContainer.querySelector(".task-add__submit")
    const dateButton = formContainer.querySelector("#displayDateContainerButton")
    const priorityButton = formContainer.querySelector("#priorityButton")
    const addTaskButton = document.querySelector("#create-task-add-form")
    const taskList = document.querySelector(".task-list")

    cancelButton?.addEventListener("click", (e) => {
        e.preventDefault();
        formContainer.remove()
        toggleButtonVisibility(addTaskButton)
        
        
    })

    submitButton?.addEventListener("click", () => {
        if (!isValidForm()) {
            return alert("Task name empty")
        }
        const newTask = getFormData(formContainer)
        addNewTask(newTask)
        const taskItemDiv = renderTask(newTask)
        taskItemDiv.dataset.id = newTask.id
        taskList.append(taskItemDiv)

    })


    dateButton?.addEventListener("click", (e) => {
        const dateContainer = document.querySelector(".userDateContainer")
        if (!dateContainer) {
            const newDateContainer = createDateContainer()
            placeElementAt(newDateContainer, e.clientX, e.clientY)
            handleNextWeekButtonClick()
            handleThisWeekendButtonClick()
            handleTomorrowButtonClick()
            handleTodayButtonClick(dateContainer)
        }
        
    })



    priorityButton?.addEventListener("click", () => formContainer.remove())

}