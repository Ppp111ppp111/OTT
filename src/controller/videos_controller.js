const { Videos } = require('../models');

async function create_video(req, res) {
  const item = await Videos.create(req.body);
  res.status(201).json(item);
}

async function get_video(req, res) {
  const id = req.params.id;
  const item = await Videos.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
}

async function get_all_videos(req, res) {
  const items = await Videos.findAll();
  res.json(items);
}

async function update_video(req, res) {
  const id = req.params.id;
  const item = await Videos.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.update(req.body);
  res.json(item);
}

async function delete_video(req, res) {
  const id = req.params.id;
  const item = await Videos.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.destroy();
  res.json({ success: true });
}

module.exports = {
  create_video,
  get_video,
  get_all_videos,
  update_video,
  delete_video,
};