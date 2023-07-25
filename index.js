const express = require('express');
const app = express();
const port = 3005;

app.get('/', (req, res)=>{
  res.send('Hola mi server express');
})

app.get('/nueva-ruta', (req, res)=>{
  res.send('Hola, sou uma nova rota');
})

app.get('/producto', (req, res)=>{
  res.json({
    name: 'producto1',
    price: 1000
  });
})

app.listen(port, ()=>{
  console.log('Mi port' + port);
})
