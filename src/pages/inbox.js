import '../styles/styles.css'
import { renderContentAddTaskFormContainer, renderSidebarAddTaskFormContainer, renderUserTask } from '../components/renderElements.js';
import { toggleButtonVisibility } from '../components/domChanger.js';




const initUI = {
    start() {
        renderUserTask()
        this.getDOM()
        this.attachTaskPageEventListener()
    },
    getDOM() {
        this.sidebarAddTaskButton = document.querySelector(".sidebar__control--add-task")
        this.contentAddTaskButton = document.querySelector(".task-add__display-button")
        this.sidebarProjects = document.querySelector(".sidebar__projects")
    },
    attachTaskPageEventListener() {
        this.sidebarAddTaskButton.addEventListener("click", () => renderSidebarAddTaskFormContainer())
        this.contentAddTaskButton.addEventListener("click", (e) => {
            toggleButtonVisibility(e.target)
            renderContentAddTaskFormContainer()
        })
    }
}
initUI.start()

