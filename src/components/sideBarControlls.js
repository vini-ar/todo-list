import { createAddTaskContainer } from "./createAddTaskContainer"
import { loadPageSideBar } from "./loadPageSidebar"

export function sidebarControlls() {
    const addProjectButton = document.querySelector(".sidebar__projects--create-project-button")
    const inboxPageButton = document.querySelector('.sidebar__control--inbox')
    const addTaskButton = document.querySelector('.sidebar__control--add-task')
    const content = document.querySelector('#content')
    const sidebar = document.querySelector('#sidebar')
    const container = document.querySelector('.container')

    addTaskButton.addEventListener('click', (e) => {
        e.stopPropagation()

        const taskAddContainer = createAddTaskContainer()
        taskAddContainer.setAttribute('id', 'floating-task-add-container')
        
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