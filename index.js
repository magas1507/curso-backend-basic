const express = require('express');
const { faker } = require('@faker-js/faker');

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

//Get: parámetros query
app.get('/products',(req, res)=>{
  const products = [];
  const { size } = req.query;
  const limit = size || 10;

  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    })
  }
  res.json(products);
})

app.get('/products/:id', (req, res)=>{
  const { id } = req.params;

  res.json({
    id,
    name:'Product 2',
    price: 2000
  })
})

app.get('/categories/:categoryId/products/:productId',(req,res)=>{
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  })
})

// Personas
const persons = [
  {
    id: 1,
    name:'Rhysan',
    country:'Corte de la noche',
    city:'Velaris',
    age:'500 years old'
  },
  {
    id: 2,
    name:'Azriel',
    country:'Corte de la noche',
    city:'Velaris',
    age:'350 years old'
  },
  {
    id: 3,
    name:'Casian',
    country:'Corte de la noche',
    city:'Velaris',
    age:'450 years old'
  },
];

app.get('/persons',(req,res)=>{
  res.json(persons);
})

app.get('/persons/:personId',(req , res)=>{
  const { personId } = req.params;

  const getPerson = persons.find((person)=> person.id === Number(personId));

  if (getPerson) {

    res.json(getPerson)
  } else {
    res.json({ success: false, message:'person not found'})
  }

})




app.listen(port, ()=>{
  console.log('Mi port' + port);
})
