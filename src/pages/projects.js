import { displaySidebar } from '../components/displaySidebar'
import { handleAddTaskSideBarButtonClick } from '../components/handleAddTaskSideBarButtonClick'
import '../styles/styles.css'
import { getUserProjecstLength } from '../components/projectManager'

function displayProjectCounter() {
    const projectSpanCount = document.querySelector(".project__counter-span")
    const counter = getUserProjecstLength()

    if (counter === 0) {
        projectSpanCount.textContent = counter + " project"
    }
    else {
        projectSpanCount.textContent = counter = " projects"
    }
    

}

function handleEventListenerContentAddProjectButton() {
    const projectButton = document.querySelector(".project__create-button")
    projectButton.onclick = () => {
        displayAddProjectForm()
        //Create Form on projects.html
        //Attach form on innerHTML here
    }

}

function handleFormSubmitClick() {
    //prevent reload page
    //get submit button
    //get form data
    //create project Oject
    //add project to userProjects array
    //remove container
}

function handleFormCancelCLick() {
    //get cancel button
    //remove container
}


function displayAddProjectForm() {

}


document.addEventListener("DOMContentLoaded", () => {
    displaySidebar()
    displayProjectCounter()
    handleAddTaskSideBarButtonClick()
})
