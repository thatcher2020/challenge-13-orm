const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint
  // find all tags
  // be sure to include its associated Product da
router.get('/', (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: 
      [{ model: Product, through: ProductTag, as: 'tagged_products' }],
    });
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // find a single tag by its `id`
  // be sure to include its associated Product data
router.get('/:id', (req, res) => {
  try {
    const tag = await Tag.findByPk = await Tag.findByPk(req.params.id, {
      include: 
      [{ model: Product, through: ProductTag, as: 'tagged_products' }],
    });

    if (!tag) {
      res.status(404).json({ message: 'No tag found with this id' });
      return;
    }

    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json(err);
  }
});

  // create a new tag
router.post('/', (req, res) => {

});

  // update a tag's name by its `id` value
router.put('/:id', (req, res) => {

});

  // delete on tag by its `id` value
router.delete('/:id', (req, res) => {

});

module.exports = router;
