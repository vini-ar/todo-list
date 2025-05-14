export function taskFactory(name="", description="", deadline="", hour="",  project="", priority="", done = false) {
    return {
        id: "id" + Math.random().toString(16).slice(2),
        description: description,
        name: name,
        deadline: deadline,
        hour: hour,
        project: project,
        priority: priority,
        done,
        updateProject(newName) {
            this.project = newName
        },
        markDone() {
            this.done = true
        }
    }

}