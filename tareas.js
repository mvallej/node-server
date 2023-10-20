const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [];

function printTasks() {
  console.log('Lista de Tareas:');
  tasks.forEach((task, index) => {
    const status = task.completed ? 'Completada' : 'Pendiente';
    console.log(`${index + 1}. [${status}] ${task.description}`);
  });
}

function addTask(description) {
  tasks.push({ description, completed: false });
}

function deleteTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
  }
}

function completeTask(index) {
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
  }
}

rl.question('¿Qué acción deseas realizar? (add/delete/complete/exit): ', (action) => {
  if (action === 'exit') {
    console.log('Adiós.');
    rl.close();
  } else if (action === 'add') {
    rl.question('Escribe la descripción de la tarea: ', (description) => {
      addTask(description);
      printTasks();
      rl.close();
    });
  } else if (action === 'delete') {
    printTasks();
    rl.question('Escribe el número de la tarea que deseas eliminar: ', (index) => {
      deleteTask(index - 1); // Restamos 1 para ajustar al índice del array
      printTasks();
      rl.close();
    });
  } else if (action === 'complete') {
    printTasks();
    rl.question('Escribe el número de la tarea que deseas marcar como completada: ', (index) => {
      completeTask(index - 1); // Restamos 1 para ajustar al índice del array
      printTasks();
      rl.close();
    });
  } else {
    console.log('Acción no válida. Por favor, elige una acción válida.');
    rl.close();
  }
});