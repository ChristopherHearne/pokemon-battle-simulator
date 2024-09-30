/**
 * @file This file contains the function to retrieve the dataset and load it into the MongoDB database on initialization
 *
 * Purpose:
 * - Connect to the database
 * - Retrieve the Pokemon dataset and load it into the database
 */
import axios from 'axios';
import { Pokemon } from '../models/Pokemon';
import { connectDb } from './connectDb';
import { config } from '../config';


export const seedDatabase = async () => {
  try {
    const DATASET_URL = config.dataset_url
    await connectDb()
    const response = await axios.get(DATASET_URL);
    const dataset = response.data.pokemon;
    await Pokemon.deleteMany() // Wipe the dataset to avoid duplication from previous boots
    await Pokemon.insertMany(dataset);
    
    console.log('Database seeded successfully!');
  } catch (error) {
    console.error('Error seeding database:', error);
  }
};