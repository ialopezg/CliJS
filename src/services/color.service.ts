import { ansiStyles } from '../common/constants/color.constants';
import { parseFormat } from '../common';

export class ColorService {
  private static readonly styles: string[] = [];

  static bgBlack = (text?: string): ColorService | string =>
    this._parse('bgBlack', text);

  static bgBrightBlack = (text?: string): ColorService | string =>
    this._parse('bgBrightBlack', text);

  static bgBlue = (text?: string): ColorService | string =>
    this._parse('bgBlue', text);

  static bgBrightBlue = (text?: string): ColorService | string =>
    this._parse('bgBrightBlue', text);

  static bgCyan = (text?: string): ColorService | string =>
    this._parse('bgCyan', text);

  static bgBrightCyan = (text?: string): ColorService | string =>
    this._parse('bgBrightCyan', text);

  static bgGreen = (text?: string): ColorService | string =>
    this._parse('bgGreen', text);

  static bgBrightGreen = (text?: string): ColorService | string =>
    this._parse('bgBrightGreen', text);

  static bgMagenta = (text?: string): ColorService | string =>
    this._parse('bgMagenta', text);

  static bgBrightMagenta = (text?: string): ColorService | string =>
    this._parse('bgBrightMagenta', text);

  static bgRed = (text?: string): ColorService | string =>
    this._parse('bgRed', text);

  static bgBrightRed = (text?: string): ColorService | string =>
    this._parse('bgBrightRed', text);

  static bgYellow = (text?: string): ColorService | string =>
    this._parse('bgYellow', text);

  static bgBrightYellow = (text?: string): ColorService | string =>
    this._parse('bgBrightYellow', text);

  static bgWhite = (text?: string): ColorService | string =>
    this._parse('bgWhite', text);

  static bgBrightWhite = (text?: string): ColorService | string =>
    this._parse('bgBrightWhite', text);

  static black = (text?: string): ColorService | string =>
    this._parse('black', text);

  static brightBlack = (text?: string): ColorService | string =>
    this._parse('brightBlack', text);

  static blue = (text?: string): ColorService | string =>
    this._parse('blue', text);

  static brightBlue = (text?: string): ColorService | string =>
    this._parse('brightBlue', text);

  static cyan = (text?: string): ColorService | string =>
    this._parse('cyan', text);

  static brightCyan = (text?: string): ColorService | string =>
    this._parse('brightCyan', text);

  static green = (text?: string): ColorService | string =>
    this._parse('green', text);

  static brightGreen = (text?: string): ColorService | string =>
    this._parse('brightGreen', text);

  static magenta = (text?: string): ColorService | string =>
    this._parse('magenta', text);

  static brightMagenta = (text?: string): ColorService | string =>
    this._parse('brightMagenta', text);

  static red = (text?: string): ColorService | string =>
    this._parse('red', text);

  static brightRed = (text?: string): ColorService | string =>
    this._parse('brightRed', text);

  static white = (text?: string): ColorService | string =>
    this._parse('white', text);

  static brightWhite = (text?: string): ColorService | string =>
    this._parse('brightWhite', text);

  static yellow = (text?: string): ColorService | string =>
    this._parse('yellow', text);

  static brightYellow = (text?: string): ColorService | string =>
    this._parse('brightYellow', text);

  static bold = (text?: string): ColorService | string =>
    this._parse('bold', text);

  static dim = (text?: string): ColorService | string =>
    this._parse('dim', text);

  static hidden = (text?: string): ColorService | string =>
    this._parse('hidden', text);

  static inverse = (text?: string): ColorService | string =>
    this._parse('inverse', text);

  static italic = (text?: string): ColorService | string =>
    this._parse('italic', text);

  static strikeThrough = (text?: string): ColorService | string =>
    this._parse('strike', text);

  static underline = (text?: string): ColorService | string =>
    this._parse('underline', text);

  static blink = (text?: string): ColorService | string =>
    this._parse('blink', text);

  static reset = (): void => {
    this._parse('reset');
  };

  public static log = (message: string): string =>
    this._parse('reset', message) as string;

  public static debug = (message: string): string =>
    this._parse('green', message) as string;

  public static error = (message: string): string =>
    this._parse('red', message) as string;

  public static info = (message: string): string =>
    this._parse('blue', message) as string;

  public static warn = (message: string): string =>
    this._parse('yellow', message) as string;

  private static _parse(style: string, message?: string): ColorService | string {
    if (style === 'reset' && !message) {
      return parseFormat(ansiStyles[style]);
    }

    if (style !== 'reset' && !message) {
      this.styles.push(style);

      return this as ColorService;
    }

    this.styles.push(style);

    let result = message;
    this.styles.forEach((format) => {
      result = parseFormat(ansiStyles[format], result);
    });
    this.styles.splice(0, this.styles.length);

    return result as string;
  }
}
