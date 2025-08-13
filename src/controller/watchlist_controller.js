const { Watchlist } = require('../models');

async function create_watchlist(req, res) {
  const item = await Watchlist.create(req.body);
  res.status(201).json(item);
}

async function get_watchlist(req, res) {
  const id = req.params.id;
  const item = await Watchlist.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
}

async function get_all_watchlists(req, res) {
  const items = await Watchlist.findAll();
  res.json(items);
}

async function update_watchlist(req, res) {
  const id = req.params.id;
  const item = await Watchlist.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.update(req.body);
  res.json(item);
}

async function delete_watchlist(req, res) {
  const id = req.params.id;
  const item = await Watchlist.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.destroy();
  res.json({ success: true });
}

module.exports = {
  create_watchlist,
  get_watchlist,
  get_all_watchlists,
  update_watchlist,
  delete_watchlist,
};