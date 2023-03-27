package main;

import java.util.List;
import java.util.Scanner;

import enums.Colors;
import enums.JobNames;
import enums.Texts;
import main.Equipements.Weapon;
import main.Helpers.Helpers;

public class Main {
  public static void main(String[] args) {

	Scanner scanner = new Scanner(System.in);
	Boolean toContinue = true;
	
	while(toContinue == true) {		
		
		Dungeon dndDungeon = new Dungeon("Dungeon of the Lost Treasure", 10);
	    List<Stage> stages = dndDungeon.getStages();
	    List<Character> Players = Character.getPlayers();
	    
		System.out.println(Texts.ENTERPLAYERNAME.getText());
		String PlayerName = scanner.nextLine();
		
		Texts.separator(Texts.WELCOME.getText() + dndDungeon.getName(), Texts.EQUAL.getText());
		
		dndDungeon.printStages(stages);
		
		System.out.println(Texts.CHOOSEJOB.getText());
		int PlayerChoice = Helpers.checkingNumber(scanner, 1, 3);
		String JobName = JobNames.getJobNameByChoice(PlayerChoice - 1);
		
	    Job job = new Job(100, JobName);
	    Character Player1 = new Character(PlayerName, job);
	
	    Character.addCharacter(Player1);
	    
	    Weapon Player1Weapon = Players.get(0).getWeapon();
		
	    Texts.separator(Texts.PLAYER1.getText() + Players.get(0).toString(), Texts.UNDERLINE.getText());
	    
		for (int stageNumber = 0; stageNumber < stages.size(); stageNumber++) {
			int round = 0;
			Monster Monster = stages.get(stageNumber).getMonsters().get(0);		
				Texts.stageAnnounce(stages, stageNumber);
				while (Monster.getMonsterHealth() > 0 && Player1.getHealthPoints() > 0) {
				    int randomNumber = Helpers.getRandomNumber(5, 30);
					int playerAttackDamage = Player1.getWeapon().getAttack() + randomNumber;
					int monsterAttackDamage = randomNumber + 13;
					round = round + 1; 
					
					System.out.println("\nRound " + round + "\n");
					Texts.stageMonster(Monster);
					System.out.println(Player1.getCharacterName() +" - HP : " + Helpers.playerHpLeft(Player1.getHealthPoints())+ "\n");
					
					System.out.println(Texts.CHOOSEACTION.getText());
					System.out.println(Texts.ATTACK.getText());
					if (job.getJobName() == JobNames.WARRIOR.getJobName()) {
						System.out.println(Texts.GUARD.getText());
					}
					if (job.getJobName() == JobNames.SORCERER.getJobName()) {
						System.out.println(Texts.FIREBOLT.getText());
					}
					if (job.getJobName() == JobNames.THIEF.getJobName()) {
						System.out.println(Texts.STEALLIFE.getText());
					}
					PlayerChoice = Helpers.checkingNumber(scanner, 1, 2);
					
					Helpers.playerAction(job, PlayerChoice, Monster, Player1, playerAttackDamage, monsterAttackDamage, Player1Weapon);
					System.out.println("\n-----------------------------");
				}
				//Player 1 is dead
				if (Player1.getHealthPoints() <= 0) {
					System.out.println(Colors.printInColor(Texts.WASTED.getText(), Colors.BOLD_RED));
					stageNumber = stages.size() - 1;
				} else {	
					//Stage cleared
					Helpers.processingStages(Monster, Player1, scanner, stages, stageNumber);
				}
		}
		
		System.out.println(Texts.RESTART.getText() + Texts.PRESS1FORYES.getText() + Texts.PRESS2FORNO.getText());
		PlayerChoice = Helpers.checkingNumber(scanner, 1, 2);
		if(PlayerChoice == 1) {
			toContinue = true;
		} else {
			toContinue = false;
			System.out.println("\nGame ended...");
		}
	} 
	scanner.close();
  }
}
