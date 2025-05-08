export function isValidForm() {
    const inputName = document.querySelector("#task-name-input")
    const inputDescription = document.querySelector("#task-description-input")

    const name = inputName.value.trim()
    const description = inputDescription.value.trim()

    if (!name) {
        console.error("Name Field Empty")
        return false
    }

    return true
}