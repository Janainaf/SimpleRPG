class Game {

		totalTurns = 10;
		turnLeft = 10;
		playersList = [];
		playersTurns = [];
		currentPlayerIndex = 0;

	startGame = () => {
			this.startTurn();
	}

	addPlayer = (player) => {
		this.playersList.push(player);
	}


	startTurn = () => {
		console.log(`It's turn number ${11 - this.turnLeft}`);
		console.log(this.playersList);
		let alivePlayers = this.playersList.filter ((player) => player.isAlive())		 
		let randomIndex = this.getRandom(alivePlayers)	 
		let activePlayer = alivePlayers[randomIndex];
		console.log(`It's time for ${activePlayer} to play`);

		let aliveVictims = alivePlayers.filter ((player) => player.name!=activePlayer.name)		 
		let randomIndexVictim = this.getRandom(aliveVictims)	 
		let activeVictim = aliveVictims[randomIndexVictim];
		console.log(activeVictim);
		activePlayer.dealDamage(activeVictim)	
		console.log(activeVictim);

	}

	getRandom = (array) => {
		return Math.floor(Math.random() * array.length);
	}

	newTurn = () => {
	this.turnLeft -= 1;
	if (this.turnLeft <= 0) {
		console.log("Game is finished ! Winners are :");		
		this.playersList.forEach((player) => {
			if (player.isAlive()) {
				player.status = "Winner!";
			}
		});
	}
}
	watchStats = () => {
		this.playersList.forEach5(player)
	}
}	

const Grace = new Fighter('Grace');
const Ulder = new Paladin('Ulder');
const Moana = new Healer('Moana');
const Draven = new Berserker('Draven');
const Carl = new Assassin('Carl');


const game = new Game();
game.addPlayer(Ulder);
game.addPlayer(Grace);
game.addPlayer(Draven);
game.addPlayer(Moana);
game.addPlayer(Carl);

game.startGame();
