const { Episodes } = require('../models');

async function create_episode(req, res) {
  const item = await Episodes.create(req.body);
  res.status(201).json(item);
}

async function get_episode(req, res) {
  const id = req.params.id;
  const item = await Episodes.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
}

async function get_all_episodes(req, res) {
  const items = await Episodes.findAll();
  res.json(items);
}

async function update_episode(req, res) {
  const id = req.params.id;
  const item = await Episodes.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.update(req.body);
  res.json(item);
}

async function delete_episode(req, res) {
  const id = req.params.id;
  const item = await Episodes.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.destroy();
  res.json({ success: true });
}

module.exports = {
  create_episode,
  get_episode,
  get_all_episodes,
  update_episode,
  delete_episode,
};