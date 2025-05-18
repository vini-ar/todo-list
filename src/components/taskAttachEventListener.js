import { renderTaskPage } from "./renderElements.js";
import {
  handleSetDateButtonClick,
  handleSetPriorityButtonClick,
  handleTaskFormCancelButtonClick,
  handleTaskFormDateButtonClick,
  handleTaskFormPriorityButtonClick,
  handleTaskFormSubmitButtonClick,
} from "./taskFormHandleActions.js";
import { handleTaskItemCheckboxClick } from "./taskItemHandleActions.js";

export function attachTaskFormActionListeners(formContainer) {
  const cancelButton = formContainer.querySelector(".task-add__cancel");
  const submitButton = formContainer.querySelector(".task-add__submit");
  const dateButton = formContainer.querySelector("#displayDateContainerButton");
  const priorityButton = formContainer.querySelector("#priorityButton");

  cancelButton?.addEventListener("click", () =>
    handleTaskFormCancelButtonClick(formContainer),
  );
  submitButton?.addEventListener("click", () =>
    handleTaskFormSubmitButtonClick(formContainer),
  );
  dateButton?.addEventListener("click", (e) =>
    handleTaskFormDateButtonClick(e),
  );
  priorityButton?.addEventListener("click", (e) =>
    handleTaskFormPriorityButtonClick(e),
  );
}

export function attachSetDateButtonsActionListeners() {
  const setDateButtonNodeList = document.querySelectorAll(".setDateButton");

  for (let i = 0; i < 4; i++) {
    const button = setDateButtonNodeList[i];
    const dateValue = button.getAttribute("data-value");
    button.addEventListener("click", (e) =>
      handleSetDateButtonClick(e, dateValue),
    );
  }
}

export function attachSetPriorityActionListeners(priorityContainer) {
  const allButtons = priorityContainer.querySelectorAll(".priorityButton");
  for (let i = 0; i < 4; i++) {
    const button = allButtons[i];
    button.addEventListener("click", () =>
      handleSetPriorityButtonClick(button),
    );
  }
}

export function attachTaskItemActionListeners(taskItemDiv) {
  const taskItemInfoDiv = taskItemDiv.querySelector(".task-item__info");
  const taskItemcheckbox = taskItemDiv.querySelector(
    ".task-item__checkbox-input",
  );

  taskItemInfoDiv?.addEventListener("click", (e) => renderTaskPage(e.target));
  taskItemcheckbox?.addEventListener("click", (e) =>
    handleTaskItemCheckboxClick(e.target),
  );
}
