package main.Equipements;

public class EquipmentStats {
	private int attack;
	private int defense;
	
	public EquipmentStats(int attack, int defense) {
		super();
		this.attack = attack;
		this.defense = defense;
	}

	public int getAttack() {
		return attack;
	}

	public void setAttack(int playerAttackDamage) {
		this.attack = playerAttackDamage;
	}

	public int getDefense() {
		return defense;
	}

	public void setDefense(int defense) {
		this.defense = defense;
	}
	
	
}
