#!/usr/bin/env node

import { build } from 'gluegun'

process.removeAllListeners('unhandledRejection')
process.on('unhandledRejection', () => {
  process.exit(1)
})

build('gen').src(__dirname).create().run()
