const { Payments } = require('../models');

async function create_payment(req, res) {
  const item = await Payments.create(req.body);
  res.status(201).json(item);
}

async function get_payment(req, res) {
  const id = req.params.id;
  const item = await Payments.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
}

async function get_all_payments(req, res) {
  const items = await Payments.findAll();
  res.json(items);
}

async function update_payment(req, res) {
  const id = req.params.id;
  const item = await Payments.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.update(req.body);
  res.json(item);
}

async function delete_payment(req, res) {
  const id = req.params.id;
  const item = await Payments.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.destroy();
  res.json({ success: true });
}

module.exports = {
  create_payment,
  get_payment,
  get_all_payments,
  update_payment,
  delete_payment,
};