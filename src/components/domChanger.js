export function clearForm() {
    const inputName = document.querySelector("#task-name-input")
    const inputDescription = document.querySelector("#task-description-input")
    const spanDate = document.querySelector("#task-date-span")
    const spanPriority = document.querySelector("#task-priority-span")

    inputName.value = ""
    inputDescription.value = ""
    spanDate.textContent = ""
    spanDate.dataset.date = ""
    spanPriority.textContent = ""
}

export function removeElementById(id) {
    document.querySelector(`#${id}`).remove()
} 

export function toggleButtonVisibility(button) {
    if (button.disabled) {
        button.disabled = false;
        button.style.display = "flex"
    } else {
        button.disabled = true;
        button.style.display = "none"
    }
}

export function placeElementAt(el, positionX, positionY) {
    const content = document.querySelector("#content")
    content.append(el)
    
    el.style.position = "absolute";
    el.style.left = `${positionX}px`
    el.style.top = `${positionY}px`
}
