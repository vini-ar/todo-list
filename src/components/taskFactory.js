import { dateManager } from "./dateManager"

export function taskFactory(name="", description="", deadline="", hour="",  project="", priority="p4", done = false) {
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
        },
        updatePriority(newPriority) {
            this.priority = newPriority
        },
        getMonthDay() {
            if (!deadline) {
                return
            }
            return dateManager.formatDateWithMonthDayFormat(this.deadline)
        },
    }

}