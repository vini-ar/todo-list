export function taskFactory(name="", description="", deadline="",  project="") {
    return {
        name: name,
        deadline: deadline,
        description: description,
        project: project
    }

}