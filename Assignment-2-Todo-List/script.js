// ===============================
// ADD TASK
// ===============================

function addTask() {

    const input =
        document.getElementById("taskInput");

    const task =
        input.value.trim();


    // Check empty input

    if (task === "") {

        alert("Please enter a task.");

        return;

    }


    // Create list item

    const li =
        document.createElement("li");

    li.className = "task-item";


    // Create task text

    const span =
        document.createElement("span");

    span.className = "task-text";

    span.innerText = task;


    // Create complete button

    const completeButton =
        document.createElement("button");

    completeButton.className =
        "task-button complete-btn";

    completeButton.innerText =
        "Complete";

    completeButton.onclick =
        function () {

            completeTask(this);

        };


    // Create delete button

    const deleteButton =
        document.createElement("button");

    deleteButton.className =
        "task-button delete-btn";

    deleteButton.innerText =
        "Delete";

    deleteButton.onclick =
        function () {

            deleteTask(this);

        };


    // Add elements to list item

    li.appendChild(span);

    li.appendChild(completeButton);

    li.appendChild(deleteButton);


    // Add task to list

    document
        .getElementById("taskList")
        .appendChild(li);


    // Clear input

    input.value = "";

    input.focus();


    // Update statistics

    updateStats();

    updateEmptyMessage();

}


// ===============================
// COMPLETE TASK
// ===============================

function completeTask(button) {

    const task =
        button.parentElement;


    task.classList.toggle("completed");


    // Change button text

    if (
        task.classList.contains("completed")
    ) {

        button.innerText = "Undo";

    } else {

        button.innerText = "Complete";

    }


    updateStats();

}


// ===============================
// DELETE TASK
// ===============================

function deleteTask(button) {

    const task =
        button.parentElement;


    task.remove();


    updateStats();

    updateEmptyMessage();

}


// ===============================
// UPDATE STATISTICS
// ===============================

function updateStats() {

    const tasks =
        document.querySelectorAll(
            "#taskList .task-item"
        );


    const completed =
        document.querySelectorAll(
            "#taskList .completed"
        );


    const total =
        tasks.length;


    const completedCount =
        completed.length;


    const pending =
        total - completedCount;


    document.getElementById(
        "totalTasks"
    ).innerText = total;


    document.getElementById(
        "completedTasks"
    ).innerText = completedCount;


    document.getElementById(
        "pendingTasks"
    ).innerText = pending;

}


// ===============================
// EMPTY MESSAGE
// ===============================

function updateEmptyMessage() {

    const tasks =
        document.querySelectorAll(
            "#taskList .task-item"
        );


    const emptyMessage =
        document.getElementById(
            "emptyMessage"
        );


    if (tasks.length === 0) {

        emptyMessage.style.display =
            "block";

    } else {

        emptyMessage.style.display =
            "none";

    }

}


// ===============================
// CLEAR COMPLETED TASKS
// ===============================

function clearCompleted() {

    const completedTasks =
        document.querySelectorAll(
            "#taskList .completed"
        );


    completedTasks.forEach(
        function (task) {

            task.remove();

        }
    );


    updateStats();

    updateEmptyMessage();

}


// ===============================
// ENTER KEY
// ===============================

function handleEnter(event) {

    if (event.key === "Enter") {

        addTask();

    }

}


// ===============================
// INITIAL STATE
// ===============================

updateStats();

updateEmptyMessage();