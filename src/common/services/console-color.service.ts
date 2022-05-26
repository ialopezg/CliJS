import { Color, Transformation } from '../enums';

export class ConsoleColorService {
  static bgBlack(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.BG_BLACK,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static bgBrightBlack(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.BG_BRIGHT_BLACK,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static bgBlue(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.BG_BLUE,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static bgBrightBlue(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.BG_BRIGHT_BLUE,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static bgCyan(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.BG_CYAN,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static bgBrightCyan(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.BG_BRIGHT_CYAN,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static bgGreen(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.BG_GREEN,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static bgBrightGreen(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.BG_BRIGHT_GREEN,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static bgMagenta(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.BG_MAGENTA,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static bgBrightMagenta(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.BG_BRIGHT_MAGENTA,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static bgRed(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.BG_RED,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static bgBrightRed(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.BG_BRIGHT_RED,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static bgBrightYellow(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.BG_BRIGHT_YELLOW,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static bgYellow(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.BG_YELLOW,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static bgWhite(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.BG_WHITE,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static bgBrightWhite(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.BG_BRIGHT_WHITE,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static black(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.FG_BLACK,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static brightBlack(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.FG_BRIGHT_BLACK,
    )}${text}${ConsoleColorService.getColor()}`;
  }

  static blue(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.FG_BLUE,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static brightBlue(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.FG_BRIGHT_BLUE,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static cyan(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.FG_CYAN,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static brightCyan(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.FG_BRIGHT_CYAN,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static brightGreen(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.FG_BRIGHT_GREEN,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static green(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.FG_GREEN,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static magenta(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.FG_MAGENTA,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static brightMagenta(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.FG_BRIGHT_MAGENTA,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static red(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.FG_RED,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static brightRed(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.FG_BRIGHT_RED,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static white(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.FG_WHITE,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static brightWhite(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.FG_BRIGHT_WHITE,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static brightYellow(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.FG_BRIGHT_YELLOW,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static yellow(text: string): string {
    return `${ConsoleColorService.getColor(
      Color.FG_YELLOW,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static bold(text: string): string {
    return `${ConsoleColorService.getTransformation(
      Transformation.BOLD,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static dim(text: string) {
    return `${ConsoleColorService.getTransformation(
      Transformation.DIM,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static hidden(text: string) {
    return `${ConsoleColorService.getTransformation(
      Transformation.HIDDEN,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static inverse(text: string) {
    return `${ConsoleColorService.getTransformation(
      Transformation.INVERSE,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static italic(text: string) {
    return `${ConsoleColorService.getTransformation(
      Transformation.ITALIC,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static strikeThrough(text: string) {
    return `${ConsoleColorService.getTransformation(
      Transformation.STRIKETHROUGH,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static underline(text: string) {
    return `${ConsoleColorService.getTransformation(
      Transformation.UNDERLINE,
    )}${text}${ConsoleColorService.reset()}`;
  }

  static reset() {
    return ConsoleColorService.getTransformation();
  }

  static getTransformation(code?: Transformation) {
    if (!code) {
      code = 0;
    }

    return `\x1b[${code}m`;
  }

  static getColor(color?: Color): string {
    if (!color) {
      color = 0;
    }

    return `\x1b[${color}m`;
  }
}
