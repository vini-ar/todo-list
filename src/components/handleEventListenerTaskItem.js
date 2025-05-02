import { constructNow } from "date-fns"
import { userTasksDatabase } from "../pages/inbox"

export function handleEventListenerTaskItem(taskItemDiv) {
    const checkboxRadio = taskItemDiv.querySelector(".task-list__checkbox-input")
    const taskId = taskItemDiv.dataset.id

    checkboxRadio.onclick = () => {
        console.log(taskId)
        taskItemDiv.remove()
    }
}