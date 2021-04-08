class Monk extends Character {
	name = "Moana";
	hp = 8;
	dmg = 2; 
	mana = 200;

	specialAttack = () => {
		if (this.mana >= 25) {
			this.mana -= 25;
			this.hp += 8;
			console.log("Just so you know, Moana used her skill to ...heal herself and increase her HP!")

		}
	}
}