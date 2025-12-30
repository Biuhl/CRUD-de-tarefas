document.addEventListener("DOMContentLoaded", () =>{
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

function addTask(){
    const taskTitle = taskInput.value.trim();
    
    if (taskTitle === ""){
        alert("Digite uma tarefa válida");
        return;
    };

    const newTask = {
        id: Date.now(),
        title: taskTitle,
        completed: false
    };

    tasks.push(newTask);
    taskInput.value ="";


    renderTasks();

}

addTaskBtn.addEventListener("click", addTask);

function renderTasks(){

    taskList.innerHTML = "";

    tasks.forEach(task =>{
        const li = document.createElement("li");
        li.textContent = task.title;

         if (task.completed) {
         li.classList.add("completed");
        }

        li.addEventListener("click", () =>{
            toggleTask(task.id);
        });
        taskList.appendChild(li);
        
    });

}

function toggleTask(id) {
    tasks = tasks.map(task =>
        tasks.id === id
        ? {...tasks, completed: !tasks.completed }
        : tasks
    );
    renderTasks();
}
});


