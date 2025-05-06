import { taskFactory } from "./taskFactory"


export function getFormData(formContainer) {

    const taskName = formContainer.querySelector("#task-name-input").value

    if (!taskName) {
        return console.error("You cannot create task without name")
    }

    const taskDescription = formContainer.querySelector("#task-description-input").value

    const taskDate = formContainer.querySelector("#task-date-input").value
    const taskProject = formContainer.querySelector("#task-add__project-select").value
    
    return taskFactory(taskName, taskDescription, taskDate, taskProject)

}