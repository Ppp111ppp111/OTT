const { UserSession } = require('../models');

async function create_user_session(req, res) {
  const item = await UserSession.create(req.body);
  res.status(201).json(item);
}

async function get_user_session(req, res) {
  const id = req.params.id;
  const item = await UserSession.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  res.json(item);
}

async function get_all_user_sessions(req, res) {
  const items = await UserSession.findAll();
  res.json(items);
}

async function update_user_session(req, res) {
  const id = req.params.id;
  const item = await UserSession.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.update(req.body);
  res.json(item);
}

async function delete_user_session(req, res) {
  const id = req.params.id;
  const item = await UserSession.findByPk(id);
  if(!item) return res.status(404).json({ error: 'Not found' });
  await item.destroy();
  res.json({ success: true });
}

module.exports = {
  create_user_session,
  get_user_session,
  get_all_user_sessions,
  update_user_session,
  delete_user_session,
};