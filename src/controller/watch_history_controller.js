const { WatchHistory } = require('../models');

async function create_watch_history(req, res) {
  const item = await WatchHistory.create(req.body);
  res.status(201).json(item);
}

async function get_watch_history(req, res) {
  const id = req.params.id;
  const item = await WatchHistory.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
}

async function get_all_watch_histories(req, res) {
  const items = await WatchHistory.findAll();
  res.json(items);
}

async function update_watch_history(req, res) {
  const id = req.params.id;
  const item = await WatchHistory.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.update(req.body);
  res.json(item);
}

async function delete_watch_history(req, res) {
  const id = req.params.id;
  const item = await WatchHistory.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.destroy();
  res.json({ success: true });
}

module.exports = {
  create_watch_history,
  get_watch_history,
  get_all_watch_histories,
  update_watch_history,
  delete_watch_history,
};