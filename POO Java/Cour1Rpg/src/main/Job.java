package main;

import enums.JobNames;
import enums.WeaponNames;
import main.Equipements.Weapon;
import main.Jobs.Sorcerer;
import main.Jobs.Thief;
import main.Jobs.Warrior;

public class Job implements Warrior, Thief, Sorcerer {

	private int HealthPoints;
	private String JobName;
	private int damage;
	private Weapon weapon;
	
	public Job(int HealthPoints, String jobName) {
		super();
		this.HealthPoints = HealthPoints;
		this.JobName = jobName;
		if (this.JobName == JobNames.WARRIOR.getJobName()) {
			this.weapon = new Weapon(WeaponNames.STORMBREAKER.getWeaponName(), 40, 10);
		}
		if (this.JobName == JobNames.SORCERER.getJobName()) {
			this.weapon = new Weapon(WeaponNames.ELDERWAND.getWeaponName(), 5, 10);
		}
		if (this.JobName == JobNames.THIEF.getJobName()) {
			this.weapon = new Weapon(WeaponNames.STING.getWeaponName(), 30, 10);
		}
	}

	
	@Override
	public String toString() {
		return "Job [HealthPoints=" + HealthPoints + ", JobName=" + JobName + ", damage=" + damage + "]";
	}

	public int getHealthPoints() {
		return HealthPoints;
	}

	public void setHealthPoints(int HealthPoints) {
		this.HealthPoints = HealthPoints;
	}

	public String getJobName() {
		return JobName;
	}

	public void setJobName(String jobName) {
		JobName = jobName;
	}

	public int getDamage() {
		return damage;
	}

	public void setDamage(int damage) {
		this.damage = damage;
	}

	@Override
	public int guard() {
		return 20;
	}

	@Override
	public int stealLife() {
		return 2;
	}

	@Override
	public int firebolt() {
		return 30;
	}


	public Weapon getWeapon() {
		return weapon;
	}


	public void setWarriorWeapon(Weapon warriorWeapon) {
		this.weapon = warriorWeapon;
	}
	
	
}
