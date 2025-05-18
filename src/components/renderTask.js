import { dateManager } from "./dateManager";
import { elementFactory } from "./elementFactory";

export function renderTask(Task) {
  let monthDay = "";
  if (Task.deadline) {
    monthDay = dateManager.formatDateWithMonthDayFormat(Task.deadline);
  }

  const divContainer = elementFactory("div", "", {
    class: "task-item",
    "data-task-id": Task.id,
  });

  const divCheckboxWrapper = elementFactory("div", "", {
    class: "task-item__checkbox-wrapper",
  });

  const checkbox = elementFactory("input", "", {
    class: "task-item__checkbox-input",
    type: "checkbox",
  });

  const divTaskWrapper = elementFactory("div", "", {
    class: "task-item__info",
  });

  const spanTaskName = elementFactory("span", Task.name, {
    class: "task-item__name",
  });

  const spanTaskDescription = elementFactory("span", Task.description, {
    class: "task-item__description",
  });

  const spanTaskDate = elementFactory("span", monthDay, {
    class: "task-item__date",
    "data-value": Task.deadline,
  });

  divCheckboxWrapper.append(checkbox);
  divTaskWrapper.append(spanTaskName, spanTaskDescription, spanTaskDate);

  divContainer.append(divCheckboxWrapper, divTaskWrapper);
  divContainer.dataset.taskId = Task.id;

  return divContainer;
}
