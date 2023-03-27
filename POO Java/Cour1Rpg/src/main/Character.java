package main;

import java.util.ArrayList;

public class Character extends Job {
	//extends pour hériter les attributes de Job
	//on ne peux extend qu'une classe
	private String characterName;
	public static ArrayList<Character> Players = new ArrayList<Character>();
	

	public Character(String characterName, Job j) {
		super(j.getHealthPoints(), j.getJobName()); // apprend aux attributes de job
		this.characterName = characterName;
	}

	@Override
	public String toString() {
		return "Character [characterName=" + characterName + ", HealthPoints=" + getHealthPoints() + ", JobName=" + getJobName() + ", Weapon="+ getWeapon().getWeaponName()+"]";
	}

	public String getCharacterName() {
		return characterName;
	}

	public void setCharacterName(String characterName) {
		this.characterName = characterName;
	}

	public static ArrayList<Character> getPlayers() {
		return Players;
	}

	public static void setPlayers(ArrayList<Character> players) {
		Players = players;
	}

	public static void addCharacter(Character Player) {
		Players.add(Player);
	}
	
	
}
