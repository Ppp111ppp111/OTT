const { Users } = require('../models');

async function login_user(req, res) {
  res.json({ message: 'TODO: implement logic from Python controller' });
}

async function create_user(req, res) {
  const item = await Users.create(req.body);
  res.status(201).json(item);
}

module.exports = {
  login_user,
  create_user,
};