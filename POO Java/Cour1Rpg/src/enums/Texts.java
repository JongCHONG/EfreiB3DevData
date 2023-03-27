package enums;

import main.Monster;
import main.Stage;
import main.Equipements.Weapon;

import java.util.List;

import main.Character;

public enum Texts {
	WELCOME("\nWelcome to "),
	ENTERPLAYERNAME("\nEnter player name..."),
	CHOOSEJOB("Choose your job...\n\n1: Warrior \n2: Sorcerer \n3: Thief\n"),
	PLAYER1("\nPlayer 1 "),
	CHOOSEACTION("Choose your action..."),
	ATTACK("\n1: Attack."),
	GUARD("2: Guard.\n"),
	STEALLIFE("2: LifeSteal.\n"),
	FIREBOLT("2: Firebolt.\n"),
	NEXTSTAGE("Processing to next stage..."),
	WASTED("You are wasted!"),
	RESTART("Restart...?"),
	PRESS1FORYES("\n1: Yes."),
	PRESS2FORNO("\n2: No."),
	UNDERLINE("\u005F"),
	EQUAL("\u003D");
	
	private final String Text;
	
	Texts(String Text) {
        this.Text = Text;
    }

    public String getText() {
        return Text;
    }
    
	public static void separator(String text, String code) {
		System.out.println(text);
		System.out.println(code.repeat(text.length())+ "\n");
	}
	
    public static void playerAttackMonster(Character Player, Monster Monster, int playerAttackDamage, Weapon weapon) {
		System.out.println(
			"\n" 
			+ Player.getCharacterName() 
			+ " attacked " + Monster.getMonsterName() 
			+ " with " + weapon.getWeaponName() + "! " 
			+ Colors.printInColor(Integer.toString(playerAttackDamage)+ "!", Colors.RED));
    }
    
    public static void monsterAttackPlayer(Monster Monster, Character Player) {
    	System.out.println(
    		Monster.getMonsterName()
    		+ " attacked " + Player.getCharacterName()+ "! " 
    		+ Colors.printInColor(Monster.getMonsterAttack() + "!", Colors.RED));
    }
    
    public static void healthPointLeft(String name, int HP) {
    	System.out.println(
    		name 
    		+ " - HP left: " 
    		+ HP);
    }
    
    public static void stageMonster(Monster monster) {
    	System.out.println(
    		monster.getMonsterName() 
    		+ " - HP : " 
    		+ monster.getMonsterHealth());
    }
    
    public static void stageAnnounce(List<Stage> stages, int stageNumber) {
		System.out.println("==============================");
		System.out.println("         " + Colors.printInColor(stages.get(stageNumber).getName(), Colors.BOLD_BLACK));
		System.out.println("==============================");
    }
    
    public static void warriorUseGuard(Monster Monster, Character Player, int playerAttackDamage) {
    	System.out.println(
    		Monster.getMonsterName()
        	+ " attacked " 
    		+ Player.getCharacterName()
    		+ "! "
    		+ Player.getCharacterName()
    		+ " use Guard! "
    		+ Colors.printInColor(Monster.getMonsterAttack() + "! \n", Colors.RED)
    		+ Player.getCharacterName()
    		+ " counterattacked! " 
    		+ Colors.printInColor(Integer.toString(playerAttackDamage) + "!", Colors.RED));
    }
    
    public static void sorcererUseFirebolt(Character Player, Monster Monster, int playerAttackDamage) {
		System.out.println(
			"\n" 
			+ Player.getCharacterName() 
			+ " used Firebolt! "  
			+ Colors.printInColor(Integer.toString(playerAttackDamage)+ "!", Colors.RED));
    }
    
    public static void thiefUseStealLife(Monster Monster, Character Player, int playerAttackDamage, int lifeSteal) {
    	System.out.println(
    		Player.getCharacterName()
    		+ " use Lifesteal! "
    		+ Colors.printInColor(Integer.toString(playerAttackDamage) + "! \n", Colors.RED)
    		+ Player.getCharacterName()
    		+ " regen "
    		+ lifeSteal
    		+ " HP!" );
    }
}
