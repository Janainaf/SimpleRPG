class Character {
	name;
	hp;
	dmg;
	mana;
	status = 'playing';


isAlive = () => {
	return this.hp > 0;
}
 
takeDamage = (dmg) => {
	if (this.status != "playing") {
		console.log(`Hey why did I get attacked ? I'm not playing !`);
		return 0;
	} else { 
			this.hp -= dmg;
	}
	if (this.hp <= 0) {
		this.hp = 0;
		this.status = "loser";
		console.log(`${this.name} just died ! 😵`);
	}
	return dmg;
}



dealDamage = (victim) => {
		if (victim == null || victim.status != "playing" || !victim.isAlive()) {
			console.log(`Impossible to attack ${victim.name} because s/he is probably dead already 😵`);
			return false;
		}
		if (this.dmg != 0) {
			let damageDealed = victim.takeDamage(this.dmg);
			console.log(`${this.name} chose to attack ${victim.name} 👊. S/He hits and ouch!💥 ${damageDealed} points of damage. ${victim.name} has now only ${victim.hp} hp left 🩸`);
			if (!victim.isAlive())
				this.mana += 20;
		}
		return true;
	}

}