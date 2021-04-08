class Healer extends Character {
	name = "Moana";
	hp = 8;
	dmg = 2; 
	mana = 200;

	// ok, add something like special attack

	heal = () => {
		if (this.mana >= 25) {
			this.mana -= 25;
			this.hp += 8;
		}
	}
}