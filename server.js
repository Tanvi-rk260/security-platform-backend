import express from 'express';
import userRoutes from './routes/userRoutes.js'; // Adjust the path if needed

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);
