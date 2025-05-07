import '../styles/styles.css'
import { CodeSquare, createIcons, DownloadCloud, icons } from 'lucide';
import { taskFormFactory } from '../components/taskFormFactory'
import { getFormData } from '../components/getFormData';
import { clearForm } from '../components/clearForm'
import { renderTask } from '../components/renderTask'
import { handleEventListenerTaskItem } from '../components/handleEventListenerTaskItem';
import { displaySidebar } from '../components/displaySidebar';
import { handleAddTaskSideBarButtonClick } from '../components/handleAddTaskSideBarButtonClick.js';
import { elementFactory } from '../components/elementFactory.js';
import { constructNow, format } from 'date-fns';
import { getDay, getMontDayFormatString, getMonthName, getNextWeek, getToday, getTomorrow } from '../components/dataManager.js';





createIcons({ icons });

export let allTasks = [];

let userTasksDatabaseKey = localStorage.getItem("userTasks")
export let userTasksDatabase = JSON.parse(userTasksDatabaseKey)

 
const content = document.querySelector("#content")
const taskList = document.querySelector('.task-list')
const displayButton = document.querySelector(".task-add__display-button") 
const taskAdd = document.querySelector('.task-add')
const taskAddButton = document.getElementById('create-task-add-form')



function handleContentAddTaskSubmitButton(formContainer) {
    const Task = getFormData(formContainer);
        
    if (!Task.name) {
        return alert("You Cannot Create Task Without Name")
    }

    allTasks.push(Task)

    const taskItemDiv = renderTask(Task)
    taskList.append(taskItemDiv)
    handleEventListenerTaskItem(taskItemDiv)
        
    localStorage.setItem("userTasks", JSON.stringify(allTasks))
}


function handleEventListenerContentFormButtonInbox(formContainer) {
    const cancelButton = formContainer.querySelector(".task-add__cancel")

    if (cancelButton) {
        cancelButton.onclick = () => {
            formContainer.remove()
            displayButton.style.display = 'flex'
        }
    
    }

    const submitButton = formContainer.querySelector(".task-add__submit")

    if (submitButton) {
        submitButton.onclick = () => {
            handleContentAddTaskSubmitButton(formContainer)
            clearForm()
        }
    }

    const dateButton = formContainer.querySelector("#displayDateContainerButton")

    if (dateButton) {
        dateButton.onclick = (e) => {
            e.preventDefault()
            const userDateContainer = elementFactory("div", "", { class: "userDateContainer"})
            userDateContainer.innerHTML = ` 
                    <div class="userDateButtons">
                        <button id="todayButton">Today</button>
                        <button id="tomorrowButton">Tomorrow</button>
                        <button id="thisWeekendButton">This weekend</button>
                        <button id="nextWeekButton">Next week</button>
                    </div>
                    <div class="userDateCalendar">
                        <span>Calendar</span>
                    </div>
                    <div class="userHour">
                        <button id="timeButton">Time</button>
                    </div>
            
            `
            const positionObj = dateButton.getBoundingClientRect();
            const topPosition = positionObj.y + dateButton.offsetHeight
            const leftPosition = positionObj.x

            userDateContainer.style.position = "absolute"
            userDateContainer.style.top = JSON.stringify(topPosition) + "px"
            userDateContainer.style.left = JSON.stringify(leftPosition) + "px"

            content.append(userDateContainer)
            
            //add event listener for each button
            const dateSpan = document.querySelector("#date-span")
            const inputName = document.querySelector("#task-name-input");
            const divWrapperName = document.querySelector(".divWrapperName")

            const todayButton = document.querySelector("#todayButton")
            const tomorrowButton = document.querySelector('#tomorrowButton')
            const thisWeekendButton = document.querySelector("#thisweekendButton")
            const nextWeekButton = document.querySelector("#nextWeekButton")


            if (todayButton) {
                todayButton.onclick = () => {
                    const todayDate = getToday()
                    dateSpan.textContent = getMontDayFormatString(todayDate)
                    userDateContainer.remove() 
                }
            }
            if (tomorrowButton) {
                tomorrowButton.onclick = () => {
                    const tomorrowDate = getTomorrow()
                    dateSpan.textContent = getMontDayFormatString(tomorrowDate)
                    userDateContainer.remove()
                }

            }
            if (thisWeekendButton) {
                thisWeekendButton.onclick = () => {
                    
                }
            }

            if (nextWeekButton) {
                nextWeekButton.onclick = () => {
                    const nextWeek = getNextWeek()
                    dateSpan.textContent = getMontDayFormatString(nextWeek)   
                    userDateContainer.remove()                 
                }

            }


        }

    }
}

function handleContentTaskAddButtonClick() {
    if (taskAddButton) {
        taskAddButton.onclick = () => {
            taskAddButton.style.display = 'none'
            const formContainer = taskFormFactory()
            handleEventListenerContentFormButtonInbox(formContainer)
            taskAdd.append(formContainer)
        }
    }

}

function displayUserTask() {
    const inboxTasks = userTasksDatabase.filter( (task) => task.projectId === 'inbox')
    if (taskList) {
        inboxTasks.forEach((Task) =>  {
            const taskItemDiv = renderTask(Task)
            taskItemDiv.dataset.id = Task.id
            handleEventListenerTaskItem(taskItemDiv)
            taskList.append(taskItemDiv)
        })
    }
}

document.addEventListener("DOMContentLoaded", () => {
    displaySidebar()
    handleContentTaskAddButtonClick();
    displayUserTask()
    handleAddTaskSideBarButtonClick()
})
