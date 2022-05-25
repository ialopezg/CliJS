import { ConsoleColor } from '../constants';

export class ConsoleColorService {
  static bgBlack(text: string): string {
    return `${ConsoleColor.BG_BLACK}${text}${ConsoleColor.RESET}`;
  }

  static bgBlue(text: string): string {
    return `${ConsoleColor.BG_BLUE}${text}${ConsoleColor.RESET}`;
  }

  static bgCyan(text: string): string {
    return `${ConsoleColor.BG_CYAN}${text}${ConsoleColor.RESET}`;
  }

  static bgGreen(text: string): string {
    return `${ConsoleColor.BG_GREEN}${text}${ConsoleColor.RESET}`;
  }

  static bgMagenta(text: string): string {
    return `${ConsoleColor.BG_MAGENTA}${text}${ConsoleColor.RESET}`;
  }

  static bgRed(text: string): string {
    return `${ConsoleColor.BG_RED}${text}${ConsoleColor.RESET}`;
  }

  static bgYellow(text: string): string {
    return `${ConsoleColor.BG_YELLOW}${text}${ConsoleColor.RESET}`;
  }

  static bgWhite(text: string): string {
    return `${ConsoleColor.BG_WHITE}${text}${ConsoleColor.RESET}`;
  }

  static black(text: string): string {
    return `${ConsoleColor.FG_BLACK}${text}${ConsoleColor.RESET}`;
  }

  static blue(text: string): string {
    return `${ConsoleColor.FG_BLUE}${text}${ConsoleColor.RESET}`;
  }

  static cyan(text: string): string {
    return `${ConsoleColor.FG_CYAN}${text}${ConsoleColor.RESET}`;
  }

  static green(text: string): string {
    return `${ConsoleColor.FG_GREEN}${text}${ConsoleColor.RESET}`;
  }

  static magenta(text: string): string {
    return `${ConsoleColor.FG_MAGENTA}${text}${ConsoleColor.RESET}`;
  }

  static red(text: string): string {
    return `${ConsoleColor.FG_RED}${text}${ConsoleColor.RESET}`;
  }

  static white(text: string): string {
    return `${ConsoleColor.FG_WHITE}${text}${ConsoleColor.RESET}`;
  }

  static yellow(text: string): string {
    return `${ConsoleColor.FG_YELLOW}${text}${ConsoleColor.RESET}`;
  }
}
