import { ansiStyles } from '../common/constants/color.constants';
import { parseFormat } from '../common';

export class ColorService {
  private static message: string;
  private static readonly styles: string[] = [];

  static bgBlack = (text?: string): any =>
    this._parse('bgBlack', text);

  static bgBrightBlack = (text?: string): any =>
    this._parse('bgBrightBlack', text);

  static bgBlue = (text?: string): any => this._parse('bgBlue', text);

  static bgBrightBlue = (text?: string): any =>
    this._parse('bgBrightBlue', text);

  static bgCyan = (text?: string): any => this._parse('bgCyan', text);

  static bgBrightCyan = (text?: string): any =>
    this._parse('bgBrightCyan', text);

  static bgGreen = (text?: string): any =>
    this._parse('bgGreen', text);

  static bgBrightGreen = (text?: string): any =>
    this._parse('bgBrightGreen', text);

  static bgMagenta = (text?: string): any =>
    this._parse('bgMagenta', text);

  static bgBrightMagenta = (text?: string): any =>
    this._parse('bgBrightMagenta', text);

  static bgRed = (text?: string): any => this._parse('bgRed', text);

  static bgBrightRed = (text?: string): any =>
    this._parse('bgBrightRed', text);

  static bgYellow = (text?: string): any =>
    this._parse('bgYellow', text);

  static bgBrightYellow = (text?: string): any =>
    this._parse('bgBrightYellow', text);

  static bgWhite = (text?: string): any =>
    this._parse('bgWhite', text);

  static bgBrightWhite = (text?: string): any =>
    this._parse('bgBrightWhite', text);

  static black = (text?: string): any => this._parse('black', text);

  static brightBlack = (text?: string): any => this._parse('brightBlack', text);

  static blue = (text?: string): any => this._parse('blue', text);

  static brightBlue = (text?: string): any =>
    this._parse('brightBlue', text);

  static cyan = (text?: string): any => this._parse('cyan', text);

  static brightCyan = (text?: string): any =>
    this._parse('brightCyan', text);

  static green = (text?: string): any => this._parse('green', text);

  static brightGreen = (text?: string): any =>
    this._parse('brightGreen', text);

  static magenta = (text?: string): any =>
    this._parse('magenta', text);

  static brightMagenta = (text?: string): any =>
    this._parse('brightMagenta', text);

  static red = (text?: string): any => this._parse('red', text);

  static brightRed = (text?: string): any =>
    this._parse('brightRed', text);

  static white = (text?: string): any => this._parse('white', text);

  static brightWhite = (text?: string): any =>
    this._parse('brightWhite', text);

  static yellow = (text?: string): any => this._parse('yellow', text);

  static brightYellow = (text?: string): any =>
    this._parse('brightYellow', text);

  static bold = (text?: string): any => this._parse('bold', text);

  static dim = (text?: string): any => this._parse('dim', text);

  static hidden = (text?: string): any => this._parse('hidden', text);

  static inverse = (text?: string): any =>
    this._parse('inverse', text);

  static italic = (text?: string): any => this._parse('italic', text);

  static strikeThrough = (text?: string): any =>
    this._parse('strike', text);

  static underline = (text?: string): any =>
    this._parse('underline', text);

  static blink = (text?: string): any => this._parse('blink', text);

  static reset = () => this._parse('reset');

  public static log = (message: string) => this._parse('reset', message);

  public static debug = (message: string) => this._parse('green', message);

  public static error = (message: string) => this._parse('red', message);

  public static info = (message: string) => this._parse('blue', message);

  public static warn = (message: string) => this._parse('yellow', message);

  private static _parse(style: string, message?: string): any {
    if (style === 'reset' && !message) {
      return parseFormat(ansiStyles[style]);
    }

    if (style !== 'reset' && !message) {
      this.styles.push(style);

      return this;
    }

    this.styles.push(style);

    let result = message;
    this.styles.forEach((format) => {
      result = parseFormat(ansiStyles[format], result);
    });
    this.styles.splice(0, this.styles.length);

    return result;
  }
}
