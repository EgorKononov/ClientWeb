$(function () {
    let form = $("#form");
    var newTodoField = $("#new-todo-field");
    var addButton = $("#add-button");
    var todoList = $("#todo-list");
    var errorMessage = $("#error-message");

    form.submit(function (e) {
        e.preventDefault();
    });

    addButton.click(function () {
        var newTodoFieldValue = newTodoField.val();

        if (newTodoFieldValue.trim().length !== 0) {
            errorMessage.hide();
            var todoItem = $("<li>");
            todoItem.addClass("margin-vertical");
            todoItem.html("<span class='margin-horizontal'></span><button type='button'>Удалить</button>");
            todoItem.children().first().text(newTodoFieldValue);

            todoItem.children().last().click(function () {
                todoItem.remove();
            })

            todoList.append(todoItem);
            newTodoField.val("");
        } else {
            errorMessage.show();
        }
    });
});