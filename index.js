
const port = process.env.port || 8080;
require('./app.js').listen(port, function () {  
  const datetime = new Date();
  const message = "At " + datetime  + ", express blog api started to run on port " + port ;
  console.log(message);
});