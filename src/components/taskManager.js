export const tasks = [];

let userTasksDatabaseKey = localStorage.getItem("userTasks")
export let userTasksDatabase = JSON.parse(userTasksDatabaseKey)

export const taskManager = {
    getTasks() {
        return [...tasks]
    },
    getTaskLength() {
        return tasks.length
    },
    getTaskById(targetId) {
        return tasks.find(task => task.id === targetId)
    },
    addTask(newTask) {
        tasks.push(newTask)
    },
    removeTaskById(targetId) {
        tasks = tasks.filter(task => task.id !== targetId)
    },
    displayTaskLength() {
        console.log(this.getTaskLength())
    }
}