import '../styles/styles.css'
import { createIcons, icons } from 'lucide';
import { createAddTaskContainer } from '../components/createAddTaskContainer'
import { sidebarControlls } from '../components/sideBarControlls';

createIcons({ icons });


function handleTaskAddButtonClick() {
    const taskAddButton = document.getElementById('create-task-add-form')
    const taskAdd = document.querySelector('.task-add')

    if (taskAddButton) {
        taskAddButton.onclick = () => {
            taskAddButton.style.display = 'none'
            const container = createAddTaskContainer()
            taskAdd.append(container)
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    handleTaskAddButtonClick();
    sidebarControlls()

});
