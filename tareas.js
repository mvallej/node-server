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



rl.on('line', async (line) => {
  switch (line.trim()) {
    case '1':
      showTasks();
      break;
    case '2':
      rl.question('Introduzca la descripción de la tarea: ', async (description) => {
        try {
          const result = await addTask(description);
          console.log(result);
        } catch (error) {
          console.error(error);
        }
        rl.prompt();
      });
      break;
    case '3':
      showTasks();
      rl.question('Introduzca el índice de la tarea que desea eliminar: ', (index) => {
        removeTask(parseInt(index) - 1)
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            rl.prompt();
          });
      });
      break;
    case '4':
      showTasks();
      rl.question('Introduzca el índice de la tarea que desea marcar como completada: ', (index) => {
        completeTask(parseInt(index) - 1)
          .then((result) => {
            console.log(result);
          })
          .catch((error) => {
            console.error(error);
          })
          .finally(() => {
            rl.prompt();
          });
      });
      break;
    case '5':
      rl.close();
      break;
    default:
      console.log('Opción no válida. Elija una opción válida.');
      break;
  }
}).on('close', () => {
  console.log('¡Adiós!');
  process.exit(0);
});