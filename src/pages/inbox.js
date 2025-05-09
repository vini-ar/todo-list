import '../styles/styles.css'
import { CodeSquare, createIcons, DownloadCloud, icons } from 'lucide';
import { renderTask } from '../components/renderTask'
import { handleEventListenerTaskItem } from '../components/handleEventListenerTaskItem';
import { handleAddTaskSideBarButtonClick } from '../components/handleAddTaskSideBarButtonClick.js';
import { renderAddTaskFormContainer, renderContentAddTaskFormContainer, renderFloatingFormContainer, renderFormContainer, renderProjectContentTemplate, renderSidebar, renderSidebarAddTaskFormContainer, renderUserTask } from '../components/renderElements.js';
import { hiddeButton, toggleButtonVisibility, toggleElementVisibility } from '../components/domChanger.js';


createIcons({ icons });

function renderProjectPage() {
    renderSidebar()
    renderProjectContentTemplate()
    renderUserTask()
}

function handleEventListenerProjectPage() {

    const sidebarAddTaskButton = document.querySelector(".sidebar__control--add-task")
    const contentAddTaskButton = document.querySelector(".task-add__display-button")


    sidebarAddTaskButton.addEventListener("click", renderSidebarAddTaskFormContainer)
    contentAddTaskButton.addEventListener("click", (e) => {
        toggleButtonVisibility(e.target)
        renderContentAddTaskFormContainer()
    })

}

renderProjectPage()
handleEventListenerProjectPage()
