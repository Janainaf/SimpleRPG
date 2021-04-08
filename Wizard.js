class Wizard extends Character {
	name = 'Fefe';
	hp = 10;
	dmg = 2; 
	mana = 200;


	fireballAttack = (victim) => {
			if (this.dealDamage(7, victim) && this.mana >= 25) {
				this.mana -= 25;
		}
	}
}