const express = require('express');
const { faker } = require('@faker-js/faker');

//exporto routes
const routerApi = require('./routes');

const app = express();
const port = 3005;

app.use(express.json());
app.get('/', (req, res)=>{
  res.send('Hola mi server express');
})

app.get('/nueva-ruta', (req, res)=>{
  res.send('Hola, sou uma nova rota');
})

routerApi(app);
// app.get('/categories/:categoryId/products/:productId',(req,res)=>{
//   const { categoryId, productId } = req.params;
//   res.json({
//     categoryId,
//     productId,
//   })
// })

// user
// const users = [
//   {
//     id: 1,
//     name:'Rhysan',
//     country:'Corte de la noche',
//     city:'Velaris',
//     age:'500 years old'
//   },
//   {
//     id: 2,
//     name:'Azriel',
//     country:'Corte de la noche',
//     city:'Velaris',
//     age:'350 years old'
//   },
//   {
//     id: 3,
//     name:'Casian',
//     country:'Corte de la noche',
//     city:'Velaris',
//     age:'450 years old'
//   },
// ];

// app.get('/users',(req,res)=>{
//   res.json(users);
// })

// app.get('/users/:userId',(req , res)=>{
//   const { userId } = req.params;

//   const getUser = users.find((user)=> user.id === Number(userId));

//   if (getPerson) {

//     res.json(getPerson)
//   } else {
//     res.json({ success: false, message:'person not found'})
//   }

// })

app.listen(port, ()=>{
  console.log('Mi port' + port);
})
