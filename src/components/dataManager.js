export let allTasks = [];

let userTasksDatabaseKey = localStorage.getItem("userTasks")
export let userTasksDatabase = JSON.parse(userTasksDatabaseKey)


export function addNewTask(Task) {
    if (typeof Task !== "object") {
        return console.error("You must pass an object")
    }

    allTasks.push(Task)
}

export function showAllTasksArray() {
    return allTasks
}
