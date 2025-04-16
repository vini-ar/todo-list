import './styles.css';
import { format, compareAsc, add } from 'date-fns'
import { createIcons, icons } from 'lucide';
import { projectFactory } from './projectFactory'
import { renderTask } from './renderTask';
import { taskFactory } from  './taskFactory' 
import { loadTasks } from './loadTasks';

createIcons({ icons });
let counter = 0;

const taskList = document.querySelector('.task-list')
const addTaskButton = document.querySelector('.add-task-btn')
addTaskButton.addEventListener('click', () => {
    const Task = taskFactory()
    const ul = renderTask(Task)
    taskList.append(ul)
})


let defaultProject = [
    taskFactory('0', 'Comer Cachorro', '2025-04-04'), 
    taskFactory('0', 'Comer Dog', '2025-04-04'), 
    taskFactory('0', 'Cavalgar no Animal Kingdom', '2025-04-04')
]

document.addEventListener('DOMContentLoaded', () => loadTasks(defaultProject))



