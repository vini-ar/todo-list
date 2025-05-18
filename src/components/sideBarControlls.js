import { taskFormFactory } from "./taskFormFactory"
import { loadPageSideBar } from "./loadPageSidebar"


export function sidebarControlls() {
    const addProjectButton = document.querySelector(".sidebar__projects--create-project-button")
    const inboxPageButton = document.querySelector('.sidebar__control--inbox')
    const addTaskButton = document.querySelector('.sidebar__control--add-task')
    const content = document.querySelector('#content')

    if (addTaskButton) {
        addTaskButton.addEventListener('click', (e) => {
            e.stopPropagation()
            const taskAddContainer = taskFormFactory()
            taskAddContainer.setAttribute("id", "floating-task-add-container")  
            const cancelButton = taskAddContainer.querySelector(".task-add__cancel")
            const submitButton = taskAddContainer.querySelector(".task-add__submit")
            cancelButton.onclick = () => taskAddContainer.remove()
            submitButton.onclick = () => taskAddContainer.remove()        
            content.append(taskAddContainer)
        })
    }


    const currPath = window.location.pathname
    const projectPath = '/projects.html'
    const inboxPath = '/inbox.html'
    
    addProjectButton.onclick = () => loadPageSideBar(projectPath, currPath)
    inboxPageButton.onclick = () => loadPageSideBar(inboxPath, currPath)
        
}