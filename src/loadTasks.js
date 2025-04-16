import { renderTask } from "./renderTask"

export function loadTasks(project) {
    const taskList = document.querySelector('.task-list')
    project.forEach((Task) => {
        const ul = renderTask(Task)
        taskList.append(ul)
    })
}