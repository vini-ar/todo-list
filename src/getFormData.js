export function getFormData() {

    const taskName = document.querySelector("#task-name-input").value
    const taskDescription = document.querySelector("#task-description-input").value
    const taskDate = document.querySelector("#task-date-input").value
    const taskProject = document.querySelector("#task-add__project-select").value
    
    return {taskName, taskDescription, taskDate, taskProject}

}