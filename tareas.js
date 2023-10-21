const tasks = [];

function printTasks() {
  console.log('Lista de Tareas:');
  tasks.forEach((task, index) => {
    const status = task.completed ? 'Completada' : 'Pendiente';
    console.log(`${index + 1}. [${status}] ${task.description}`);
  });
}

function addTask(description) {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      const task = {
        id: tasks.length + 1,
        description,
        completed: false,
      };
      tasks.push(task);
      resolve(`Tarea "${description}" añadida.`);
    }, 2000);
  })
}

function deleteTask(index) {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
    if (index >= 0 && index < tasks.length) {
      const task = tasks.splice(index, 1)[0];
      resolve("Tarea + task.description + eliminada.");
    } else {
      reject("error");
    }}, 1000)
  })
}

function completeTask(index) {
  new Promise((resolve, reject) => {
    setTimeout(()=>{
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    resolve("Tarea + {tasks[index].description} + marcada como completada.");
  } else {
  reject("Índice de tarea no válido.");
  }
}, 3000)
})
}


addTask(desayunar).then((data)=> console.log(data));
deleteTask(2).then((data)=> console.log(data));

console.log(addTask())

