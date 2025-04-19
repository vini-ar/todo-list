export function displayAddTaskContainer() {
    const taskAddFormContainer = document.querySelector(".task-add__form-container")
    const button = document.querySelector(".task-add__button")

    button.classList.add("hide")
    taskAddFormContainer.classList.remove("hide")
    
}