/**
 * @file This file contains the Mongoose Schema and interface for a Pokemon 
 *
 * Purpose:
 * - Model the database objects according to the dataset
 */
import mongoose from 'mongoose';

const NextEvolutionSchema = new mongoose.Schema({
	num: { type: String, required: true },
	name: { type: String, required: true },
  });

const PokemonSchema = new mongoose.Schema<Pokemon>({
	id: { type: Number, required: true },
	num: { type: String, required: true },
	name: { type: String, required: true },
	img: { type: String, required: true },
	type: { type: [String], required: true },
	height: { type: String, required: true }, 
	weight: { type: String, required: true },
	candy: { type: String, required: true },
	candy_count: { type: Number, required: false },
	egg: { type: String, required: true },
	spawn_chance: { type: Number, required: true },
	avg_spawns: { type: Number, required: true },
	spawn_time: { type: String, required: true },
	multipliers: { type: [Number], default: [] }, 
	weaknesses: { type: [String], default: [] },
	next_evolution: { type: [NextEvolutionSchema], default: [] },
});

export interface NextEvolution {
	num: string;
	name: string;
  }
  
export interface Pokemon extends Document {
	id: number;
	num: string;
	name: string;
	img: string;
	type: string[];
	height: string;
	weight: string;
	candy: string;
	candy_count: number;
	egg: string;
	spawn_chance: number;
	avg_spawns: number;
	spawn_time: string;
	multipliers: number[];
	weaknesses: string[];
	next_evolution: NextEvolution[];
  }

export const Pokemon = mongoose.model('Pokemon', PokemonSchema)