import { allTasks } from "../pages/inbox"
import { getFormData } from "./getFormData"
import { renderTask } from "./renderTask"
import { taskFormFactory } from "./taskFormFactory"



export function handleAddTaskSideBarButtonClick() {
    const addTaskButton = document.querySelector(".sidebar__control--add-task")
    const content = document.querySelector("#content")

    if (addTaskButton) {
        addTaskButton.onclick = () => {
            const formContainer = taskFormFactory()
    
            formContainer.setAttribute("id", "floating-task-add-container")
            
            const cancelButton = formContainer.querySelector(".task-add__cancel")
            const submitButton = formContainer.querySelector(".task-add__submit")
    
            cancelButton.onclick = () => formContainer.remove()
            submitButton.onclick = (e) => {
                e.preventDefault()
                const Task = getFormData(formContainer)
                
                if (!Task.name) {
                    return alert("You cannot create task without Name")       
                }
                allTasks.push(Task)
                localStorage.setItem("userTasks", JSON.stringify(allTasks))
    
                const taskItemDiv = renderTask(Task)
                const taskList = document.querySelector(".task-list")
    
                if (taskList) {
                    taskList.append(taskItemDiv)            
                }
                formContainer.remove()          
            } 
            
            
            content.append(formContainer)
        }
    }

}