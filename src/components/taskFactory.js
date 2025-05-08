export function taskFactory(name="", description="", deadline="", hour="",  project="", priority="") {
    return {
        id: "id" + Math.random().toString(16).slice(2),
        projectId: project,
        name: name,
        deadline: deadline,
        hour: hour,
        description: description,
        project: project,
        priority: priority
    }

}