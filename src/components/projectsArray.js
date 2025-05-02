export function factoryProject(projectName) {
    return {
        name: projectName,
        tasks: []
    }
}

export function addTaskProject(taskId, projectArray) {
    if (!Array.isArray(projectArray)) {
        return console.error("Invalid argument, you must use array")
    }
    if (typeof taskId !== 'string') {
        return console.error("Invalid argument, you must use string")
    }

    projectArray.push(taskId)

}