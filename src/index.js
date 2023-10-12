#!/usr/bin/env node
import getStdin from 'get-stdin'
import minimist from 'minimist'
import parrot from 'parrotsay-api'
import updateNotifier from 'update-notifier'

const pkg = require('../package.json')

updateNotifier({pkg}).notify()

let parrotArg = process.argv[2];
if ( parrotArg.startsWith('--parrot-') ) {
	parrotArg = parrotArg.replace('--parrot-', '');
	delete(process.argv[2]); 
} else {
	parrotArg = undefined;
}

const input = minimist(process.argv.slice(2))._.join(' ')
if (input) {
	parrot(input, parrotArg)
		.then(console.log)
		.catch(console.error)
} else {
	getStdin().then(string => {
		parrot(string.trim() || 'LET\'S PARTY', parrotArg)
			.then(console.log)
			.catch(console.error)
	})
}
