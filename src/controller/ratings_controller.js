const { Ratings } = require('../models');

async function create_rating(req, res) {
  const item = await Ratings.create(req.body);
  res.status(201).json(item);
}

async function get_rating(req, res) {
  const id = req.params.id;
  const item = await Ratings.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
}

async function get_all_ratings(req, res) {
  const items = await Ratings.findAll();
  res.json(items);
}

async function update_rating(req, res) {
  const id = req.params.id;
  const item = await Ratings.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.update(req.body);
  res.json(item);
}

async function delete_rating(req, res) {
  const id = req.params.id;
  const item = await Ratings.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.destroy();
  res.json({ success: true });
}

module.exports = {
  create_rating,
  get_rating,
  get_all_ratings,
  update_rating,
  delete_rating,
};