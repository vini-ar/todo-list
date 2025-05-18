export function isValidForm() {
  const inputName = document.querySelector("#task-name-input");

  const name = inputName.value.trim();

  if (!name) {
    console.error("Name Field Empty");
    return false;
  }

  return true;
}
