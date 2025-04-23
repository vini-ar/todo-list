import { elementFactory } from "./elementFactory"
import { getFormData } from "./getFormData";
import { renderTask } from "./renderTask";

export function renderAddTaskContainer() {
    const parentElement = document.querySelector(".task-add")

    const container = elementFactory(
        "div",
        "",
        { class: "task-add__form-container" }
    );
    
    const form = elementFactory(
        "form",
        "",
        { 
            class: "task-add__form", 
            id:"task-add-form" 
        }
    );

    const labelName = elementFactory(
        "label",
        "",
        { 
            for: "task-name-input" 
        }
    );

    const inputName = elementFactory(
        "input",
        "",
        { 
            type: "text", 
            name: "taskName",
            id: "task-name-input",
            class: "task-add__input task-add__input--name",
            placeholder: "Task Name"
        }
    ); 

    const labelDescription = elementFactory(
        "label",
        "",
        { 
            for: "task-description-input" 
        }
    );

    const inputDescription = elementFactory(
        "input",
        "",
        { 
            type: "text", 
            name: "taskDescription",
            id: "task-description-input",
            class: "task-add__input task-add__input--description",
            /* Writer function to select from a basket random task Description */
            placeholder: "Enter Your Task Description"
        }
    ); 

    const labelDate = elementFactory(
        "label",
        "",
        {
            for: "task-date-input"
        }
    );

    const inputDate = elementFactory(
        "input",
        "",
        {
            type: "date",
            name: "taskDate",
            id: "task-date-input",
            class: "task-add__input task-add__input-date",
        }

    );
    const labelSelect = elementFactory(
        "label",
        "",
        {
            for: "task-add__project-select"
        }
    );

    const selectProject = elementFactory(
        "select",
        "",
        {
            id: "task-add__project-select",
            class: "task-add__select",
            name: "taskProject"
        }
    )

    const optionProject = elementFactory(
        "option",
        "Inbox",
        {
             value: "inbox",
             selected: "selected"
        }
    )

    const formControlls = elementFactory(
        "div",
        "",
        {
            class: "task-add__controlls"
        }
    )

    const buttonCancel = elementFactory(
        "button",
        "Cancel",
        {
            class: "tas-add__cancel",
            type: "button"
        }
    )

    buttonCancel.addEventListener("click", () => {
        container.remove()
        const button = document.querySelector(".task-add__button-container")
        button.classList.remove("hide")
    })

    const buttonSubmit = elementFactory(
        "button",
        "Add Task",
        {
            class: "task-add__submit",
            type: "submit"
        }
    )

    buttonSubmit.addEventListener("click", () => {
        const Task = getFormData()
        if (!Task.taskName) {
            return alert("You Cannot Create Task Without Name")
        }
        renderTask(Task)
    })

    
    labelName.append(inputName)
    labelDescription.append(inputDescription)
    labelDate.append(inputDate)

    selectProject.append(optionProject)
    labelSelect.append(selectProject)
    

    form.append(labelName, labelDescription, labelDate, labelSelect)

    formControlls.append(buttonCancel, buttonSubmit)


    container.append(form, formControlls)

    parentElement.append(container)

}