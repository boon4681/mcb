#!/usr/bin/env node
import semver from 'semver'
import minimist from 'minimist'
import version from './version'
import chalk from 'chalk'
import { log } from './src/utils/log'
import { mapper } from './src/utils/cmdList'

const node_version = process.version.replace(/-.*$/, '')
const valid_version = semver.satisfies(node_version, '>= 16.x.x');

async function main() {
    if (valid_version) {
        const argv = minimist(process.argv.slice(2), { string: ['_'] })
        // console.log(argv)
        if ((argv.v || argv.version || argv._.includes('version')) == true) {
            log.info("v" + version, '\n')
            process.exit(0)
        }
        log.info("running on mcb", "v" + version)
        const cmd = mapper(argv._[0])
        if (cmd) {
            await cmd.exec(argv)
        } else {
            console.log()
        }
    }
}
main()