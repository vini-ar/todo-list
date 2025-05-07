import '../styles/styles.css'
import { CodeSquare, createIcons, DownloadCloud, icons } from 'lucide';
import { renderTask } from '../components/renderTask'
import { handleEventListenerTaskItem } from '../components/handleEventListenerTaskItem';
import { handleAddTaskSideBarButtonClick } from '../components/handleAddTaskSideBarButtonClick.js';
import { renderAddTaskFloatingFormContainer, renderAddTaskFormContainer, renderFloatingFormContainer, renderFormContainer, renderProjectContentTemplate, renderSidebar, renderUserTask } from '../components/renderElements.js';
import { hiddeButton, toggleElementVisibility } from '../components/domChanger.js';


createIcons({ icons });

function renderProjectPage() {
    renderSidebar()
    renderProjectContentTemplate()
    renderUserTask()
}

function handleEventListenerProjectPage() {

    const sidebarAddTaskButton = document.querySelector(".sidebar__control--add-task")
    const contentAddTaskButton = document.querySelector(".task-add__display-button")


    sidebarAddTaskButton.addEventListener("click", renderAddTaskFloatingFormContainer)
    contentAddTaskButton.addEventListener("click", (e) => {
        toggleElementVisibility(e.target)
        renderAddTaskFormContainer()
    })

}

renderProjectPage()
handleEventListenerProjectPage()

