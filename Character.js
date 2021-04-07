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
	}
	
	else
		this.hp -= dmg;
		
	if (this.hp <= 0) {
		this.hp = 0;
		this.status = "loser";
		console.log(`${this.name} just died !`);
	}
	return dmg;
}



dealDamage = (dmg, victim) => {
		if (this.status != "playing") {
			console.log("I can't attack because i'm not playing");
			return false;
		}
		if (victim != null && victim.status != "playing") {
			console.log(`Impossible to attack ${victim.name} because he is not playing`);
			return false;
		}
		if (dmg != 0) {
			let damageDealed = victim.takeDamage(dmg);
			console.log(`${this.name} is attacking ${victim.name}. He deals him ${damageDealed}. ${victim.name} got ${victim.hp} hp left`);
			if (!victim.isAlive())
				this.mana += 20;
		}
		return true;
	}
}