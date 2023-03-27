package enums;

public enum HealthItems {
	POTION("+50 HP");
	
	private final String Description;

	HealthItems(String Description) {
		this.Description = Description;
	}

	public String getDescription() {
		return Description;
	}

}
