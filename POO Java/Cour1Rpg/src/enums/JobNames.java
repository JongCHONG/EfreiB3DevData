package enums;

public enum JobNames {
    WARRIOR("Warrior"),
    SORCERER("Sorcerer"),
    THIEF("Thief");

    private final String jobName;

    JobNames(String jobName) {
        this.jobName = jobName;
    }

    public String getJobName() {
        return jobName;
    }
    
    public static String getJobNameByChoice(int jobChoice) {
        JobNames[] jobNames = JobNames.values();
        if (jobChoice >= 0 && jobChoice < jobNames.length) {
            return jobNames[jobChoice].getJobName();
        } else {
            return null; // or throw an exception
        }
    }
}