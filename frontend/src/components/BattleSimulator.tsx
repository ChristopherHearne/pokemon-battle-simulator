import { useState } from 'react';
import { config } from '../config';
import axios from 'axios';
import '../styles/BattleSimulator.css'

interface NextEvolution {
	num: string;
	name: string;
  }
  
interface Pokemon extends Document {
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

const BattleSimulator = () => {
  const [team1, setTeam1] = useState<Pokemon[]>([])
  const [team2, setTeam2] = useState<Pokemon[]>([])
  const [battleLog, setBattleLog] = useState<string[]>()
  const handleBattle = async () => {
    try {
      const response = await axios.post(config.api_url);
      setTeam1(response.data.team1Details)
      setTeam2(response.data.team2Details)
      setBattleLog(response.data.battleLog)
    } catch (error) {
      console.error('Error during battle:', error);
    }
  };

  return (
    <div>
      <h1>Pokémon Battle Simulator</h1>
      <button onClick={handleBattle}>Start Battle</button>
      <h4>Team 1: </h4>
      <div className='team-listing'>
        {team1.map((team1Pokemon, index) => (
          <p key={index}>{team1Pokemon.name}</p>
        ))}
      </div>
      <h4>Team 2: </h4>
      <div className='team-listing'>
        {team2.map((team2Pokemon, index) => (
          <p key={index}>{team2Pokemon.name}</p>
        ))}
      </div>
      <h2>Battlelog: </h2>
      <div className='battle-log' style={{whiteSpace: 'pre-line'}}>
        <p>{battleLog}</p>
      </div>
    </div>
  );
};

export default BattleSimulator;