import '../styles/styles.css'
import { format } from 'date-fns'
import { createIcons, icons } from 'lucide';
import { renderAddTaskContainer } from '../components/renderAddTaskContainer'
import { markCurrentPage } from '../components/markCurrentPage';

createIcons({ icons });

function handleTaskAddButtonClick() {
    const taskAddButton = document.querySelector('.task-add__display-button')
    taskAddButton.addEventListener('click', () => {
    const button = document.querySelector(".task-add__button-container")
    button.classList.add("hide")
    renderAddTaskContainer()
})

}

function handleCreateProjectClick() {
    const addProjectDiv = document.querySelector(".sidebar__projects--create-project-button")
    addProjectDiv.addEventListener("click", () => window.location.href='projects.html')
}

function handleLoadInboxClick() {
    const 
}
handleTaskAddButtonClick()
handleCreateProjectClick()