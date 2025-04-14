function completeTask(button, taskName) {
    button.textContent = "Completed";
    button.classList.remove("btn-primary");
    button.classList.add("btn-disabled");
    button.disabled = true;

    let taskCount = document.getElementById("task-count");
    let completedCount = document.getElementById("completed-count");
    let currentDate = new Date().toDateString();
    
    document.getElementById("current-date").textContent = currentDate;
    
    let currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });


    taskCount.textContent = Math.max(0, taskCount.textContent - 1);
    completedCount.textContent = `${parseInt(completedCount.textContent.replace(' ', '')) + 1}`;

    // Log the completion activity
    let log = document.getElementById("activity-log");
    let entry = document.createElement("p");
    entry.textContent = `You have completed the task: "${taskName}" at ${currentTime}`;
    log.prepend(entry);

    // Alert after task completion
    alert(`Board updated Successfully`);

    // Check if all tasks are completed
    if (parseInt(taskCount.textContent) === 0) {
        setTimeout(function () {
            alert("🎉 Congrats!!! You have completed all the Current Task");
        }, 500);
    }
}

function clearHistory() {
    document.getElementById("activity-log").innerHTML = "";
}

function updateDate() {
    document.getElementById("current-date").textContent = new Date().toDateString();
}

updateDate();




        