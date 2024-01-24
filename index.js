const input = document.querySelector("#inputField");
const btn = document.querySelector("#submitTodo");
const ul = document.querySelector("ul");

taskDone = (e) => {
    const selectedLi = e.target.parentElement;
    const todoText = selectedLi.querySelector('p');
    todoText.classList.toggle("taskDone");
}

editTodo = (e) => {
    const selectedLi = e.target.parentElement.parentElement;
    const todoText = selectedLi.querySelector('p');
    const newTodoText = prompt("Edit todo task", todoText.innerText);
    if (newTodoText !== null)
        if (newTodoText !== "")
            todoText.innerText = newTodoText;
}

deleteTodo = (e) => {
    const selectedLi = e.target.parentElement.parentElement;
    const todoText = selectedLi.querySelector('p');
    if (confirm(`You want to delete this todo?\n ${todoText.innerText}`)) {
        selectedLi.remove();
    }
}

btn.addEventListener("click", () => {
    const newLi = document.createElement("li");

    const ckBox = document.createElement("input");
    ckBox.setAttribute("type", "checkbox");
    ckBox.classList.add("taskDoneCkBox");

    const edit = document.createElement("button");
    edit.classList.add("editBtn");
    edit.innerText = "Edit";

    const dlt = document.createElement("button");
    dlt.classList.add("deleteBtn");
    dlt.innerText = 'Delete';

    const task = document.createElement("p");
    task.innerText = input.value;

    const action = document.createElement("div");
    action.classList.add("actions")
    action.appendChild(edit);
    action.appendChild(dlt);

    newLi.appendChild(ckBox);
    newLi.appendChild(task);
    newLi.appendChild(action);

    ul.appendChild(newLi);

    input.value = '';
});

ul.addEventListener("click", e => {
    const selectedUl = e.target.parentElement;
    const clickedCkBox = selectedUl.querySelector(".taskDoneCkBox");
    const clickedEditBtn = selectedUl.querySelector(".editBtn")
    const clickedDeleteBtn = selectedUl.querySelector(".deleteBtn")

    if (e.target === clickedCkBox) {
        taskDone(e);
    }
    if (e.target === clickedEditBtn) {
        editTodo(e);
    }
    if (e.target === clickedDeleteBtn) {
        deleteTodo(e);
    }
})