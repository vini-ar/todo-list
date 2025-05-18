import '../styles/styles.css'
import { addProject, getColors, getUserProjecstLength, getUserProjectsList, projectManager, projectObjectFactory } from '../components/projectManager'
import { elementFactory } from '../components/elementFactory'
import { renderAddProjectForm, renderProjectForm, renderSidebarAddTaskFormContainer, renderTaskPage } from '../components/renderElements'
import { taskManager } from '../components/taskManager'
import { handleProjectFormCancelButtonClick, handleProjectFormSubmitButtonClick } from '../components/projectFormHandleActions'
import { renderTask } from '../components/renderTask'


export function displayProjectCounter() {
    const projectSpanCount = document.querySelector(".project__counter-span")
    if (!projectSpanCount) {
        return
    }   
    let counter = projectManager.getProjectLength()

    if (counter === 0 || counter === 1) {
        projectSpanCount.textContent = counter + " project"
    }
    else {
        projectSpanCount.textContent = counter + " projects"
    }
}

export const manageProjectUI = {
    start() {
        displayProjectCounter()
        this.loadUserProjects()
        this.getDOM()
        this.attachProjectPageEventListener()
    },
    getDOM() {
        this.projectList = document.querySelector(".project__list")
        this.sidebarFormContainer = document.querySelector("#projectSidebarFormContainer")
        this.contentAddProjectButton = document.querySelector("#contentCreateProjectButton")
        this.sidebarAddProjectButton = document.querySelector("#sidebarCreateProjectButton")
        this.sidebarAddTaskButton = document.querySelector(".sidebar__control--add-task")
        this.sidebarProjects = document.querySelector(".sidebar__projects")
        this.content = document.querySelector("#content")
    },
    loadUserProjects() {
        //create local storage for projects
        //get local storage projects
        //getporjectList Containaer
        //list local projects
        //attach eventListener for Each project attachEventListnerProjectItem()
    },
    attachProjectPageEventListener() {
        this.contentAddProjectButton?.addEventListener("click", () => {
            if (!document?.querySelector("#newProjectForm")) {
                const createProjectForm = renderAddProjectForm()
                this.projectList.append(createProjectForm)
                this.attachCreateFormEventListener(createProjectForm)
            }  
        })
        this.sidebarAddProjectButton?.addEventListener("click", () => {
            const createProjectForm = renderAddProjectForm()
            this.sidebarProjects.append(createProjectForm)
            this.attachCreateFormEventListener(createProjectForm)
        })
        this.sidebarAddTaskButton?.addEventListener("click", (e) => renderSidebarAddTaskFormContainer(e.target))
    },
    attachCreateFormEventListener(createProjectForm) {
        this.cancelProjectFormButton = createProjectForm.querySelector(".projectFormCancelButton")
        this.submitProjectFormButton = createProjectForm.querySelector(".projectFormSubmitButton")
        this.cancelProjectFormButton?.addEventListener("click", () => {
            handleProjectFormCancelButtonClick(createProjectForm)
        })
        this.submitProjectFormButton?.addEventListener("click", (e) => {
            e.preventDefault()
            const projectItem = handleProjectFormSubmitButtonClick(createProjectForm)  
            this.attachProjectItemEventListener(projectItem)
        })
    },
    attachProjectItemEventListener(projectItem) {
        projectItem?.addEventListener("click", () => {
            const targetProjectId = projectItem.getAttribute("data-id")
            this.content.innerHTML = ""
            this.renderProjectPage(targetProjectId)
        })
    },
    renderProjectPage(targetProjectId) {
        const Project = projectManager.getProjectById(targetProjectId)
        if (!Project) {
            return console.error("Cannot Find Project")
        }
        const header = elementFactory("h1", Project.name, {class: "project-header"})
        const taskList = elementFactory("div", "", {class: "task-list"})
        this.content.append(header, taskList)

        taskManager.getTasks().forEach((task) => {
            if (task.project === Project.id) {
                const taskItemDiv = renderTask(task)
                taskList.append(taskItemDiv)
                taskItemDiv.addEventListener("click", () => {
                    renderTaskPage(taskItemDiv)
                })
            }
        })
    }
}

manageProjectUI.start()
