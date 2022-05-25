import { ConsoleColor, ConsoleColorService } from '../../index';

describe('ConsoleColorService', () => {
  it('should print a console text with green color', () => {
    const color = ConsoleColorService.green;
    const greetingText = `${ConsoleColor.FG_GREEN}Hello World!${ConsoleColor.RESET}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with red color', () => {
    const color = ConsoleColorService.red;
    const greetingText = `${ConsoleColor.FG_RED}Hello World!${ConsoleColor.RESET}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with yellow color', () => {
    const color = ConsoleColorService.yellow;
    const greetingText = `${ConsoleColor.FG_YELLOW}Hello World!${ConsoleColor.RESET}`;

    expect(color('Hello World!')).toBe(greetingText);
  });

  it('should print a console text with white color', () => {
    const color = ConsoleColorService.white;
    const greetingText = `${ConsoleColor.FG_WHITE}Hello World!${ConsoleColor.RESET}`;

    expect(color('Hello World!')).toBe(greetingText);
  });
});
