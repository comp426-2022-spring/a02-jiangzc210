import minimist from 'minimist';
var args = minimist(process.argv.slice(2));
args['call'];
import {flipACoin} from './modules/coin.mjs';
if (args.call != 'heads' && args.call != 'tails') {
	console.log('Error: invalid input', '\n', 'Usage: node guess-flip --call=[heads|tails]');	
} else {
	console.log(flipACoin(args.call));
}
