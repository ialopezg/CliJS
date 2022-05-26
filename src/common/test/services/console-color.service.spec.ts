import { Transformation } from '../../enums';
import { Color, ConsoleColorService as ccs } from '../../index';

describe('ConsoleColorService', () => {
  it('should print a console text with black background color', () => {
    const color = ccs.bgBlack;
    const greetingText = `${ccs.getColor(
      Color.BG_BLACK,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with bright black background color', () => {
    const color = ccs.bgBrightBlack;
    const greetingText = `${ccs.getColor(
      Color.BG_BRIGHT_BLACK,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with red background color', () => {
    const color = ccs.bgRed;
    const greetingText = `${ccs.getColor(
      Color.BG_RED,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with bright red background color', () => {
    const color = ccs.bgBrightRed;
    const greetingText = `${ccs.getColor(
      Color.BG_BRIGHT_RED,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with green background color', () => {
    const color = ccs.bgGreen;
    const greetingText = `${ccs.getColor(
      Color.BG_GREEN,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with bright green background color', () => {
    const color = ccs.bgBrightGreen;
    const greetingText = `${ccs.getColor(
      Color.BG_BRIGHT_GREEN,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with yellow background color', () => {
    const color = ccs.bgYellow;
    const greetingText = `${ccs.getColor(
      Color.BG_YELLOW,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with bright yellow background color', () => {
    const color = ccs.bgBrightYellow;
    const greetingText = `${ccs.getColor(
      Color.BG_BRIGHT_YELLOW,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with blue background color', () => {
    const color = ccs.bgBlue;
    const greetingText = `${ccs.getColor(
      Color.BG_BLUE,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with bright blue background color', () => {
    const color = ccs.bgBrightBlue;
    const greetingText = `${ccs.getColor(
      Color.BG_BRIGHT_BLUE,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with magenta background color', () => {
    const color = ccs.bgMagenta;
    const greetingText = `${ccs.getColor(
      Color.BG_MAGENTA,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with bright magenta background color', () => {
    const color = ccs.bgBrightMagenta;
    const greetingText = `${ccs.getColor(
      Color.BG_BRIGHT_MAGENTA,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with cyan background color', () => {
    const color = ccs.bgCyan;
    const greetingText = `${ccs.getColor(
      Color.BG_CYAN,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with bright cyan background color', () => {
    const color = ccs.bgBrightCyan;
    const greetingText = `${ccs.getColor(
      Color.BG_BRIGHT_CYAN,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with white background color', () => {
    const color = ccs.bgWhite;
    const greetingText = `${ccs.getColor(
      Color.BG_WHITE,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with bright white background color', () => {
    const color = ccs.bgBrightWhite;
    const greetingText = `${ccs.getColor(
      Color.BG_BRIGHT_WHITE,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with black color', () => {
    const color = ccs.black;
    const greetingText = `${ccs.getColor(
      Color.FG_BLACK,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with bright black color', () => {
    const color = ccs.brightBlack;
    const greetingText = `${ccs.getColor(
      Color.FG_BRIGHT_BLACK,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with red color', () => {
    const color = ccs.red;
    const greetingText = `${ccs.getColor(
      Color.FG_RED,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with bright red color', () => {
    const color = ccs.brightRed;
    const greetingText = `${ccs.getColor(
      Color.FG_BRIGHT_RED,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with green color', () => {
    const color = ccs.green;
    const greetingText = `${ccs.getColor(
      Color.FG_GREEN,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with bright green color', () => {
    const color = ccs.brightGreen;
    const greetingText = `${ccs.getColor(
      Color.FG_BRIGHT_GREEN,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with yellow color', () => {
    const color = ccs.yellow;
    const greetingText = `${ccs.getColor(
      Color.FG_YELLOW,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with bright yellow color', () => {
    const color = ccs.brightYellow;
    const greetingText = `${ccs.getColor(
      Color.FG_BRIGHT_YELLOW,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with blue color', () => {
    const color = ccs.blue;
    const greetingText = `${ccs.getColor(
      Color.FG_BLUE,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with bright blue color', () => {
    const color = ccs.brightBlue;
    const greetingText = `${ccs.getColor(
      Color.FG_BRIGHT_BLUE,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with magenta color', () => {
    const color = ccs.magenta;
    const greetingText = `${ccs.getColor(
      Color.FG_MAGENTA,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with bright magenta color', () => {
    const color = ccs.brightMagenta;
    const greetingText = `${ccs.getColor(
      Color.FG_BRIGHT_MAGENTA,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with cyan color', () => {
    const color = ccs.cyan;
    const greetingText = `${ccs.getColor(
      Color.FG_CYAN,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with bright cyan color', () => {
    const color = ccs.brightCyan;
    const greetingText = `${ccs.getColor(
      Color.FG_BRIGHT_CYAN,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with white color', () => {
    const color = ccs.white;
    const greetingText = `${ccs.getColor(
      Color.FG_WHITE,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with bright white color', () => {
    const color = ccs.brightWhite;
    const greetingText = `${ccs.getColor(
      Color.FG_BRIGHT_WHITE,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a bold console text', () => {
    const color = ccs.bold;
    const greetingText = `${ccs.getTransformation(
      Transformation.BOLD,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print an italic console text', () => {
    const color = ccs.italic;
    const greetingText = `${ccs.getTransformation(
      Transformation.ITALIC,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a dimmed console text', () => {
    const color = ccs.dim;
    const greetingText = `${ccs.getTransformation(
      Transformation.DIM,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print an underlined console text', () => {
    const color = ccs.underline;
    const greetingText = `${ccs.getTransformation(
      Transformation.UNDERLINE,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print an inversed console text', () => {
    const color = ccs.inverse;
    const greetingText = `${ccs.getTransformation(
      Transformation.INVERSE,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a strikedthrough console text', () => {
    const color = ccs.strikeThrough;
    const greetingText = `${ccs.getTransformation(
      Transformation.STRIKETHROUGH,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a hidden console text', () => {
    const color = ccs.hidden;
    const greetingText = `${ccs.getTransformation(
      Transformation.HIDDEN,
    )}Hello World!${ccs.reset()}`;

    expect(color('Hello World!')).toBe(greetingText);
  });
});
