import { elementFactory } from './elementFactory';


export function renderTask(Task) {
   const taskList = document.querySelector(".task-list")
    
    const divContainer = elementFactory(
        "div", 
        "", 
        { 
            class: "task-item" 
        }
    );
    
    const divCheckboxWrapper = elementFactory(
        "div", 
        "", 
        { 
            class: "task-item__checkbox-wrapper" 
        }
    );

    const checkbox = elementFactory(
        "input", 
        "", 
        { 
            class: "task-item__checkbox-input", 
            type: "checkbox"
        } 
    );

    const divTaskWrapper = elementFactory(
        "div",
        "",
        { 
            class: "task-item__info" 
        }
    );

    const spanTaskName = elementFactory(
        "span",
        Task.name,
        { 
            class: "task-item__name" 
        }
    );

    const spanTaskDescription = elementFactory(
        "span",
        Task.description,
        { 
            class: "task-item__description" 
        }  
    );

    const spanTaskDate = elementFactory(
        "span",
        Task.deadline,
        { 
            class: "task-item__date"
        }

    );

    divCheckboxWrapper.append(checkbox)
    divTaskWrapper.append(spanTaskName, spanTaskDescription, spanTaskDate)

    divContainer.append(divCheckboxWrapper, divTaskWrapper)

    return divContainer
}