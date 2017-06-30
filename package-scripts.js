const npsUtils = require('nps-utils')

const { concurrent, rimraf, series } = npsUtils

module.exports = {
  scripts: {
    build: 'next build',
    default: 'next start',
    dev: 'next',
    lint: {
      default: 'eslint components lib pages',
      fix: series.nps('lint --fix')
    },
    clean: series(rimraf('.next'), rimraf('coverage')),
    reportCoverage: 'codecov',
    test: {
      default: 'jest --config jest.config.json --runInBand',
      coverage: series.nps('test --coverage'),
      watch: series.nps('test --watch')
    },
    validate: concurrent.nps('lint', 'test.coverage')
  }
}
