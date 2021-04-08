class Wizard extends Character {
	name = 'Fefe';
	hp = 10;
	dmg = 2; 
	mana = 200;


	specialAttack = (victim) => {
			if (this.dealDamage(victim, 7) && this.mana >= 25) {
				this.mana -= 25;
				console.log("Just so you know, Fefe used his special Attack - Purple Haze!")

		}
	}
}