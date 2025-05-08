import { taskFactory } from "./taskFactory"


export function getFormData(formContainer) {

    const taskName = formContainer.querySelector("#task-name-input").value
    const taskDescription = formContainer.querySelector("#task-description-input").value
    const taskDate = ""
    const taskHour = ""
    const taskPriority = ""
    const taskProject = formContainer.querySelector("#task-add__project-select").value
   
    
    return taskFactory(taskName, taskDescription, taskDate, taskHour, taskProject, taskPriority)

}