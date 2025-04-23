import './styles.css';
import { format } from 'date-fns'
import { createIcons, icons } from 'lucide';
import { renderAddTaskContainer } from './renderAddTaskContainer'

createIcons({ icons });

let inbox = []

const taskAddButton = document.querySelector('.task-add__display-button')
taskAddButton.addEventListener('click', () => {
    const button = document.querySelector(".task-add__button-container")
    button.classList.add("hide")
    renderAddTaskContainer()
})