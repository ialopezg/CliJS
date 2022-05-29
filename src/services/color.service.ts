import { parseFormat } from '../common';
import { colorCodes, formatCodes } from '../common/constants';

export class ColorService {
  private static readonly _styles: number[] = [];

  static bgBlack = (text?: string): any =>
    this._parse(colorCodes.bgBlack, text);

  static bgBrightBlack = (text?: string): any =>
    this._parse(colorCodes.bgBrightBlack, text);

  static bgBlue = (text?: string): any => this._parse(colorCodes.bgBlue, text);

  static bgBrightBlue = (text?: string): any =>
    this._parse(colorCodes.bgBrightBlue, text);

  static bgCyan = (text?: string): any => this._parse(colorCodes.bgCyan, text);

  static bgBrightCyan = (text?: string): any =>
    this._parse(colorCodes.bgBrightCyan, text);

  static bgGreen = (text?: string): any =>
    this._parse(colorCodes.bgGreen, text);

  static bgBrightGreen = (text?: string): any =>
    this._parse(colorCodes.bgBrightGreen, text);

  static bgMagenta = (text?: string): any =>
    this._parse(colorCodes.bgMagenta, text);

  static bgBrightMagenta = (text?: string): any =>
    this._parse(colorCodes.bgBrightMagenta, text);

  static bgRed = (text?: string): any => this._parse(colorCodes.bgRed, text);

  static bgBrightRed = (text?: string): any =>
    this._parse(colorCodes.bgBrightRed, text);

  static bgYellow = (text?: string): any =>
    this._parse(colorCodes.bgYellow, text);

  static bgBrightYellow = (text?: string): any =>
    this._parse(colorCodes.bgBrightYellow, text);

  static bgWhite = (text?: string): any =>
    this._parse(colorCodes.bgWhite, text);

  static bgBrightWhite = (text?: string): any =>
    this._parse(colorCodes.bgBrightWhite, text);

  static black = (text?: string): any => this._parse(colorCodes.black, text);

  static brightBlack = (text?: string): any =>
    this._parse(colorCodes.brightBlack, text);

  static blue = (text?: string): any => this._parse(colorCodes.blue, text);

  static brightBlue = (text?: string): any =>
    this._parse(colorCodes.brightBlue, text);

  static cyan = (text?: string): any => this._parse(colorCodes.cyan, text);

  static brightCyan = (text?: string): any =>
    this._parse(colorCodes.brightCyan, text);

  static green = (text?: string): any => this._parse(colorCodes.green, text);

  static brightGreen = (text?: string): any =>
    this._parse(colorCodes.brightGreen, text);

  static magenta = (text?: string): any =>
    this._parse(colorCodes.magenta, text);

  static brightMagenta = (text?: string): any =>
    this._parse(colorCodes.brightMagenta, text);

  static red = (text?: string): any => this._parse(colorCodes.red, text);

  static brightRed = (text?: string): any =>
    this._parse(colorCodes.brightRred, text);

  static white = (text?: string): any => this._parse(colorCodes.white, text);

  static brightWhite = (text?: string): any =>
    this._parse(colorCodes.brightWhite, text);

  static yellow = (text?: string): any => this._parse(colorCodes.yellow, text);

  static brightYellow = (text?: string): any =>
    this._parse(colorCodes.brightYellow, text);

  static bold = (text?: string): any => this._parse(formatCodes.bold, text);

  static dim = (text?: string): any => this._parse(formatCodes.dim, text);

  static hidden = (text?: string): any => this._parse(formatCodes.hidden, text);

  static inverse = (text?: string): any =>
    this._parse(formatCodes.inverse, text);

  static italic = (text?: string): any => this._parse(formatCodes.italic, text);

  static strikeThrough = (text?: string): any =>
    this._parse(formatCodes.strike, text);

  static underline = (text?: string): any =>
    this._parse(formatCodes.underline, text);

  static blink = (text?: string): any => this._parse(formatCodes.blink, text);

  static reset = () => parseFormat([0, 0]);

  private static _parse(code: any, message?: string): any {
    this._styles.push(code);
    if (message) {
      let result = message;
      this._styles.forEach((format) => {
        result = parseFormat(code, result);
      });
      this._styles.splice(0, this._styles.length);

      return result;
    }

    return this;
  }
}
