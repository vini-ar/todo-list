import { getFormData } from "./getFormData";
import { taskFactory } from "./taskFactory";



export function handleAddTaskButtonClick(formContainer) {

    if (window.location.pathname = "/inbox.htm") {

        const taskList = document.querySelector(".task-list")
        taskList.append(taskItemDiv)            

        clearForm()
    }

    formContainer.remove()


}