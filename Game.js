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
		this.playersList.forEach(player) => {
			player.newTurn();
		};
			// add each turn one player if he/she is alive 
			// and then pick a player randomly like getRandom
	
}

	nextTurn = () => {
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
