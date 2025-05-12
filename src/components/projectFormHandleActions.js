import { elementFactory } from "./elementFactory";
import { addProject, projectObjectFactory } from "./projectManager";
import { renderProjectItem } from "./renderElements";

export function handleProjectFormCancelButtonClick(formContainer) {
    formContainer.innerHTML = '';
    formContainer.classList.toggle("hide")
}

export function handleProjectFormSubmitButtonClick(formContainer) {
    const projectNameInput = formContainer.querySelector("#projectNameInput")
    const projectColorSelect = formContainer.querySelector("#projectColorSelect")
    const projectParentSelect = formContainer.querySelector("#projectParentSelect")
    const projectList = document.querySelector('.project__list')

    const projectName = projectNameInput.value
    const projectParent = projectParentSelect.value
    const projectColor = projectColorSelect.value

    //isValidForm()
    if (!projectName) {
        return alert("Cannot create preojct without name")
    }
    
    //data manage
    const Project = projectObjectFactory(projectName, projectColor, projectParent)
    addProject(Project)
    formContainer.innerHTML = '';
    formContainer.classList.toggle("hide")

    if (!projectList) {
        return formContainer.remove()
    }
    const projectItem = renderProjectItem(Project)
    projectList.append(projectItem)
}