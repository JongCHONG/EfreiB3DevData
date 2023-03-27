package enums;

public enum Colors {
    RESET("\033[0m"),
    RED("\033[31m"),
    GREEN("\033[32m"),
    YELLOW("\033[33m"),
    BLUE("\033[34m"),
    PURPLE("\033[35m"),
    CYAN("\033[36m"),
    GRAY("\033[90m"),
    BOLD_BLACK("\033[1;30m"),
    BOLD_RED("\033[1;31m"),
    BOLD_GREEN("\033[1;32m"),
    BOLD_YELLOW("\033[1;33m"),
    BOLD_BLUE("\033[1;34m"),
    BOLD_PURPLE("\033[1;35m"),
    BOLD_CYAN("\033[1;36m"),
    LIGHT_GRAY("\033[38;5;250m"),
    LIGHT_RED("\033[38;5;203m"),
    LIGHT_GREEN("\033[38;5;83m"),
    LIGHT_YELLOW("\033[38;5;227m"),
    LIGHT_BLUE("\033[38;5;39m"),
    LIGHT_PURPLE("\033[38;5;141m"),
    LIGHT_CYAN("\033[38;5;87m"),
    DARK_GRAY("\033[38;5;240m"),
    DARK_RED("\033[38;5;88m"),
    DARK_GREEN("\033[38;5;28m"),
    DARK_YELLOW("\033[38;5;136m"),
    DARK_BLUE("\033[38;5;24m"),
    DARK_PURPLE("\033[38;5;90m"),
    DARK_CYAN("\033[38;5;30m");

    private final String code;

    Colors(String code) {
        this.code = code;
    }

    @Override
    public String toString() {
        return code;
    }
    
    public static String printInColor(String message, Colors color) {
        return (color + message + Colors.RESET);
    }
}

