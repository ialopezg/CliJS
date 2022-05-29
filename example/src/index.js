const { Color } = require('custom-console-colors');

console.log(
  Color.black('Black color\t\t'),
  Color.bgWhite(Color.black('BLACK          \t')),
  Color.bgBlack('     '),
);
console.log(
  Color.brightBlack('Bright Black color\t'),
  Color.bgWhite(Color.brightBlack('BRIGHT BLACK   \t')),
  Color.bgBrightBlack('     '),
);
console.log(
  Color.blue('Blue color\t\t'),
  Color.bgWhite(Color.blue('BLUE           \t')),
  Color.bgBlue('     '),
);
console.log(
  Color.brightBlue('Bright Blue color\t'),
  Color.bgWhite(Color.brightBlue('BRIGHT BLUE    \t')),
  Color.bgBrightBlue('     '),
);
console.log(
  Color.cyan('Cyan color\t\t'),
  Color.bgWhite(Color.cyan('CYAN           \t')),
  Color.bgCyan('     '),
);
console.log(
  Color.brightCyan('Bright Cyan color\t'),
  Color.bgWhite(Color.brightCyan('BRIGHT CYAN    \t')),
  Color.bgBrightCyan('     '),
);
console.log(
  Color.green('Green color\t\t'),
  Color.bgWhite(Color.green('GREEN          \t')),
  Color.bgGreen('     '),
);
console.log(
  Color.brightGreen('Bright Green color\t'),
  Color.bgWhite(Color.green('BRIGHT GREEN   \t')),
  Color.bgBrightGreen('     '),
);
console.log(
  Color.magenta('Magenta color\t\t'),
  Color.bgWhite(Color.magenta('MAGENTA        \t')),
  Color.bgMagenta('     '),
);
console.log(
  Color.magenta('Bright Magenta color\t'),
  Color.bgWhite(Color.magenta('BRIGHT MAGENTA \t')),
  Color.bgMagenta('     '),
);
console.log(
  Color.red('Red color\t\t'),
  Color.bgWhite(Color.red('RED            \t')),
  Color.bgRed('     ')
);
console.log(
  Color.red('Bright Red color\t'),
  Color.bgWhite(Color.red('BRIGHT RED     \t')),
  Color.bgBrightRed('     ')
);
console.log(
  Color.white('White color\t\t'),
  Color.bgWhite('WHITE          \t'),
  Color.bgWhite('     '),
);
console.log(
  Color.brightWhite('Bright White color\t'),
  Color.bgWhite('BRIGHT WHITE   \t'),
  Color.bgBrightWhite('     '),
);
console.log(
  Color.yellow('Yellow color\t\t'),
  Color.bgWhite(Color.yellow('YELLOW         \t')),
  Color.bgYellow('     '),
);
console.log(
  Color.yellow('Bright Yellow color\t'),
  Color.bgWhite(Color.yellow('BRIGHT YELLOW  \t')),
  Color.bgBrightYellow('     '),
);

process.stdout.write(`${Color.bold(Color.red('Custom'))} ` +
  `${Color.bgWhite(Color.italic(Color.black('Console ')))}` +
  `${Color.bgBlack(Color.white('Colors'))} ` +
  'Example\n',
);

console.log(Color.bold('Bold'));
console.log(Color.italic('Italic'));
console.log(Color.strikeThrough('StrikeThrough'));
console.log(Color.underline('Underline'));
console.log(Color.dim('Dim'));
console.log(Color.hidden('Hidden'));
console.log(Color.bgWhite(Color.red().bold('Custom Console Colors')));
