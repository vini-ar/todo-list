//Create TodoList
//Each variable holds an project name list
//

class TodoList {
    #projectList

    constructor(projectList = []) {
        this.#projectList = projectList
    }

    get projectList() {
        return this.#projectList;
    }
    addTask(projectName) {
        if (!this.projectList.includes(projectName)) {
            throw new Error("Project Doesnt Exist")
        }
        this.projectList.forEach((project) => {
            if (project === "projectName") {
                project.push()
            }
        })        
    }

} 



export class Todo {
    static idCounter = 0;

    #name;
    #status;
    #deadline;
    #id;
    #project

    constructor(name, status = "pending", project = "Default", deadline = "") {
        this.#deadline = deadline
        this.#id = Todo.idCounter++;
        this.#name = name
        this.#status = status
        this.#project = project
    }

    get deadline() {
        return this.#deadline;
    }

    get id() {
        return this.#id;
    }

    get name() {
        return this.#name.trim()
    }

    get status() {
        return this.#status;
    }

    set status(newStatus) {
        if (!["pending", "completed", "archived"].includes(newStatus)) {
            throw new Error("Invalid Status")
        }
        this.#status = newStatus;
    }

    get project() {
        return this.#project;
    }

    set project(newProject) {
        if (!newProject.trim()) {
            throw new Error("Project Name Cannot Be Empty");
        }
        this.#project = newProject.trim();
    }
}

