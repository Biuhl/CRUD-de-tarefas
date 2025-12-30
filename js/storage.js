const STORAGE_KEY = "tasks";

function saveTasks(tasks){
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function loadTasks() {
    const storedTasks = localStorage.getItem(STORAGE_KEY);

    return storedTasks ? JSON.parse(storedTasks) : [];
}

let tasks = loadTasks();
