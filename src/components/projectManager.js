let userProjects = []
let colors = ["red", "yellow", "black"]

export function userProjectObjectFactory(name="", color="", parentProject="") {
    if (!name) {
        return alert("You cannot create an project Without Name")
    }
    if (!color.includes(color)) {
         return alert("Invalid Color")
    }
    if (!userProjects.includes(parentProject)) {
        parentProject = "No Parent"
    }

    return {
        name: name,
        color: color,
        parentProject: parentProject,
    }
}

export function addProject(Project) {
    if (typeof Project !== 'object') {
        return console.error("You must pass an object")
    }
    userProjects.push(Project)
}

export function getColors() {
    return colors
}

export function getUserProjectsList() {
    return userProjects
}

export function getUserProjecstLength() {
    return userProjects.length
}