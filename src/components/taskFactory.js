export function taskFactory(name="", description="", deadline={},  project="", priority="") {
    return {
        id: "id" + Math.random().toString(16).slice(2),
        projectId: project,
        name: name,
        date: deadline.date,
        hour: deadline.hour,
        description: description,
        project: project,
        priority: priority
    }

}