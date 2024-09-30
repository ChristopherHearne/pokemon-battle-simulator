/**
 * @file This file contains the controller for the POST battle endpoint
 *
 * Purpose:
 * - Generate two random teams of pokemon 
 * - Send the resultlog of the battle along with the information about the two teams in a JSON response
 */

import { Request, Response } from 'express';
import { battleTeams } from '../services/battleService';
import { Pokemon } from '../models/Pokemon';

export const battleController = async (req: Request, res: Response) => {
    try {
        const team1Details = await Pokemon.aggregate([{ $sample: { size: 6 } }]);
        const team2Details = await Pokemon.aggregate([{ $sample: { size: 6 } }]);
		const battleLog = battleTeams(team1Details, team2Details)
        res.status(200).json({team1Details, team2Details, battleLog});
    } catch (error) {
        console.error('Error during battle simulation:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};