class Healer extends Character {
	name = "Moana";
	hp = 8;
	dmg = 2; 
	mana = 200;

	heal = () => {
		if (this.mana >= 25) {
			this.mana -= 25;
			this.hp += 8;
		}
	}
}