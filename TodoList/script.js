document.addEventListener("DOMContentLoaded", function () {
    let form = document.getElementById("form");
    var newTodoField = document.getElementById("new-todo-field");
    var addButton = document.getElementById("add-button");
    var todoList = document.getElementById("todo-list");
    var errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });

    addButton.addEventListener("click", function () {
        var newTodoFieldValue = newTodoField.value;

        if (newTodoFieldValue.trim().length !== 0) {
            errorMessage.style.display = "none";
            var todoItem = document.createElement("li");
            todoItem.classList.add("margin-vertical");
            todoItem.innerHTML = "<span class='margin-horizontal'></span><button type='button'>Удалить</button>";
            todoItem.firstChild.textContent = newTodoFieldValue;

            todoItem.lastChild.addEventListener("click", function () {
                todoItem.remove();
            })

            todoList.appendChild(todoItem);
            newTodoField.value = "";
        } else {
            errorMessage.style.display = "block";
        }
    });
});