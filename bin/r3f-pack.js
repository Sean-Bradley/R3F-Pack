#! /usr/bin/env node
const packageJson = require('./../package.json')
console.log(
  '\nR3F-Pack [' +
    packageJson.version +
    '] : A simplified and maintained react-scripts alternative.\n'
)

const { execSync } = require('child_process')

const getFormattedDate = () => {
  const date = new Date()
  const day = String(date.getDate()).padStart(2, '0')
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const year = date.getFullYear()

  return `${day}-${month}-${year}`
}

if (process.argv[2]) {
  const args = process.argv.slice(2)

  switch (args[0]) {
    case 'start':
      execSync(
        'webpack serve --config ./node_modules/r3f-pack/bin/webpack.dev.js',
        { stdio: 'inherit' }
      )
      break
    case 'build':
      execSync(
        'cpy "public/**" build && webpack --config ./node_modules/r3f-pack/bin/webpack.prod.js',
        { stdio: 'inherit' }
      )
      break
    case 'buildByDate':
      execSync(
        `cpy "public/**" build/${getFormattedDate()} && webpack --config ./node_modules/r3f-pack/bin/webpack.prodByDate.js`,
        { stdio: 'inherit' }
      )
      break
    default:
      console.log('\u001b[31mError : argument not recognised\n')
      usage()
  }
} else {
  usage()
}

function usage() {
  console.log(
    '\u001b[0mUsage:\n\n\u001b[32mr3f-pack start\u001b[0m : Starts a development mode HMR dev server at http://127.0.0.1:3000\n\n\u001b[32mr3f-pack build\u001b[0m : Builds producton quality bundle.js and copies all files from ./public to ./build ready for deployment\n\nFor more detailed instructions, visit \u001b[36mhttps://github.com/Sean-Bradley/R3F-Pack\u001b[0m\n'
  )
}
