class Game {

	turnLeft = 10;
	playersList = [];
	activePlayer;
	activeVictim;

	

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
	if (10 - this.turnLeft === 0) {
		console.log(`Let's Fight 💪🏼`);
		console.log( "Here are the players :",this.playersList.map(({ name }) => name).join(', '));

	} else {
		console.log(`It's turn number ${10 - this.turnLeft} ⌛️ . There are ${this.turnLeft} turns left ⏳`);
		console.log(`-----------------------------------------------------------------`)

	}

	if (!this.playerIsSet())  {
		console.log(`Please choose a Player  🤔`);
		return
	}
	
	let filterVictim = (player) => { 
		return player.isAlive() && player.name!= this.activePlayer.name
	}

	let activeVictim = this.getRandomPlayer(this.playersList,filterVictim)
	//console.log(activeVictim);
	
}

setPlayer = (chosenPlayer) => {
	let validPlayer = this.playersList.filter((player)=> player.isAlive() && player.name == chosenPlayer.name) 
	if (validPlayer.length === 0) {
		console.log("Player is not valid") 
	}  else {
		this.activePlayer = chosenPlayer
		console.log(`It's time for ${this.activePlayer.name} to play 🦸`);
		console.log( "Choose an enemy and attack :",this.playersList.map(({ name }) => name).join(', '));
	}
	//console.log(this.activePlayer);
}

playerIsSet = () => {
	return typeof this.activePlayer !== 'undefined'
}

activePlayerAttack = (victim) =>  {
if (this.playerIsSet()) {
	this.newTurn();
	this.startTurn();
	this.activePlayer.dealDamage(victim);
	console.log(`-----------------------------------------------------------------`)

	console.log(`😱 ${victim.name} not gonna sit and take it, s/he figths back haha 🤣`)
	console.log(`-----------------------------------------------------------------`)
	victim.dealDamage(this.activePlayer)
	 }
  
}

activePlayerSpecialAttack = (victim) =>  {
if (this.playerIsSet()) {
	this.newTurn();
	this.startTurn();
	console.log(`It's time for ${this.activePlayer.name} to use a special attack 🔫`)
	
	this.activePlayer.specialAttack(victim);
	}
}


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
	console.log("Game is over! ⛔️ Winners are  🏆:");		
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
		console.log(`${player.name} is dead! 😵`);
			}
});
}
}

const Fefe = new Wizard('Fefe');
const Grace = new Fighter('Grace');
const Ulder = new Paladin('Ulder');
const Moana = new Monk('Moana');
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