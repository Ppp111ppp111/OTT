const { Genre } = require('../models');

async function create_genre(req, res) {
  const item = await Genre.create(req.body);
  res.status(201).json(item);
}

async function get_genre(req, res) {
  const id = req.params.id;
  const item = await Genre.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
}

async function get_all_genres(req, res) {
  const items = await Genre.findAll();
  res.json(items);
}

async function update_genre(req, res) {
  const id = req.params.id;
  const item = await Genre.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.update(req.body);
  res.json(item);
}

async function delete_genre(req, res) {
  const id = req.params.id;
  const item = await Genre.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.destroy();
  res.json({ success: true });
}

module.exports = {
  create_genre,
  get_genre,
  get_all_genres,
  update_genre,
  delete_genre,
};