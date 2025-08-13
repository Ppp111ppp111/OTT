const { Seasons } = require('../models');

async function create_season(req, res) {
  const item = await Seasons.create(req.body);
  res.status(201).json(item);
}

async function get_season(req, res) {
  const id = req.params.id;
  const item = await Seasons.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
}

async function get_all_seasons(req, res) {
  const items = await Seasons.findAll();
  res.json(items);
}

async function update_season(req, res) {
  const id = req.params.id;
  const item = await Seasons.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.update(req.body);
  res.json(item);
}

async function delete_season(req, res) {
  const id = req.params.id;
  const item = await Seasons.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.destroy();
  res.json({ success: true });
}

module.exports = {
  create_season,
  get_season,
  get_all_seasons,
  update_season,
  delete_season,
};