import express from 'express';
import reconRouter from './routers/reconRouter.js';
import userRoutes from './routers/userRouter.js';
import sonarRouter from './routers/sonarRouter.js';

const app = express();

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api', reconRouter);
app.use('/api/sonar', sonarRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
