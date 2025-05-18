let userProjects = []
let colors = ["red", "yellow", "black"]

export function projectObjectFactory(name="", color="", parentProject="") {
    if (!name) {
        window.alert("You cannot create an project Without Name")
        return 
    }
    if (!color.includes(color)) {
        window.alert("Invalid Color")
        return 
    }
    if (!userProjects.includes(parentProject)) {
        parentProject = "No Parent"
    }

    return {
        id: "id" + Math.random().toString(16).slice(2),
        name: name,
        color: color,
        parentProject: parentProject,
    }
}

export const projectManager = {
    userProjects: [],
    createProject(projectName = "", projectColor = "", projectParent = "") {
        return projectObjectFactory(projectName, projectColor, projectParent)
    },
    displayProjectList() {
        return [...this.userProjects]
    },
    getProjectList() {
        return this.userProjects
    }, 
    getProjectLength() {
        return [...this.userProjects].length
    },
    getProjectById(targetId) {
        const Project = this.getProjectList().find((project) => project.id === targetId)
        return Project
    },
    addProject(newProject) {
        this.getProjectList().push(newProject)
    },
}
export function addProject(Project) {
    if (typeof Project !== 'object') {
        console.error("You must pass an object")
        return
    }
    userProjects.push(Project)
}

export function getColors() {
    return [...colors]
}

export function getUserProjectsList() {
    return [...userProjects]
}

export function getUserProjecstLength() {
    return [...userProjects].length
}