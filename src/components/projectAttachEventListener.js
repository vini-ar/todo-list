import { handleProjectFormCancelButtonClick, handleProjectFormSubmitButtonClick } from "./projectFormHandleActions"
import { renderAddProjectForm, renderSidebarAddTaskFormContainer } from "./renderElements"



export function attachProjectFormActionListeners(formContainer) {
    const cancelProjectFormButton = document.querySelector(".projectFormCancelButton")
    const submitProjectFormButton = document.querySelector(".projectFormSubmitButton")

    cancelProjectFormButton?.addEventListener("click", () => handleProjectFormCancelButtonClick(formContainer))
    submitProjectFormButton?.addEventListener("click", () => handleProjectFormSubmitButtonClick(formContainer))

}

export function attachProjectPageEventListener() {
    const sidebarFormContainer = document.querySelector("#projectSidebarFormContainer")
    const contentFormContainer = document.querySelector("#projectContentFormContainer")
    const contentAddProjectButton = document.querySelector("#contentCreateProjectButton")
    const sidebarAddProjectButton = document.querySelector("#sidebarCreateProjectButton")
    const sidebarAddTaskButton = document.querySelector(".sidebar__control--add-task")

    contentAddProjectButton.addEventListener("click", () => renderAddProjectForm(contentFormContainer))
    sidebarAddProjectButton.addEventListener("click", () => renderAddProjectForm(sidebarFormContainer))
    sidebarAddTaskButton.addEventListener("click", () => renderSidebarAddTaskFormContainer())

}


