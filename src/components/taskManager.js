let userTasksDatabaseKey = localStorage.getItem("userTasks")
export let userTasksDatabase = JSON.parse(userTasksDatabaseKey)

export const taskManager = {
    tasks: [],

    getTasks() {
        return [...this.tasks]
    },
    getTaskLength() {
        return this.tasks.length
    },
    getTaskById(targetId) {
        const findTask = this.tasks.find(task => task.id === targetId)
        if (!findTask) {
            console.error("Task isnt found")
        }
        return findTask
    },
    addTask(newTask) {
        this.tasks.push(newTask)
    },
    removeTaskById(targetId) {
        this.tasks = this.getTasks().filter(task => task.id !== targetId)
    },
    displayTaskLength() {
        console.log(this.getTaskLength())
    },
    updateTaskName(targetId, newName) {
        if (!newName) {
            return console.error("You cannot create task without name")
        }
        const Task = this.getTaskById(targetId)
        this.removeTaskById(targetId)

        Task.name = newName;
        this.addTask(Task)
    },
    updateTaskDescription(targetId, newDescription) {
        if (!newDescription) {
            newDescription = ""
        }
        const targetTask = this.getTaskById(targetId)
        this.tasks.forEach((task) => {
            if (task === targetTask) {
                task.description = newDescription
            }
        })
    },
    getTaskName(targetId) {
        const targetTask = this.getTaskById(targetId)
        if (!targetTask) {
            console.error("Task doesnt exist")
        } 
        return targetTask.name
    },
    getTaskDescription(targetId) {
        const targetTask = this.getTaskById(targetId)
        if (!targetTask) {
            console.error("Task doesnt exit")
        }
        return targetTask.description
    }
}