const http = require('http');
const url = require('url');

const port = process.env.PORT || 3000;

const tasks = [];


function addTask(description) {
  const task = {
    id: tasks.length + 1,
    description,
    completed: false,
  };
  tasks.push(task);
  return task;
}


const server = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url, true);

  if (req.method === 'GET' && pathname === '/tasks') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(tasks));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Ruta no encontrada');
  }
});

server.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});