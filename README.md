# Pokémon Battle Simulator

Submission of Code Test v2 by Christofer Hearne

Time spent on assigment: 6 hours

# Time constraints and thoughts
The biggest time constraint for the solution was Dockerizing the solution to be easy to build and start. After setting up the file structure and the basic template for the frontend and backend, too much time was spent on adding unnecessary docker features. This made it hard to simply start working on the rest of the requirements within the time constraint. When I started subtracting functionality and simplified the structure, it still worked as intended within the given context. Therefore, less time was spent on the rest of the requirements. If I had more time with the solution, I would therefore have focused more on the following features: 

- The ability for the user to pick the teams themselves with added parameter validation. Now it is just a simple origin validation and the teams are picked randomly from the database. 
- Custom type-inferred error-classes for better error handling
- More dataset-based battle logic. Right now it simply checks for type weakness and randomizes the damage made to pokemons during the battle. 

## Prerequisites

- Docker
- Docker Compose
- Git

## Getting Started

1. Clone the repository:

	Run the following commands in the terminal (in your root directory):

   ```git clone https://github.com/ChristopherHearne/pokemon-battle-simulator.git```

   ```cd pokemon-battle-simulator```
 2. Run the application:

	```docker compose up --build -d``` To run in detached mode

	```docker compose up --build``` To run in interactive mode
	
 3. Access the local solution

	Navigate to http://localhost:3001 in your browser to interact with the solution.

	Press the "Start Battle" button to simulate a battle between two teams.
