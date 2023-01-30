import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

import { createClientAndConnect } from './db';
import { apiRoute } from './routes/api';

const bodyParser = require('body-parser');

dotenv.config();

const app = express();
app.use(cors());
const port = Number(process.env.SERVER_PORT) || 3001;

app.use(bodyParser.json());

createClientAndConnect();

app.use('/api', apiRoute);

app.get('*', (_, res) => {
  res.json('👋 Howdy from the server :)');
});

app.listen(port, () => {
  console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
});
