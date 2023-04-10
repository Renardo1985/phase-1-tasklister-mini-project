document.addEventListener("DOMContentLoaded", () => {
  let form = document.querySelector("form")
  form.addEventListener('submit',(e) => {
    e.preventDefault()
    listHandler()
    form.reset()
  })
});

function listHandler(){

  const newTask = document.getElementById("new-task-description");
  let newLi = document.createElement('li')
  let button = document.createElement('button')
  button.addEventListener('click',() => {newLi.remove()})
  button.textContent = "remove"
  newLi.textContent = newTask.value
  newLi.appendChild(button)
  document.getElementById('tasks').appendChild(newLi)

}