const { VideoCategories } = require('../models');

async function create_video_category(req, res) {
  const item = await VideoCategories.create(req.body);
  res.status(201).json(item);
}

async function get_video_category(req, res) {
  const id = req.params.id;
  const item = await VideoCategories.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
}

async function get_all_video_categories(req, res) {
  const items = await VideoCategories.findAll();
  res.json(items);
}

async function update_video_category(req, res) {
  const id = req.params.id;
  const item = await VideoCategories.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.update(req.body);
  res.json(item);
}

async function delete_video_category(req, res) {
  const id = req.params.id;
  const item = await VideoCategories.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.destroy();
  res.json({ success: true });
}

module.exports = {
  create_video_category,
  get_video_category,
  get_all_video_categories,
  update_video_category,
  delete_video_category,
};