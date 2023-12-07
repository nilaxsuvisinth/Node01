const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello  world!!!!!!');
  });

app.listen(3000,()=>{
    console.log('server running at 3000')
});  

app.post('/resources', (req, res) => {
    const { name } = req.body;
    // Create new resource with provided name
    res.status(201).json({ message: `Created resource with name ${name}` });
  });