import { elementFactory } from './elementFactory';


export function renderTask(Task) {
   const taskList = document.querySelector(".task-list")
    
    const divContainer = elementFactory(
        "div", 
        "", 
        { 
            class: "task-list__item" 
        }
    );
    
    const divCheckboxWrapper = elementFactory(
        "div", 
        "", 
        { 
            class: "task-list__checkbox-wrapper" 
        }
    );

    const checkbox = elementFactory(
        "input", 
        "", 
        { 
            class: "task-list__checkbox-input", 
            type: "checkbox"
        } 
    );

    const divTaskWrapper = elementFactory(
        "div",
        "",
        { 
            class: "task-list__info" 
        }
    );

    const spanTaskName = elementFactory(
        "span",
        Task.name,
        { 
            class: "task-list__name" 
        }
    );

    const spanTaskDescription = elementFactory(
        "span",
        Task.description,
        { 
            class: "task-list__description" 
        }  
    );

    const inputTaskDate = elementFactory(
        "input",
        "",
        { 
            class: "task-list_-date", type: "date", value: Task.deadline 
        }

    );

    divCheckboxWrapper.append(checkbox)
    divTaskWrapper.append(spanTaskName, spanTaskDescription, inputTaskDate)

    divContainer.append(divCheckboxWrapper, divTaskWrapper)

    return divContainer
}