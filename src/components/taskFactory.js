export function taskFactory(name="", description="", deadline="",  project="") {
    return {
        id: "id" + Math.random().toString(16).slice(2),
        projectId: project,
        name: name,
        deadline: deadline,
        description: description,
        project: project
    }

}