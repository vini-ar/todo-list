import './styles.css';
import { format, compareAsc, add } from 'date-fns'
import { createIcons, icons } from 'lucide';
import { projectFactory } from './projectFactory'
import { renderTask } from './renderTask';
import { taskFactory } from  './taskFactory' 
import { loadTasks } from './loadTasks';
import { renderAddTaskContainer } from './renderAddTaskContainer';
import { hideButton } from './hideButton';

createIcons({ icons });
let inbox = []


const taskList = document.querySelector('.task-list')
const addTaskButton = document.querySelector('.task-add-btn')
addTaskButton.addEventListener('click', () => {
    hideButton()
    renderAddTaskContainer()
    /*
    const Task = taskFactory()
    const ul = renderTask(Task)
    taskList.append(ul)
    inbox.push(Task)
    */
})


document.addEventListener('DOMContentLoaded', () => loadTasks(inbox))



