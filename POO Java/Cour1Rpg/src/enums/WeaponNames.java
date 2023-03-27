package enums;

public enum WeaponNames {
	STORMBREAKER("Stormbreaker"),
	ELDERWAND("Elder Wand"),
	STING("Sting");
	
	private final String WeaponName;

	private WeaponNames(String WeaponName) {
		this.WeaponName = WeaponName;
	}

	public String getWeaponName() {
		return WeaponName;
	}
	
	
}
