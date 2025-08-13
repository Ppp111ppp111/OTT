const { Interaction } = require('../models');

async function create_interaction(req, res) {
  const item = await Interaction.create(req.body);
  res.status(201).json(item);
}

async function get_interaction(req, res) {
  const id = req.params.id;
  const item = await Interaction.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
}

async function get_all_interactions(req, res) {
  const items = await Interaction.findAll();
  res.json(items);
}

async function update_interaction(req, res) {
  const id = req.params.id;
  const item = await Interaction.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.update(req.body);
  res.json(item);
}

async function delete_interaction(req, res) {
  const id = req.params.id;
  const item = await Interaction.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.destroy();
  res.json({ success: true });
}

module.exports = {
  create_interaction,
  get_interaction,
  get_all_interactions,
  update_interaction,
  delete_interaction,
};