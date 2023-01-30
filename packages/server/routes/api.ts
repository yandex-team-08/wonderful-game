import { Router } from 'express';

import { threadsRoute } from '../services/threads';

export const apiRoute = Router();

apiRoute
    .use('/forum/threads', threadsRoute);
