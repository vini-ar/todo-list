import { elementFactory } from "./elementFactory"
import { allProjects } from "../pages/inbox";

export function taskFormFactory() {
    const parentElement = document.querySelector(".task-add")

    const container = elementFactory(
        "div",
        "",
        { 
            class: "task-add__form-container",
            id: "task-add-form-container"
        }
    );
    
    const form = elementFactory(
        "form",
        "",
        { 
            class: "task-add__form", 
            id:"task-add-form" 
        }
    );

    const divWrapper = elementFactory(
        "div",
        "",
        {
            class: "divWrapperName"
        }
    )

    const spanDate = elementFactory(
        "div",
        "",
        {
            id: "date-span"
        }
    )

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

    const dateButton = elementFactory(
        "button",
        "Date",
        {
            id: "displayDateContainerButton",
            type: "button"
        }
    );

    const priorityButton = elementFactory(
        "button",
        "Priority",
        {
            id: "priorityButton",
            type: "button"
        }
    )

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

    const optionInbox = elementFactory(
        "option",
        "Inbox",
        {
            value: "inbox"
        }
    )

    // allProjects.forEach((project) =>
    //     selectProject.append(elementFactory(
    //         "option",
    //         project,
    //         {
    //             value: project
    //         }
    //     ))
    // )

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
            class: "task-add__cancel",
            type: "button"
        }
    )

    const buttonSubmit = elementFactory(
        "button",
        "Add Task",
        {
            class: "task-add__submit",
            type: "submit"
        }
    )
    

    labelName.append(inputName)
    divWrapper.append(spanDate, labelName)

    labelDescription.append(inputDescription)

    selectProject.append(optionInbox)

    labelSelect.append(selectProject)
    

    form.append(divWrapper, labelDescription, dateButton, priorityButton, labelSelect)

    formControlls.append(buttonCancel, buttonSubmit)


    container.append(form, formControlls)

    return container

}