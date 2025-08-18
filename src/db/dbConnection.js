import { Sequelize } from "sequelize";
import createUserModel from "../models/user.js";
let User=null;
export const dbConnection = async (database, username, password) => {
  const sequelize = new Sequelize(database, username, password, {
    host: "127.0.0.1",
    port:5432,
    dialect: "postgres",
  });
  try {
    await sequelize.authenticate();
    User=await createUserModel(sequelize);
    await sequelize.sync({alter:true});
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export {User}