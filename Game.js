class Game {
	totalTurns = 10;
	turnLeft = 10;
	playersList = [];
	playersTurns = [];
	currentPlayerIndex = 0;
startGame = () => {
	while(this.turnLeft > 0){
		this.newTurn();
		this.startTurn();
	}
}
addPlayer = (player) => {
	this.playersList.push(player);
}


startTurn = () => {
	console.log(`It's turn number ${10 - this.turnLeft}`);
	let activePlayer = this.getRandomPlayer(this.playersList,((player) => player.isAlive()) )

console.log(`It's time for ${activePlayer.name} to play`);
let filterVictim = (player) => { 
	return player.isAlive() && player.name!= activePlayer.name
}

let activeVictim = this.getRandomPlayer(this.playersList,filterVictim)
activePlayer.dealDamage(activeVictim)	
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
	console.log("Game is finished ! Winners are :");		
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
		if (!player.isAlive()) {
			console.log(`${player.name} is dead!`);
		} else {
			console.log(`${player.name} is alive and kicking, with ${player.hp} PV, ${player.dmg} dmg and ${player.mana} mana`);
				}
	});
}
}

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
game.startGame();