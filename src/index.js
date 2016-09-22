#!/usr/bin/env node
import getStdin from 'get-stdin'
import minimist from 'minimist'
import parrot from 'parrotsay-api'
import updateNotifier from 'update-notifier'

const pkg = require('../package.json')

updateNotifier({pkg}).notify()

const input = minimist(process.argv.slice(2))._.join(' ')

if (input) {
	parrot(input)
		.then(console.log)
		.catch(console.error)
} else {
	getStdin().then(string => {
		parrot(string.trim() || 'LET\'S PARTY')
			.then(console.log)
			.catch(console.error)
	})
}
