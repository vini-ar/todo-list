import { elementFactory } from "./elementFactory"

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
    
    labelName.append(inputName)
    labelDescription.append(inputDescription)
    labelDate.append(inputDate)

    labelSelect.append(selectProject)

    form.append(labelName, labelDescription, labelDate, labelSelect)

    container.append(form)

    parentElement.append(container)

}