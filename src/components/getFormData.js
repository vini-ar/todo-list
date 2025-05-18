import { taskFactory } from "./taskFactory";

export function getFormData(formContainer) {
  const taskNameInput = formContainer.querySelector("#task-name-input");
  const taskDescriptionInput = formContainer.querySelector(
    "#task-description-input",
  );
  const taskDateSpan = formContainer?.querySelector("#task-date-span");
  const taskPrioritySpan = formContainer?.querySelector("#task-priority-span");
  const taskProjectSelect = formContainer.querySelector(
    "#task-add__project-select",
  );

  const taskName = taskNameInput.value;
  const taskDescription = taskDescriptionInput.value;
  const taskDate = taskDateSpan.dataset.value;
  const taskPriority = taskPrioritySpan.textContent;
  const taskProject = taskProjectSelect.value;

  const taskHour = "";

  return taskFactory(
    taskName,
    taskDescription,
    taskDate,
    taskHour,
    taskProject,
    taskPriority,
  );
}
