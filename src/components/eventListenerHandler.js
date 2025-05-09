import { addNewTask } from './taskManager.js';
import { getMontDayFormatString, getNextWeek, getToday, getTomorrow, getNextWeekendDay } from './dateManager.js';
import { clearForm, placeElementAt, removeContainer, removeElementById, toggleButtonVisibility } from './domChanger.js';
import { elementFactory } from './elementFactory.js';
import { isValidForm } from './formValidations.js';
import { getFormData } from './getFormData.js';
import { createDateContainer, renderDateContainer, renderSidebar } from "./renderElements.js";
import { renderTask } from './renderTask.js';
import { taskFormFactory } from "./taskFormFactory.js";


export function handleFormCancelButtonClick() {
    return () => {
        
        removeElementById("task-add-form-container")
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


function bindDateButtonsClick() {
    const setDateButtonNodeList = document.querySelectorAll(".setDateButton")
    const dateContainer = document.querySelector(".userDateContainer")
    const dateSpan = document.querySelector("#task-date-span")

    for (let i = 0; i < 4; i++) {
        const button = setDateButtonNodeList[i]
        const dataValue = button.getAttribute("data-value")
        let targetDay;
        button.addEventListener("click", () => {   
            if (dataValue === "today") {
                targetDay = getToday()
            }  
            else if (dataValue === "tomorrow") {
                targetDay = getTomorrow()
            } 
            else if (dataValue === "weekend") {
                targetDay = getNextWeekendDay()
            }
            else {
               targetDay = getNextWeek()
            }
            dateSpan.dataset.value = targetDay
            dateSpan.textContent = getMontDayFormatString(targetDay)
            dateContainer.remove()
        })
    }
}   

function bindPriorityButtonsClick() {
    const allButtons = document.querySelectorAll(".priorityButton")
    const prioritySpan = document.querySelector("#task-priority-span")
    const priorityContainer = document.querySelector(".priorityContainer")
    for(let i = 0; i < 4; i++) {
        const button = allButtons[i]
        button.addEventListener("click", () => {
            prioritySpan.textContent = button.getAttribute("data-priority")
            prioritySpan.dataset.priority = button.getAttribute("data-priority")
            priorityContainer.remove()
        })
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
        clearForm()

    })

    dateButton?.addEventListener("click", (e) => {   
            if (document.querySelector(".userDateContainer")) {
                return
            }   
            const dateContainer = createDateContainer()
            placeElementAt(dateContainer, e.clientX, e.clientY)
            bindDateButtonsClick()
    })


    priorityButton?.addEventListener("click", (e) => {
    if (document.querySelector(".priorityContainer")) {
        return
    }

    const priorityContainer = elementFactory("div", "", {class: "priorityContainer"})
    placeElementAt(priorityContainer, e.clientX, e.clientY)
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
        priorityContainer.append(button)
    }
    bindPriorityButtonsClick()
    })

}

export function handleEventListenerTaskItem(taskItemDiv) {
    const checkboxRadio = taskItemDiv.querySelector(".task-item__checkbox-input")
    const taskId = taskItemDiv.dataset.id

    checkboxRadio.onclick = () => {
        console.log(taskId)
        taskItemDiv.remove()
    }
}