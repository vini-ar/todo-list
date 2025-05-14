import '../styles/styles.css'
import { CodeSquare, createIcons, DownloadCloud, icons } from 'lucide';
import { renderAddTaskFormContainer, renderContentAddTaskFormContainer, renderFloatingFormContainer, renderFormContainer, renderProjectContentTemplate, renderSidebar, renderSidebarAddTaskFormContainer, renderUserTask } from '../components/renderElements.js';
import { hiddeButton, toggleButtonVisibility, toggleElementVisibility } from '../components/domChanger.js';


createIcons({ icons });



const initUI = {
    start() {
        renderSidebar();
        renderUserTask();
        this.getDOM()
        this.attachEventListener()
    },
    getDOM() {
        this.sidebarAddTaskButton = document.querySelector(".sidebar__control--add-task")
        this.contentAddTaskButton = document.querySelector(".task-add__display-button")
    },
    attachEventListener() {
        this.sidebarAddTaskButton.addEventListener("click", () => renderSidebarAddTaskFormContainer())
        this.contentAddTaskButton.addEventListener("click", (e) => {
            toggleButtonVisibility(e.target)
            renderContentAddTaskFormContainer()
        })
    }

}

initUI.start()
