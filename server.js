import express from 'express';
import userRoutes from './routes/userRoutes.js'; // Adjust the path if neede
const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
app.use('/api', reconRouter);
app.use('/api/sonar', sonarRouter);