/**
 * @file This file contains the battle logic for the solution
 * Logic assumes both Pokemon have 100 health and takes turns dealing a random damage between 1-20. Damage is doubled if the Attackers type is one of the Defenders weaknesses. Pokemon that wins the round stays on
 * Purpose:
 * - Simulate a battle based on battle logic
 * - Return a detailed battle log string to show in client
 */

import { Pokemon } from '../models/Pokemon';

const calculateDamage = (attacker: Pokemon, defender: Pokemon): number => {
  const isTypeWeakness = attacker.type.some(type => defender.weaknesses.includes(type))
  const calcDamage = Math.floor(Math.random() * 20) + 1
  return isTypeWeakness ? calcDamage * 2 : calcDamage // Do double damage if attackers type is defenders weakness
};

const battlePokemon = (pokemon1: Pokemon, pokemon2: Pokemon): { log: string, winner: Pokemon | null } => {
  let pokemon1Health = 100;
  let pokemon2Health = 100;
  
  let log = `${pokemon1.name} vs ${pokemon2.name}\n`;

  while (pokemon1Health > 0 && pokemon2Health > 0) {
    const damageTo2 = calculateDamage(pokemon1, pokemon2);
    pokemon2Health -= damageTo2;
    log += `${pokemon1.name} deals ${damageTo2} damage to ${pokemon2.name}. ${pokemon2.name} has ${pokemon2Health} health left.\n`;

    if (pokemon2Health <= 0) {
      log += `${pokemon2.name} is defeated!\n`;
      return { log: log + `${pokemon1.name} wins the round!`, winner: pokemon1 };
    }

    const damageTo1 = calculateDamage(pokemon2, pokemon1);
    pokemon1Health -= damageTo1;
    log += `${pokemon2.name} deals ${damageTo1} damage to ${pokemon1.name}. ${pokemon1.name} has ${pokemon1Health} health left.\n`;

    if (pokemon1Health <= 0) {
      log += `${pokemon1.name} is defeated!\n`;
      return { log: log + `${pokemon2.name} wins the round!`, winner: pokemon2 };
    }
  }

  return { log, winner: null };
};

export const battleTeams = (team1: Pokemon[], team2: Pokemon[]): string => {
  let log = `Starting battle between Team 1 and Team 2\n`;
  let team1Index = 0;
  let team2Index = 0;

  while (team1Index < team1.length && team2Index < team2.length) {
    const pokemon1 = team1[team1Index];
    const pokemon2 = team2[team2Index];

    log += `\n${pokemon1.name} from Team 1 battles ${pokemon2.name} from Team 2 \n`;
    const battleResult = battlePokemon(pokemon1, pokemon2);
    log += battleResult.log;

    if (battleResult.winner === pokemon1) {
      team2Index++;
    } else {
      team1Index++;
    }
  }

  if (team1Index === team1.length) {
    log += `\nTeam 2 wins the battle!`;
  } else {
    log += `\nTeam 1 wins the battle!`;
  }

  return log;
};