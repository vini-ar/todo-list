import {
  handleProjectFormCancelButtonClick,
  handleProjectFormSubmitButtonClick,
} from "./projectFormHandleActions";

export function attachProjectFormActionListeners(createProjectForm) {
  const cancelProjectFormButton = createProjectForm.querySelector(
    ".projectFormCancelButton",
  );
  const submitProjectFormButton = createProjectForm.querySelector(
    ".projectFormSubmitButton",
  );

  cancelProjectFormButton?.addEventListener("click", () =>
    handleProjectFormCancelButtonClick(createProjectForm),
  );
  submitProjectFormButton?.addEventListener("click", () =>
    handleProjectFormSubmitButtonClick(createProjectForm),
  );
}
