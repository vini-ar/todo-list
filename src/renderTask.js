import { elementFactory } from './elementFactory';


export function renderTask(Task) {
    const ul = elementFactory('ul', '', {class: "task-item"})
    const btn = elementFactory('button', '', {class: 'task-btn'})
    const checkbox = elementFactory('input', '', {type: 'checkbox', id: `task-${Task.id}`, for: `task-${Task.id}`})
    const taskName = elementFactory('span', Task.name, {class: "task-name"} )

    taskName.addEventListener('click', () => {
        let userTaskName = prompt("Enter Your Task Name")
        taskName.textContent = userTaskName
        if (!userTaskName) {
            taskName.textContent = "Hello"
        }

    })
    const taskDate = elementFactory('input', '', {class: 'task-date', type: 'date', value: Task.deadline} )

    btn.append(taskName, taskDate)
    ul.append(checkbox, btn)

    return ul
}