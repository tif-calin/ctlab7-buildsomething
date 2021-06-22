import express from 'express';
import notFoundMiddleware from './middleware/not-found.js';
import errorMiddleware from './middleware/error.js';

import friendsRouter from './controllers/friends.js';

const app = express();

app.use(express.json());

app.use('/api/v1/friends', friendsRouter);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export default app;
