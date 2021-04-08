class Assassin extends Character {
	name = 'Carl';
	hp = 6;
	dmg = 6;
	mana = 20;

	shadowAttack = (victim) => {
		if (this.dealDamage (0, victim) && this.mana >= 20) {
			this.mana -= 20;
			
		// if he uses special attack, he doesnt suffer a hit in the next round 
		// and his attack will have a dmg+7 
		// but if victim is not dead, he will lose 7dmg
		}
	}
}