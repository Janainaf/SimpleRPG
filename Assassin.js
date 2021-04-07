class Assassin extends Character {
	name = 'Carl';
	hp = 6;
	dmg = 6;
	mana = 20;

	shadowAttack = (victim) => {
		if (this.dealDamage (0, victim) && this.mana >= 20) {
			this.mana -= 20;
			// nao perdera pontos no proximo turn
			// proximo turno ele tera mais 7 de ataque e perdera 7 se o inimigo nao morrer
		}
	}
}