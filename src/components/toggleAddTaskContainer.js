export function toggleAddTaskContainer() {
    const createTaskContainer = document.querySelector(".task-add__form-container")

    if (createTaskContainer.classList.contains("hide")) {
        createTaskContainer.style.display = "none"
    }
    else {
        createTaskContainer.style.display = "inline"
    }



}