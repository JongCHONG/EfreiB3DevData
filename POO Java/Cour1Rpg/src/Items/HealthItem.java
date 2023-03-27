package Items;

import enums.HealthItems;

public class HealthItem {

	private HealthItems HealthItemName;
	private String HealthItemDescription;
	private int HealthItemValue;
	
	public HealthItem(HealthItems HealthItemName, String healthItemDescription, int healthItemValue) {
		super();
		this.HealthItemName = HealthItemName;
		HealthItemDescription = healthItemDescription;
		HealthItemValue = healthItemValue;
	}

	public HealthItems getHealthItemName() {
		return HealthItemName;
	}

	public void setHealthItemName(HealthItems healthItemName) {
		HealthItemName = healthItemName;
	}

	public String getHealthItemDescription() {
		return HealthItemDescription;
	}

	public void setHealthItemDescription(String healthItemDescription) {
		HealthItemDescription = healthItemDescription;
	}

	public int getHealthItemValue() {
		return HealthItemValue;
	}

	public void setHealthItemValue(int healthItemValue) {
		HealthItemValue = healthItemValue;
	}
	
	
	
}
