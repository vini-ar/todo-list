import { taskFormFactory } from "./taskFormFactory"
import { loadPageSideBar } from "./loadPageSidebar"
import { getFormData } from "./getFormData"
import { taskFactory } from "./taskFactory"
import { renderTask } from "./renderTask"



export function sidebarControlls() {
    const addProjectButton = document.querySelector(".sidebar__projects--create-project-button")
    const inboxPageButton = document.querySelector('.sidebar__control--inbox')
    const addTaskButton = document.querySelector('.sidebar__control--add-task')
    const content = document.querySelector('#content')
    const sidebar = document.querySelector('#sidebar')
    const container = document.querySelector('.container')

    addTaskButton.addEventListener('click', (e) => {
        e.stopPropagation()

        const taskAddContainer = taskFormFactory()
        taskAddContainer.setAttribute('id', 'floating-task-add-container')
        
        const cancelButton = taskAddContainer.querySelector('.task-add__cancel')
        const submitButton = taskAddContainer.querySelector('.task-add__submit')        

        submitButton.onclick = () => {
            const obj = getFormData()
            const Task = taskFactory(obj.taskName, obj.taskDescription, obj.taskDate, obj.taskProject);
            
            if (!Task.name) {
                return alert("You Cannot Create Task Without Name")
            }
    
            const taskItemDiv = renderTask(Task)
            const taskList = document.querySelector('.task-list')
            taskList.append(taskItemDiv)

            taskAddContainer.remove()
        }

    
        cancelButton.onclick = () => taskAddContainer.remove()
        content.onclick = () => taskAddContainer.remove()
        sidebar.onclick = () => taskAddContainer.remove()

        container.append(taskAddContainer)
    })

    const currPath = window.location.pathname
    const projectPath = '/projects.html'
    const inboxPath = '/inbox.html'
    
    addProjectButton.onclick = () => loadPageSideBar(projectPath, currPath)
    inboxPageButton.onclick = () => loadPageSideBar(inboxPath, currPath)
        
}

