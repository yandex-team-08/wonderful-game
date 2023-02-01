const {
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_PORT,
  POSTGRES_HOST,
} = process.env;

import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

import Message from './database/tables/Message';
import Thread from './database/tables/Thread';
import User from './database/tables/User';

export const createClientAndConnect = async (): Promise<Sequelize | null> => {
  try {
    const sequelizeOptions: SequelizeOptions = {
      username: POSTGRES_USER ?? 'admin',
      host: POSTGRES_HOST || 'localhost',
      database: POSTGRES_DB ?? 'team-08-wonderful-game',
      password: POSTGRES_PASSWORD ?? 'baguviX',
      port: Number(POSTGRES_PORT) ?? 5432,
      dialect: 'postgres',
      models: [User, Message, Thread],
    };

    const sequelize = new Sequelize(sequelizeOptions);

    const res = await sequelize.sync();
    console.log('  ➜ 🎸 Connected to the database with options:', res.options);

    return sequelize;
  } catch (e) {
    console.error(e);
  }

  return null;
};
