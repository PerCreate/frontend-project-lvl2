import { Command } from 'commander';
import genDiff from './genDiff.js';

const program = new Command();
program
  .version('0.0.4', "-V, --version', 'output the version number")
  .description('Compares two configuration files and shows a difference.')
  .option("-f, --format [type]', 'output format")
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2) => genDiff(filepath1, filepath2))
  .parse();

export default program;
