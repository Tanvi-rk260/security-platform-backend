
import cors from 'cors';
import keywordRoutes from './routes/keywordRoutes.js';
import express from "express";

import connectDB from "./utils/db.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(express.json());
connectDB();
app.use(cors({ origin: 'http://localhost:3000' }));

;
app.use('/api/keyword', keywordRoutes);


app.listen(3000, () => {
  console.log("Server started on port 3000");
});
