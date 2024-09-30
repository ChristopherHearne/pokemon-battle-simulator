/**
 * @file This file contains the initialization script to start the Express server
 *
 * Purpose:
 * - Set up and launch the server
 * - Use the seedDatabase module to insert data into the MongoDB database before launch
 */
import express from 'express';
import { seedDatabase } from './utils/seedDatabase';
import battleRoutes from './routes/battleRoutes'
import cors from 'cors'

import { config } from './config';

const app = express();
app.use(cors())
app.use(express.json());
app.use('/api', battleRoutes);

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

seedDatabase()

module.exports = app;