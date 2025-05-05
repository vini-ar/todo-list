import { sidebarControlls } from '../components/sideBarControlls'
import '../styles/styles.css'



const createProjectButton = document.querySelector('.sidebar__projects--create-project-button')
const taskFormDiv = document.querySelector(".sidebar__control--add-task")
createProjectButton.style.backgroundColor = '#FFEFE5'


sidebarControlls()