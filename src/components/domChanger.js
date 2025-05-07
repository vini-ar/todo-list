export function toggleElementVisibility(el) {
    el.classList.toggle("hide")
}

export function clearForm() {
    const inputName = document.querySelector("#task-name-input")
    const inputDescription = document.querySelector("#task-description-input")
    
    inputName.value = ""
    inputDescription.value = ""
}

function removeContainer(el) {
} 