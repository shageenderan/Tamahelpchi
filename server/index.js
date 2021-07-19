const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;

const fs = require('fs');
var bodyParser = require('body-parser');

const dataPath = './server/user.json';

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
  app.use(bodyParser.json());

  const readFile = (
    callback,
    filePath = dataPath,
    encoding = 'utf8'
  ) => {
    fs.readFile(filePath, encoding, (err, data) => {
      if (err) {
        throw err;
      }

      callback(JSON.parse(data));
    });
  };

  const writeFile = (
    fileData,
    callback,
    filePath = dataPath,
    encoding = 'utf8'
  ) => {
    fs.writeFile(filePath, fileData, encoding, err => {
      if (err) {
        throw err;
      }

      callback();
    });
  };

  // Answer API requests.
  app.get('/api/hello', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send({ express: 'Hello From Express' });
  });

  // Get users
  app.get('/api/user', function (req, res) {
    console.log("[GET] user")    
    readFile(data => {
      res.send(data);
    });
  });

  // Add item to inventory
  app.post('/api/user/inventory', function (req, res) {
    console.log("[POST] to inventory", req.body)
    readFile(data => { 
      // add the new user
      let item_type = req.body.itemType
      data["inventory"][item_type] = req.body.inventory;
      
      writeFile(JSON.stringify(data, null, 2), () => {
        res.status(200).send('Inventory Updated');
      });
    });
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
  });
}
