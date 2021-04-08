
 class Game {

		turnLeft = 10;
		playersList = [];
		activePlayer;
		

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
		console.log( "Here are the players :",this.playersList.map(({ name }) => name).join(', '));
		
		if (typeof this.activePlayer === 'undefined')  {
			console.log(`Please choose a Player`);
			return
		}

		console.log(`It's time for ${this.activePlayer.name} to play`);
		
		let filterVictim = (player) => { 
			return player.isAlive() && player.name!= this.activePlayer.name
		}

		let activeVictim = this.getRandomPlayer(this.playersList,filterVictim)
		this.activePlayer.dealDamage(activeVictim)	
		console.log(activeVictim);
		
	}

	setPlayer = (playerName) => {
		let validPlayer = this.playersList.filter((player)=> player.isAlive() && player.name == playerName) 
		if (validPlayer.length === 0) {
			console.log("Player is not valid") 
		}  else {
			this.activePlayer = validPlayer[0]
		}
		console.log(this.activePlayer);
	}


	// activePlayerAttacks = (victim) =>  {
	// 	activePlayer.dealDamage(victim);
	//   }

	// activePlayerSpecialAttack = (victim) =>  {
	// 	Ulder.specialAttack(victim);
	//    }


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

const Fefe = new Wizard('Fefe');
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
game.addPlayer(Fefe);

game.startGame();
