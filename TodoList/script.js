document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("form");
    var newTodoField = document.getElementById("new-todo-field");
    var addButton = document.getElementById("add-button");
    var todoList = document.getElementById("todo-list");
    var errorMessage = document.getElementById("error-message");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
    });

    addButton.addEventListener("click", function () {
        var newTodoFieldValue = newTodoField.value.trim();

        if (newTodoFieldValue.length === 0) {
            errorMessage.style.display = "block";
            newTodoField.classList.add("invalid");
        } else {
            errorMessage.style.display = "none";
            newTodoField.classList.remove("invalid");
            var todoItem = document.createElement("li");
            todoItem.classList.add("margin-vertical");
            setViewMode();
            todoList.appendChild(todoItem);
            newTodoField.value = "";
        }

        function setViewMode() {
            todoItem.innerHTML = "<div class='todo-item-block'></div>" +
                "<button type='button' class='edit-button'>Редактировать</button>" +
                "<button type='button' class='delete-button'>Удалить</button>";
            todoItem.querySelector(".todo-item-block").textContent = newTodoFieldValue;

            todoItem.querySelector(".edit-button").addEventListener("click", function () {
                setEditMode();
            });

            todoItem.querySelector(".delete-button").addEventListener("click", function () {
                todoItem.remove();
            });
        }

        function setEditMode() {
            todoItem.innerHTML = "<input class='edit-todo-item' type='text'>" +
                "<button type='button' class='save-button'>Сохранить</button>" +
                "<button type='button' class='cancel-button'>Отмена</button>";

            var editedTodoField = todoItem.querySelector(".edit-todo-item");
            editedTodoField.value = newTodoFieldValue;

            todoItem.querySelector(".save-button").addEventListener("click", function () {
                var editedTodoFieldValue = editedTodoField.value.trim();

                if (editedTodoFieldValue.length === 0) {
                    editedTodoField.classList.add("invalid");
                } else {
                    editedTodoField.classList.remove("invalid");
                    newTodoFieldValue = editedTodoFieldValue;
                    setViewMode();
                }
            });

            todoItem.querySelector(".cancel-button").addEventListener("click", function () {
                setViewMode();
            });
        }
    });
});