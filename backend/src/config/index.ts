/**
 * @file This file contains the configuration values for the solution. If the user wants a more custom solution, create a .env in the root directory and create all values appended with process.env
 *
 * Purpose:
 * - Provide solution with configuration values
 */
export const config = {
	port: process.env.PORT || 3000,
	db: {
	  host: process.env.DB_HOST || 'mongodb',
	  port: process.env.DB_PORT || 27017,
	  name: process.env.DB_NAME || 'pokemon-battle', 
	  get connection_string() {
		return `mongodb://${this.host}:${this.port}/${this.name}`
	  }
	},
	dataset_url: process.env.DATASET_URL || 'https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json?_sm_au_=iVV5F7R6VsVpqJM6pGsWvKttvN1NG',
	get api_url(){
		return `http://localhost:${this.port}/api/battle`
	},
	allowed_origin: 'http://localhost:3001'
  };