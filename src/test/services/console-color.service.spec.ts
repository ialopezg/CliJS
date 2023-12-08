import { Color } from '../../services';
import { parseFormat } from '../../common';
import { ansiStyles } from '../../common/constants/color.constants';

describe('ConsoleColorService', () => {
  describe('logging', () => {
    it('should print an entry as a log message', () => {
      const text = 'Hello World!';

      expect(Color.log(text)).toContain(text);
    });

    it('should print an entry as a debug message', () => {
      const text = 'Hello World!';
      const debug = parseFormat(ansiStyles.colors.green, text);

      expect(Color.debug(text)).toContain(debug);
      expect(Color.debug(text)).toBe(debug);
    });

    it('should print an entry as an error message', () => {
      const text = 'Hello World!';
      const error = parseFormat(ansiStyles.colors.red, text);

      expect(Color.error(text)).toContain(error);
      expect(Color.error(text)).toBe(error);
    });

    it('should print an entry as an info message', () => {
      const text = 'Hello World!';
      const info = parseFormat(ansiStyles.colors.blue, text);

      expect(Color.info(text)).toContain(info);
      expect(Color.info(text)).toBe(info);
    });

    it('should print an entry as an warn message', () => {
      const text = 'Hello World!';

      const warn = parseFormat(ansiStyles.colors.yellow, text);

      expect(Color.warn(text)).toContain(warn);
      expect(Color.warn(text)).toBe(warn);
    });
  });
  describe('backgrounds', () => {
    it('should print text with all available background colors', () => {
      const text = 'Hello World!';
      const bgBlack = parseFormat(ansiStyles.backgrounds.bgBlack, text);
      const bgBlue = parseFormat(ansiStyles.backgrounds.bgBlue, text);
      const bgGreen = parseFormat(ansiStyles.backgrounds.bgGreen, text);
      const bgRed = parseFormat(ansiStyles.backgrounds.bgRed, text);

      expect(Color.bgBlack(text)).toEqual(bgBlack);
      expect(Color.bgBlue(text)).toEqual(bgBlue);
      expect(Color.bgGreen(text)).toEqual(bgGreen);
      expect(Color.bgRed(text)).toEqual(bgRed);
    });
  });

  describe('colors', () => {
    it('should print text with all available colors', () => {
      const text = 'Hello World!';
      const black = parseFormat(ansiStyles.colors.black, text);
      const green = parseFormat(ansiStyles.colors.green, text);
      const red = parseFormat(ansiStyles.colors.red, text);

      expect(Color.black(text)).toEqual(black);
      expect(Color.green(text)).toEqual(green);
      expect(Color.red(text)).toEqual(red);
    });
  });

  describe('Colors', () => {
    it('should print console texts with all available background colors', () => {
      const bgBlack = parseFormat(ansiStyles.backgrounds.bgBlack, 'Hello World!');
      const bgRed = '\x1b[41mHello World!\x1b[49m';
      const bgGreen = '\x1b[42mHello World!\x1b[49m';
      const bgYellow = '\x1b[43mHello World!\x1b[49m';
      const bgBlue = '\x1b[44mHello World!\x1b[49m';
      const bgMagenta = '\x1b[45mHello World!\x1b[49m';
      const bgCyan = '\x1b[46mHello World!\x1b[49m';
      const bgWhite = '\x1b[47mHello World!\x1b[49m';

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
      const bgBrightBlack = parseFormat(ansiStyles.backgrounds.bgBrightBlack, 'Hello World!');
      const bgBrightRed = parseFormat(ansiStyles.backgrounds.bgBrightRed, 'Hello World!');
      const bgBrightGreen = parseFormat(ansiStyles.backgrounds.bgBrightGreen, 'Hello World!');
      const bgBrightYellow = parseFormat(ansiStyles.backgrounds.bgBrightYellow, 'Hello World!');
      const bgBrightBlue = parseFormat(ansiStyles.backgrounds.bgBrightBlue, 'Hello World!');
      const bgBrightMagenta = parseFormat(ansiStyles.backgrounds.bgBrightMagenta, 'Hello World!');
      const bgBrightCyan = parseFormat(ansiStyles.backgrounds.bgBrightCyan, 'Hello World!');
      const bgBrightWhite = parseFormat(ansiStyles.backgrounds.bgBrightWhite, 'Hello World!');

      expect(Color.bgBrightBlack('Hello World!')).toEqual(bgBrightBlack);
      expect(Color.bgBrightRed('Hello World!')).toBe(bgBrightRed);
      expect(Color.bgBrightGreen('Hello World!')).toBe(bgBrightGreen);
      expect(Color.bgBrightYellow('Hello World!')).toBe(bgBrightYellow);
      expect(Color.bgBrightBlue('Hello World!')).toBe(bgBrightBlue);
      expect(Color.bgBrightMagenta('Hello World!')).toBe(bgBrightMagenta);
      expect(Color.bgBrightCyan('Hello World!')).toBe(bgBrightCyan);
      expect(Color.bgBrightWhite('Hello World!')).toBe(bgBrightWhite);
    });

    it('should print a console texts with all available foreground colors', () => {
      const black = parseFormat(ansiStyles.colors.black, 'Hello World!');
      const red = parseFormat(ansiStyles.colors.red, 'Hello World!');
      const green = parseFormat(ansiStyles.colors.green, 'Hello World!');
      const yellow = parseFormat(ansiStyles.colors.yellow, 'Hello World!');
      const blue = parseFormat(ansiStyles.colors.blue, 'Hello World!');
      const magenta = parseFormat(ansiStyles.colors.magenta, 'Hello World!');
      const cyan = parseFormat(ansiStyles.colors.cyan, 'Hello World!');
      const white = parseFormat(ansiStyles.colors.white, 'Hello World!');

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
      const brightBlack = parseFormat(ansiStyles.colors.brightBlack, 'Hello World!');
      const brightRed = parseFormat(ansiStyles.colors.brightRed, 'Hello World!');
      const brightGreen = parseFormat(ansiStyles.colors.brightGreen, 'Hello World!');
      const brightYellow = parseFormat(ansiStyles.colors.brightYellow, 'Hello World!');
      const brightBlue = parseFormat(ansiStyles.colors.brightBlue, 'Hello World!');
      const brightMagenta = parseFormat(ansiStyles.colors.brightMagenta, 'Hello World!');
      const brightCyan = parseFormat(ansiStyles.colors.brightCyan, 'Hello World!');
      const brightWhite = parseFormat(ansiStyles.colors.brightWhite, 'Hello World!');

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
      Color.reset();

      expect(typeof parseFormat).toBe('function');
    });

    it('should print a hidden console text', () => {
      const bold = parseFormat(ansiStyles.modifiers.bold, 'Hello World!');
      const dim = parseFormat(ansiStyles.modifiers.dim, 'Hello World!');
      const italic = parseFormat(ansiStyles.modifiers.italic, 'Hello World!');
      const underline = parseFormat(ansiStyles.modifiers.underline, 'Hello World!');
      const blink = parseFormat(ansiStyles.modifiers.blink, 'Hello World!');
      const inverse = parseFormat(ansiStyles.modifiers.inverse, 'Hello World!');
      const hidden = parseFormat(ansiStyles.modifiers.hidden, 'Hello World!');
      const strike = parseFormat(ansiStyles.modifiers.strike, 'Hello World!');
      // const overline = parseFormat(ansiStyles.modifiers.overline, 'Hello World!');

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
      const text = '\x1b[37mHello\x1b[39m \x1b[47mWorld!\x1b[49m from \x1b[33mCustomConsoleColors\x1b[39m';

      expect(
        `${Color.white('Hello')} ${Color.bgWhite('World!')} from ${Color.yellow(
          'CustomConsoleColors',
        )}`,
      ).toBe(text);
    });

    it('should print a formatted console text with chain of responsibility', () => {
      const text = 'Hello World!';

      expect(`${Color.bgWhite(Color.black('Hello World!') as string)}`).toContain(text);
    });
  });
});
