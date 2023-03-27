package main;

public class Monster {

	private String monsterName;
	private int monsterHealth;
	private int monsterAttack;
	
	public Monster(String monsterName, int monsterHealth) {
		super();
		this.monsterName = monsterName;
		this.monsterHealth = monsterHealth;
	}
	
	@Override
	public String toString() {
		return "Monster [monsterName=" + monsterName + ", monsterHealth=" + monsterHealth + "]";
	}

	public String getMonsterName() {
		return monsterName;
	}
	public void setMonsterName(String monsterName) {
		this.monsterName = monsterName;
	}
	public int getMonsterHealth() {
		return monsterHealth;
	}
	public void setMonsterHealth(int monsterHealth) {
		this.monsterHealth = monsterHealth;
	}
	
	public int getMonsterAttack() {
		return monsterAttack;
	}

	public void setMonsterAttack(int damage) {
		this.monsterAttack = damage;
	}
}
