class Assassin extends Character {
	name = 'Carl';
	hp = 6;
	dmg = 6;
	mana = 20;

	shadow = (victim) => {
		if (this.dealDamage (0, victim) && this.mana >= 20) {
			this.mana -= 20;
			this.protection = true; // nao sera tocado no proximo turno
			// proximo turno ele tera mais 7 de ataque e perdera 7 se o inimigo nao morrer
		}
	}
}