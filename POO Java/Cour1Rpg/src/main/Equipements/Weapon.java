package main.Equipements;

public class Weapon extends EquipmentStats{

	private String WeaponName;
	
	public Weapon(String WeaponName, int attack, int defense) {
		super(attack, defense);
		this.WeaponName = WeaponName;
	}

	public String getWeaponName() {
		return WeaponName;
	}

	public void setWeaponName(String WeaponName) {
		this.WeaponName = WeaponName;
	}



}
