import '../styles/styles.css'
import { getColors, getUserProjecstLength, getUserProjectsList } from '../components/projectManager'
import { elementFactory } from '../components/elementFactory'


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

function handleEventListenerContentAddProjectButton() {
    const projectButton = document.querySelector(".project__create-button")
    projectButton.onclick = () => {
        displayAddProjectForm()
        renderColorOptions()
        renderParentProjectOptions()
    }

}

function renderColorOptions() {
    const projectColorSelect = document.querySelector("#projectColorSelect")
    const colors = getColors()
    colors.forEach((color) => {
        const colorOption = elementFactory(
            "option",
            color,
            {
                value: color
            }
        )
        projectColorSelect.append(colorOption)
    })

}

function renderParentProjectOptions() {
    const projectParentSelect = document.querySelector("#projectParentSelect")
    const userProjects = getUserProjectsList()
    const userProjectsLength = getUserProjecstLength()

    if (userProjectsLength !== 0) {
        userProjects.forEach((project) => {
            const projectOption = elementFactory(
                "option",
                project,
                {
                    value: project
                }
            )
            projectParentSelect.append(projectOption)
        })
    }

    const projectParentDefaultOption = elementFactory(
        "option",
        "No parent",
        {
            value: "No parent",
            selected: "selected"
        }
    )

    projectParentSelect.append(projectParentDefaultOption)
    
}

//Refound curso feel tennis
//Atualizar Task Obj
    //Data => mantem (?)
    //Adicionar 
        //Hora
        //Tags
          //array de tags

//create task page Template

//Create project page template
    //Inbox se encaixa

//Create today page


//Atualizar TaskFormFactory
    //Transformar Data Input em button
    //Adicionar EventListener
        //Abrir Container
        //Opcao de Hoje + Amanha + Final de Semana(sabado) + proxima semana
        //Sem Data
        //calendario
        //Opcao de Hora


function handleFormSubmitClick() {
    //prevent reload page
    //get submit button
    //get form data
    //create project Oject
    //add project to userProjects array
    //remove container
    //open project page
}

function handleFormCancelCLick() {
    //get cancel button
    //remove container
}


function displayAddProjectForm() {
    const formContainer = document.querySelector(".formContainer")
    formContainer.innerHTML = `
    <form id="newProjectForm" action="/submit" method="POST">
        <label for="projectName">
            <input type="text" name="projectName" id="projectNameInput">
        </label>
        <select id= "projectColorSelect" name="projectColor">
        </select>
        <select name="projectParent" id="projectParentSelect"></select>
    </form>
    <div class="form-controlls">
        <button class="cancelButton">Cancel</button>
        <button class="submitButton"type='submit' form="newProjectForm">Submit</button>
    </div>
                
    `

}


document.addEventListener("DOMContentLoaded", () => {
    displaySidebar()
    displayProjectCounter()
    handleAddTaskSideBarButtonClick()
    handleEventListenerContentAddProjectButton()
})
