const { Series } = require('../models');

async function create_series(req, res) {
  const item = await Series.create(req.body);
  res.status(201).json(item);
}

async function get_series(req, res) {
  const id = req.params.id;
  const item = await Series.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
}

async function get_all_series(req, res) {
  const items = await Series.findAll();
  res.json(items);
}

async function update_series(req, res) {
  const id = req.params.id;
  const item = await Series.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.update(req.body);
  res.json(item);
}

async function delete_series(req, res) {
  const id = req.params.id;
  const item = await Series.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.destroy();
  res.json({ success: true });
}

module.exports = {
  create_series,
  get_series,
  get_all_series,
  update_series,
  delete_series,
};