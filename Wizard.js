class Healer extends Character {
	name = "Féfé";
	hp = 10;
	dmg = 2; 
	mana = 200;

	fireballAttack = (victim) => {
			if (this.dealDamage(5, victim) && this.mana >= 25) {
				this.mana -= 25;

		}
	}
}