/**
 * @file This file contains the test suite for the solution
 *
 * Purpose:
 * - Verify that the POST endpoint works
 * - Verify that both Pokemon teams has exactly 6 pokemon
 * - Verify that all Pokemons have the correct properties for a battle to work
 */

import axios, {AxiosError} from 'axios';
import { Pokemon } from '../models/Pokemon';
import { config } from '../config';

describe('POST /api/battle', () => {
  it('should respond with a 200 status and return 6 Pokémon in each team', async () => {
    try {
      const response = await axios.post(config.api_url, {
      });
      
      expect(response.status).toBe(200);
      expect(response.data.team1Details).toHaveLength(6);
      expect(response.data.team2Details).toHaveLength(6);

      response.data.team1Details.forEach((pokemon: Pokemon) => {
        expect(pokemon).toHaveProperty('id');
        expect(pokemon).toHaveProperty('name');
        expect(pokemon).toHaveProperty('type');
        expect(pokemon).toHaveProperty('weaknesses')
      });
        response.data.team2Details.forEach((pokemon: Pokemon) => {
        expect(pokemon).toHaveProperty('id');
        expect(pokemon).toHaveProperty('name');
        expect(pokemon).toHaveProperty('type');
        expect(pokemon).toHaveProperty('weaknesses');
      });
      
    } catch (error) {
      const axiosError = error as AxiosError
      console.error('Error:', axiosError.response?.data || axiosError.message);
      throw error;
    }
  });
});