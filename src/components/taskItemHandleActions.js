import { taskManager } from "./taskManager"


export function handleTaskItemCheckboxClick(checkbox) {
        const taskItemDiv = checkbox.closest('.task-item')
        if (!taskItemDiv.classList.contains("task-item")) {
            return console.error("wrong parent element")
        }
        const taskId = taskItemDiv.getAttribute("data-task-id")
        const targetTask = taskManager.getTaskById(taskId)
        
        targetTask.markDone();

        taskItemDiv.remove()
}