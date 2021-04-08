
 class Game {

		turnLeft = 10;
		playersList = [];
		

	startGame = () => {
		//while(this.turnLeft > 0){
			this.startTurn();
		//	this.newTurn();
	//	}
	}

	addPlayer = (player) => {
		this.playersList.push(player);
	}

	
	startTurn = () => {
		console.log(`It's turn number ${11 - this.turnLeft} 👊. There are ${this.turnLeft-1} turns left`);
		let activePlayer = this.getRandomPlayer(this.playersList,((player) => player.isAlive()) )
		
		console.log(`It's time for ${activePlayer.name} to play`);
		let filterVictim = (player) => { 
			return player.isAlive() && player.name!= activePlayer.name
		}

		let activeVictim = this.getRandomPlayer(this.playersList,filterVictim)
		activePlayer.dealDamage(activeVictim)	
		console.log("--------------------------");

		console.log("Some Stats about the game");
		game.watchStats(); 
		console.log("--------------------------");
	}

	// activePlayer = () => {
	// 	this.getRandomPlayer(this.playersList,((player) => player.isAlive()));
	// 	console.log(`It's time for ${activePlayer.name} to play`);
	//  };

	// activePlayerAttacks = (victim) =>  {
	// 	Carl.dealDamage(victim);
	//   }


	getRandom = (array) => {
		return Math.floor(Math.random() * array.length);
	}

	getRandomPlayer = (array, filterFunction) => {
		let alivePlayers = array.filter(filterFunction)		 
		let randomIndex = this.getRandom(alivePlayers)	 
		let activePlayer = alivePlayers[randomIndex];
		return activePlayer
	}

	newTurn = () => {
	this.turnLeft -= 1;
	if (this.turnLeft <=0) {
		console.log("Game is over! Winners are :");		
		this.playersList.forEach((player) => {
			if (player.isAlive()) {
				player.status = "winner";
				console.log(player.name);
			}
		});
	}
}
watchStats = () => {
	this.playersList.forEach((player) => {
		if (player.isAlive()) {
			console.log(`${player.name} is alive and kicking, with ${player.hp} PV, ${player.dmg} dmg and ${player.mana} mana`); 
		} else {
			console.log(`${player.name} is dead!`);
				}
	});
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
