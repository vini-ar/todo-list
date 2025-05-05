export let userProjects = []


export function userProjectObjectFactory(name="", color="", parentProject="") {
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



export function getUserProjects() {
    return userProjects
}

export function getUserProjecstLength() {
    return userProjects.length
}