const express = require('express');
const { faker } = require('@faker-js/faker');

//nos traemos un router y sustituimos la ruta /products con Router
const router = express.Router();


//Get: parámetros query
router.get('/', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.url(),
    });
  }
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Yo soy un filter');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  if (id === '999') {
    res.status(404).json({
      message:'not found'
    });
  }else{
    res.json({
      id,
      name: 'Product 2',
      price: 2000
    });
  }
});

router.post('/',(req, res)=>{
  const body = req.body;
  res.status(201).json({
    message: 'created',
    data: body
  })
})

router.delete('/:id',(req, res)=>{
  const { id } = req.params;
  res.json({
    message: 'deleted',
    id,
  })
})
module.exports = router;
