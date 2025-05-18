import { displayProjectCounter } from "../pages/projects";
import { projectManager } from "./projectManager";
import { renderProjectItem } from "./renderElements";

export function handleProjectFormCancelButtonClick(createProjectForm) {
  createProjectForm.remove();
}

export function handleProjectFormSubmitButtonClick(createProjectForm) {
  const projectNameInput = createProjectForm.querySelector("#projectNameInput");
  const projectColorSelect = createProjectForm.querySelector(
    "#projectColorSelect",
  );
  const projectParentSelect = createProjectForm.querySelector(
    "#projectParentSelect",
  );
  const projectList = document?.querySelector(".project__list");

  const projectName = projectNameInput.value;
  const projectParent = projectParentSelect.value;
  const projectColor = projectColorSelect.value;

  //isValidForm()
  if (!projectName) {
    window.alert("Cannot create project without name");
    return;
  }
  //data manage
  const Project = projectManager.createProject(
    projectName,
    projectColor,
    projectParent,
  );
  projectManager.addProject(Project);

  createProjectForm.remove();
  displayProjectCounter();

  if (!projectList) return;

  const projectItem = renderProjectItem(Project);
  projectList.append(projectItem);
  return projectItem;
}
