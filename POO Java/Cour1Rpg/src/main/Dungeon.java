package main;

import java.util.ArrayList;

import java.util.List;

public class Dungeon {

	//add reward (equipment)
	private String name;
	private int lvlRequired;
	private ArrayList<Stage> stages;

	public Dungeon(String name, int lvlRequired) {
		this.name = name;
		this.lvlRequired = lvlRequired;
		
		stages = new ArrayList<Stage>();
		Stage firstStage = new Stage(1, "First Stage");
		Stage secondStage = new Stage(2, "Second Stage");
		Stage thirdStage = new Stage(3, "Third Stage");
		Stage bossStage = new BossStage(4, "Boss Stage");
		stages.add(firstStage);
		stages.add(secondStage);
		stages.add(thirdStage);
		stages.add(bossStage);
		
        //for (Stage stage : stages) {
        //    System.out.println("Stage " + (stages.indexOf(stage) + 1) );
        //}
	}

	public ArrayList<Stage> getStages() {
		return stages;
	}

	public void setStages(ArrayList<Stage> stages) {
		this.stages = stages;
	}

	@Override
	public String toString() {
		return "Dungeon [name=" + name + ", lvlRequired=" + lvlRequired + ", stages=" + stages + "]";
	}
	
	public int getLvlRequired() {
		return lvlRequired;
	}

	public void setLvlRequired(int lvlRequired) {
		this.lvlRequired = lvlRequired;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
	
	public void printStages(List<Stage> stages) {
		for (int i = 0; i < stages.size(); i++) {
		    Stage stage = stages.get(i);
		    System.out.println("Stage " + (i + 1) + ": " + stage.getName());
			for (int j1 = 0; j1 < stage.getMonsters().size(); j1++) {
				Monster monster1 = stage.getMonsters().get(j1);
					System.out.println(monster1.toString() + "\n");
			}
		}
		System.out.println("========================================\n");
	}
	
}
