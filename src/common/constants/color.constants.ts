import { ANSI_BACKGROUND_OFFSET } from '../constants';

const ansi16Wrapper = (offset: number = 0) => (code: string) => `\u001B[${code + offset}m`;
const ansi256Wrapper = (offset: number = 0) => (code: string) => `\u001B[${38 + offset};5;${code}m`;
const ansi16mWrapper = (offset: number = 0) => (red: number, green: number, blue: number) => `\u001B[${38 + offset};2;${red};${green};${blue}m`;

export const styles = {
  modifiers: {
    reset: [0, 0],
    bold: [1, 22],
    dim: [2, 22],
    italic: [3, 23],
    underline: [4, 24],
    blink: [5, 25],
    inverse: [7, 27],
    hidden: [8, 28],
    strike: [9, 29],
    overline: [53, 55],
  },
  colors: {
    black: [30, 39],
    red: [31, 39],
    green: [32, 39],
    yellow: [33, 39],
    blue: [34, 39],
    magenta: [35, 39],
    cyan: [36, 39],
    white: [37, 39],

    brightBlack: [90, 39],
    brightRed: [91, 39],
    brightGreen: [92, 39],
    brightYellow: [93, 39],
    brightBlue: [94, 39],
    brightMagenta: [95, 39],
    brightCyan: [96, 39],
    brightWhite: [97, 39],
  },
  backgrounds: {
    bgBlack: [40, 49],
    bgRed: [41, 49],
    bgGreen: [42, 49],
    bgYellow: [43, 49],
    bgBlue: [44, 49],
    bgMagenta: [45, 49],
    bgCyan: [46, 49],
    bgWhite: [47, 49],

    bgBrightBlack: [100, 49],
    bgBrightRed: [101, 49],
    bgBrightGreen: [102, 49],
    bgBrightYellow: [103, 49],
    bgBrightBlue: [104, 49],
    bgBrightMagenta: [105, 49],
    bgBrightCyan: [106, 49],
    bgBrightWhite: [107, 49],
  },
};

export const modifiers = Object.keys(styles.modifiers);
export const colors = Object.keys(styles.colors);
export const backgrounds = Object.keys(styles.backgrounds);
export const colorNames = [...colors, ...backgrounds];

const assemblyStyles = () => {
  const codes = new Map();

  for (const [groupName, group] of Object.entries(styles)) {
    for (const [styleName, style] of Object.entries(group)) {
      styles[styleName] = {
        open: `\u001B[${style[0]}m`,
        close: `\u001B[${style[1]}m`,
      };
      group[styleName] = styles[styleName];

      codes.set(style[0], style[1]);
    }

    Object.defineProperty(styles, groupName, {
      enumerable: true,
      value: group,
    });
  }

  Object.defineProperty(styles, 'codes', {
    enumerable: false,
    value: codes,
  });

  styles.colors['close'] = '\u001B[39m';
  styles.backgrounds['close'] = '\u001B[49m';

  styles.colors['ansi'] = ansi16Wrapper();
  styles.colors['ansi256'] = ansi256Wrapper();
  styles.colors['ansi16m'] = ansi16mWrapper();

  styles.backgrounds['ansi'] = ansi16Wrapper(ANSI_BACKGROUND_OFFSET);
  styles.backgrounds['ansi256'] = ansi256Wrapper(ANSI_BACKGROUND_OFFSET);
  styles.backgrounds['ansi16m'] = ansi16mWrapper(ANSI_BACKGROUND_OFFSET);

  Object.defineProperties(styles, {
    ansi256ToAnsi: {},
    hexToAnsi: {},
    hexToAnsi256: {},
    hexToRgb: {},
    rgbToAnsi: {},
    rgbToAnsi256: {},
  });

  return styles;
};

export const ansiStyles = assemblyStyles();

export default ansiStyles;
