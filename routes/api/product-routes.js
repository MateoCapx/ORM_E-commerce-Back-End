const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
  Product.findAll().then((products) => res.status(200).json(products))
  // I was returing that data before the data was finished querying 
});

// get one product
router.get('/:id', (req, res) => {

  const { id } = req.params;
    // find a single product by its `id`
  Product.findOne({where:{id:id}}).then((products) => res.status(200).json(products))

   
});

// create new product
router.post('/', (req, res) => {
  const { id } = req.params;
  Product.create(req.body, {where:{id:id}}).then((products) => res.status(200).send(products))
});



// update product
router.put('/:id', (req, res) => {
  const { id } = req.params;
  Product.update(req.body, {where:{id:id}}).then((products) => res.status(200).send(products))
});

router.delete('/:id', (req, res) => {
  // delete one product by its `id` value

  const { id } = req.params;
  Product.destroy({where:{id:id}}).then((products) => res.status(200).send('Product is deleted'))

});

module.exports = router;


// {
//   "product_name": "Cargo Shorts",
//   "price": 30,
//   "stock": 22,
//   "id": 5,
//   "category_id": 2
// }