import { getMontDayFormatString, getNextWeek, getToday, getTomorrow, getNextWeekendDay } from './dateManager.js';
import { clearForm } from './domChanger.js';
import { renderDateContainer, renderSidebar } from "./renderElements.js";
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
            userDateContainer.remove()                 
        }

    }

}

export function handleAddTaskCancelButtonClick() {
    return () => {
        
        removeFormContainer()
    }
}

export function handleAddTaskSubmitButtonClick() {
    return () => {
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

export function handleDateButtonClick(formContainer) {
    renderDateContainer(formContainer)
}