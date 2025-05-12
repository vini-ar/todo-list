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
