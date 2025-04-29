export function clearForm() {
    const inputName = document.querySelector("#task-name-input")
    const inputDescription = document.querySelector("#task-description-input")
    const inputDate = document.querySelector('#task-date-input')
    
    inputName.value = ""
    inputDescription.value = ""
    inputDate.value = ""
}