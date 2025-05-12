import '../styles/styles.css'
import { addProject, getColors, getUserProjecstLength, getUserProjectsList, projectObjectFactory } from '../components/projectManager'
import { elementFactory } from '../components/elementFactory'
import { renderProjectForm, renderSidebar } from '../components/renderElements'
import { add } from 'date-fns'
import { attachProjectPageEventListener } from '../components/projectAttachEventListener'


function displayProjectCounter() {
    const projectSpanCount = document.querySelector(".project__counter-span")
    const counter = getUserProjecstLength()

    if (counter === 0 || counter === 1) {
        projectSpanCount.textContent = counter + " project"
    }
    else {
        projectSpanCount.textContent = counter = " projects"
    }
}

renderSidebar()
displayProjectCounter()
attachProjectPageEventListener()


