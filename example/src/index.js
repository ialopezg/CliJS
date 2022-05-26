const { ConsoleColorService } = require('custom-console-colors');

console.log(
  ConsoleColorService.black('Black color\t\t'),
  ConsoleColorService.bgWhite(ConsoleColorService.black('BLACK          \t')),
  ConsoleColorService.bgBlack('     '),
);
console.log(
  ConsoleColorService.brightBlack('Bright Black color\t'),
  ConsoleColorService.bgWhite(ConsoleColorService.brightBlack('BRIGHT BLACK   \t')),
  ConsoleColorService.bgBrightBlack('     '),
);
console.log(
  ConsoleColorService.blue('Blue color\t\t'),
  ConsoleColorService.bgWhite(ConsoleColorService.blue('BLUE           \t')),
  ConsoleColorService.bgBlue('     '),
);
console.log(
  ConsoleColorService.brightBlue('Bright Blue color\t'),
  ConsoleColorService.bgWhite(ConsoleColorService.brightBlue('BRIGHT BLUE    \t')),
  ConsoleColorService.bgBrightBlue('     '),
);
console.log(
  ConsoleColorService.cyan('Cyan color\t\t'),
  ConsoleColorService.bgWhite(ConsoleColorService.cyan('CYAN           \t')),
  ConsoleColorService.bgCyan('     '),
);
console.log(
  ConsoleColorService.brightCyan('Bright Cyan color\t'),
  ConsoleColorService.bgWhite(ConsoleColorService.brightCyan('BRIGHT CYAN    \t')),
  ConsoleColorService.bgBrightCyan('     '),
);
console.log(
  ConsoleColorService.green('Green color\t\t'),
  ConsoleColorService.bgWhite(ConsoleColorService.green('GREEN          \t')),
  ConsoleColorService.bgGreen('     '),
);
console.log(
  ConsoleColorService.brightGreen('Bright Green color\t'),
  ConsoleColorService.bgWhite(ConsoleColorService.green('BRIGHT GREEN   \t')),
  ConsoleColorService.bgBrightGreen('     '),
);
console.log(
  ConsoleColorService.magenta('Magenta color\t\t'),
  ConsoleColorService.bgWhite(ConsoleColorService.magenta('MAGENTA        \t')),
  ConsoleColorService.bgMagenta('     '),
);
console.log(
  ConsoleColorService.magenta('Bright Magenta color\t'),
  ConsoleColorService.bgWhite(ConsoleColorService.magenta('BRIGHT MAGENTA \t')),
  ConsoleColorService.bgMagenta('     '),
);
console.log(
  ConsoleColorService.red('Red color\t\t'),
  ConsoleColorService.bgWhite(ConsoleColorService.red('RED            \t')),
  ConsoleColorService.bgRed('     ')
);
console.log(
  ConsoleColorService.red('Bright Red color\t'),
  ConsoleColorService.bgWhite(ConsoleColorService.red('BRIGHT RED     \t')),
  ConsoleColorService.bgBrightRed('     ')
);
console.log(
  ConsoleColorService.white('White color\t\t'),
  ConsoleColorService.bgWhite('WHITE          \t'),
  ConsoleColorService.bgWhite('     '),
);
console.log(
  ConsoleColorService.brightWhite('Bright White color\t'),
  ConsoleColorService.bgWhite('BRIGHT WHITE   \t'),
  ConsoleColorService.bgBrightWhite('     '),
);
console.log(
  ConsoleColorService.yellow('Yellow color\t\t'),
  ConsoleColorService.bgWhite(ConsoleColorService.yellow('YELLOW         \t')),
  ConsoleColorService.bgYellow('     '),
);
console.log(
  ConsoleColorService.yellow('Bright Yellow color\t'),
  ConsoleColorService.bgWhite(ConsoleColorService.yellow('BRIGHT YELLOW  \t')),
  ConsoleColorService.bgBrightYellow('     '),
);

process.stdout.write(`${ConsoleColorService.bold(ConsoleColorService.red('Custom'))} ` +
  `${ConsoleColorService.bgWhite(ConsoleColorService.italic(ConsoleColorService.black('Console ')))}` +
  `${ConsoleColorService.bgBlack(ConsoleColorService.white('Colors'))} ` +
  'Example\n',
);

console.log(ConsoleColorService.bold('Bold'));
console.log(ConsoleColorService.italic('Italic'));
console.log(ConsoleColorService.strikeThrough('StrikeThrough'));
console.log(ConsoleColorService.underline('Underline'));
console.log(ConsoleColorService.dim('Dim'));
console.log(ConsoleColorService.hidden('Hidden'));
