import * as process from 'process';

import { ConsoleColorService } from '../src';

console.log(
  ConsoleColorService.black('Black color\t'),
  ConsoleColorService.bgWhite(ConsoleColorService.black('BLACK  \t')),
  ConsoleColorService.bgBlack('     '),
);
console.log(
  ConsoleColorService.blue('Blue color\t'),
  ConsoleColorService.bgWhite(ConsoleColorService.blue('BLUE   \t')),
  ConsoleColorService.bgBlue('     '),
);
console.log(
  ConsoleColorService.cyan('Green color\t'),
  ConsoleColorService.bgWhite(ConsoleColorService.cyan('CYAN   \t')),
  ConsoleColorService.bgCyan('     '),
);
console.log(
  ConsoleColorService.green('Green color\t'),
  ConsoleColorService.bgWhite(ConsoleColorService.green('GREEN  \t')),
  ConsoleColorService.bgGreen('     '),
);
console.log(
  ConsoleColorService.magenta('Magenta color\t'),
  ConsoleColorService.bgWhite(ConsoleColorService.magenta('MAGENTA\t')),
  ConsoleColorService.bgMagenta('     '),
);
console.log(
  ConsoleColorService.red('Red color\t'),
  ConsoleColorService.bgWhite(ConsoleColorService.red('RED    \t')),
  ConsoleColorService.bgRed('     ')
);
console.log(
  ConsoleColorService.white('White color\t'),
  ConsoleColorService.bgWhite('WHITE  \t'),
  ConsoleColorService.bgWhite('     '),
);
console.log(
  ConsoleColorService.yellow('Yellow color\t'),
  ConsoleColorService.bgWhite(ConsoleColorService.yellow('YELLOW \t')),
  ConsoleColorService.bgYellow('     '),
);

process.stdout.write(`${ConsoleColorService.red('Custom')} ` +
  `${ConsoleColorService.bgWhite(ConsoleColorService.black('Console '))}` +
  `${ConsoleColorService.bgBlack(ConsoleColorService.white('Colors'))} ` +
  `${ConsoleColorService.green('Example')}\n`,
);
