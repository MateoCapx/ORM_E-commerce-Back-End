const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll().then((tag) => res.status(200).json(tag))
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  Tag.findOne({where:{id:id}}).then((products) => res.status(200).json(products))
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
  // create a new tag
  const { id } = req.params;
  Tag.create(req.body, {where:{id:id}}).then((products) => res.status(200).send(products))
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  const { id } = req.params;
  Tag.update(req.body, {where:{id:id}}).then((products) => res.status(200).send(products))
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  const { id } = req.params;
  Tag.destroy({where:{id:id}}).then((products) => res.status(200).send('Tag is deleted'))
});

module.exports = router;