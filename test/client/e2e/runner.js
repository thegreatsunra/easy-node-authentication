process.env.NODE_ENV = 'testing'
const server = require('../../../src/server/index.js')
const spawn = require('cross-spawn')
const opts = process.argv.slice(2)

const runner = spawn('./node_modules/.bin/testcafe', opts, { stdio: 'inherit' })
runner.on('exit', (code) => {
  process.exit(code)
})

runner.on('error', (err) => {
  throw err
})
