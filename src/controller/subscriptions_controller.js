const { Subscriptions } = require('../models');

async function create_subscription(req, res) {
  const item = await Subscriptions.create(req.body);
  res.status(201).json(item);
}

async function get_subscription(req, res) {
  const id = req.params.id;
  const item = await Subscriptions.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
}

async function get_all_subscriptions(req, res) {
  const items = await Subscriptions.findAll();
  res.json(items);
}

async function update_subscription(req, res) {
  const id = req.params.id;
  const item = await Subscriptions.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.update(req.body);
  res.json(item);
}

async function delete_subscription(req, res) {
  const id = req.params.id;
  const item = await Subscriptions.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.destroy();
  res.json({ success: true });
}

module.exports = {
  create_subscription,
  get_subscription,
  get_all_subscriptions,
  update_subscription,
  delete_subscription,
};