document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    createToDo(e.target.new_task_description.value);
    form.reset();
  });
});

function createToDo(todo) {
  let li = document.createElement("li");
  li.textContent = todo;
  //console.log(li)
  document.getElementById("tasks").appendChild(li);
}
