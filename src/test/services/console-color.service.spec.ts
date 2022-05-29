import { Color } from '../../';
import { parseFormat } from '../../common';

describe('ConsoleColorService', () => {
  describe('Colors', () => {
    it('should print console texts with all available background colors', () => {
      const bgBlack = `\x1b[40mHello World!\x1b[49m`;
      const bgRed = `\x1b[41mHello World!\x1b[49m`;
      const bgGreen = `\x1b[42mHello World!\x1b[49m`;
      const bgYellow = `\x1b[43mHello World!\x1b[49m`;
      const bgBlue = `\x1b[44mHello World!\x1b[49m`;
      const bgMagenta = `\x1b[45mHello World!\x1b[49m`;
      const bgCyan = `\x1b[46mHello World!\x1b[49m`;
      const bgWhite = `\x1b[47mHello World!\x1b[49m`;

      expect(Color.bgBlack('Hello World!')).toBe(bgBlack);
      expect(Color.bgRed('Hello World!')).toBe(bgRed);
      expect(Color.bgGreen('Hello World!')).toBe(bgGreen);
      expect(Color.bgYellow('Hello World!')).toBe(bgYellow);
      expect(Color.bgBlue('Hello World!')).toBe(bgBlue);
      expect(Color.bgMagenta('Hello World!')).toBe(bgMagenta);
      expect(Color.bgCyan('Hello World!')).toBe(bgCyan);
      expect(Color.bgWhite('Hello World!')).toBe(bgWhite);
    });

    it('should print console texts with all available bright background colors', () => {
      const bgBrightBlack = parseFormat([100, 49], 'Hello World!');
      const bgBrightRed = parseFormat([101, 49], 'Hello World!');
      const bgBrightGreen = parseFormat([102, 49], 'Hello World!');
      const bgBrightYellow = parseFormat([103, 49], 'Hello World!');
      const bgBrightBlue = parseFormat([104, 49], 'Hello World!');
      const bgBrightMagenta = parseFormat([105, 49], 'Hello World!');
      const bgBrightCyan = parseFormat([106, 49], 'Hello World!');
      const bgBrightWhite = parseFormat([107, 49], 'Hello World!');

      expect(Color.bgBrightBlack('Hello World!')).toBe(bgBrightBlack);
      expect(Color.bgBrightRed('Hello World!')).toBe(bgBrightRed);
      expect(Color.bgBrightGreen('Hello World!')).toBe(bgBrightGreen);
      expect(Color.bgBrightYellow('Hello World!')).toBe(bgBrightYellow);
      expect(Color.bgBrightBlue('Hello World!')).toBe(bgBrightBlue);
      expect(Color.bgBrightMagenta('Hello World!')).toBe(bgBrightMagenta);
      expect(Color.bgBrightCyan('Hello World!')).toBe(bgBrightCyan);
      expect(Color.bgBrightWhite('Hello World!')).toBe(bgBrightWhite);
    });

    it('should print a console texts with all available foreground colors', () => {
      const black = parseFormat([30, 39], 'Hello World!');
      const red = parseFormat([31, 39], 'Hello World!');
      const green = parseFormat([32, 39], 'Hello World!');
      const yellow = parseFormat([33, 39], 'Hello World!');
      const blue = parseFormat([34, 39], 'Hello World!');
      const magenta = parseFormat([35, 39], 'Hello World!');
      const cyan = parseFormat([36, 39], 'Hello World!');
      const white = parseFormat([37, 39], 'Hello World!');

      expect(Color.black('Hello World!')).toBe(black);
      expect(Color.red('Hello World!')).toBe(red);
      expect(Color.green('Hello World!')).toBe(green);
      expect(Color.yellow('Hello World!')).toBe(yellow);
      expect(Color.blue('Hello World!')).toBe(blue);
      expect(Color.magenta('Hello World!')).toBe(magenta);
      expect(Color.cyan('Hello World!')).toBe(cyan);
      expect(Color.white('Hello World!')).toBe(white);
    });

    it('should print a console texts with all available bright colors', () => {
      const brightBlack = parseFormat([90, 39], 'Hello World!');
      const brightRed = parseFormat([91, 39], 'Hello World!');
      const brightGreen = parseFormat([92, 39], 'Hello World!');
      const brightYellow = parseFormat([93, 39], 'Hello World!');
      const brightBlue = parseFormat([94, 39], 'Hello World!');
      const brightMagenta = parseFormat([95, 39], 'Hello World!');
      const brightCyan = parseFormat([96, 39], 'Hello World!');
      const brightWhite = parseFormat([97, 39], 'Hello World!');

      expect(Color.brightBlack('Hello World!')).toBe(brightBlack);
      expect(Color.brightRed('Hello World!')).toBe(brightRed);
      expect(Color.brightGreen('Hello World!')).toBe(brightGreen);
      expect(Color.brightYellow('Hello World!')).toBe(brightYellow);
      expect(Color.brightBlue('Hello World!')).toBe(brightBlue);
      expect(Color.brightMagenta('Hello World!')).toBe(brightMagenta);
      expect(Color.brightCyan('Hello World!')).toBe(brightCyan);
      expect(Color.brightWhite('Hello World!')).toBe(brightWhite);
    });
  });

  describe('Formats', () => {
    it('should reset all formats applied to the console', () => {
      const reset = parseFormat();

      expect(Color.reset()).toBe(reset);
    });

    it('should print a hidden console text', () => {
      const bold = parseFormat([1, 22], 'Hello World!');
      const dim = parseFormat([2, 22], 'Hello World!');
      const italic = parseFormat([3, 23], 'Hello World!');
      const underline = parseFormat([4, 24], 'Hello World!');
      const blink = parseFormat([5, 25], 'Hello World!');
      const inverse = parseFormat([7, 27], 'Hello World!');
      const hidden = parseFormat([8, 28], 'Hello World!');
      const strike = parseFormat([9, 29], 'Hello World!');

      expect(Color.bold('Hello World!')).toBe(bold);
      expect(Color.dim('Hello World!')).toBe(dim);
      expect(Color.italic('Hello World!')).toBe(italic);
      expect(Color.underline('Hello World!')).toBe(underline);
      expect(Color.blink('Hello World!')).toBe(blink);
      expect(Color.inverse('Hello World!')).toBe(inverse);
      expect(Color.hidden('Hello World!')).toBe(hidden);
      expect(Color.strikeThrough('Hello World!')).toBe(strike);
    });
  });

  describe('Other formats', () => {
    it('should print a console text with combined formats', () => {
      const text = `\x1b[37mHello\x1b[39m \x1b[47mWorld!\x1b[49m from \x1b[33mCustomConsoleColors\x1b[39m`;

      expect(
        `${Color.white('Hello')} ${Color.bgWhite('World!')} from ${Color.yellow(
          'CustomConsoleColors',
        )}`,
      ).toBe(text);
    });

    it('should print a formatted console text with chain of responsability', () => {
      const text = 'Hello World!';

      expect(`${Color.bgWhite().black('Hello World!')}`).toContain(text);
    });
  });
});
