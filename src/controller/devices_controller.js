const { Devices } = require('../models');

async function create_device(req, res) {
  const item = await Devices.create(req.body);
  res.status(201).json(item);
}

async function get_device(req, res) {
  const id = req.params.id;
  const item = await Devices.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
}

async function get_all_devices(req, res) {
  const items = await Devices.findAll();
  res.json(items);
}

async function update_device(req, res) {
  const id = req.params.id;
  const item = await Devices.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.update(req.body);
  res.json(item);
}

async function delete_device(req, res) {
  const id = req.params.id;
  const item = await Devices.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.destroy();
  res.json({ success: true });
}

module.exports = {
  create_device,
  get_device,
  get_all_devices,
  update_device,
  delete_device,
};