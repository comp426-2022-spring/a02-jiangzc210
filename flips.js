import minimist from 'minimist';
let args = minimist(process.argv.slice(2));
args['number'];
let number = args.number || 1;
import {coinFlips, countFlips} from './modules/coin.mjs';
console.log(countFlips(coinFlips(number)));
