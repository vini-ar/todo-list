import { sidebarControlls } from '../components/sideBarControlls'
import '../styles/styles.css'



const createProjectButton = document.querySelector('.sidebar__projects--create-project-button')
createProjectButton.style.backgroundColor = '#FFEFE5'



document.addEventListener('DOMContentLoaded', () => {
    sidebarControlls()
})
