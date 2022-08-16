const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll().then((category) => res.status(200).json(category))
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Category.findOne({where:{id:id}}).then((products) => res.status(200).json(products))
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
  const { id } = req.params;
  Category.create(req.body, {where:{id:id}}).then((products) => res.status(200).send(products))
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  const { id } = req.params;
  Category.update(req.body, {where:{id:id}}).then((products) => res.status(200).send(products))
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  const { id } = req.params;
   Category.destroy({where:{id:id}}).then((products) => res.status(200).send('Category is deleted'))
});

module.exports = router;