'use strict'

const mongooseBaseName = 'bankbook-api'

const database = {
  development: `mongodb://127.0.0.1/${mongooseBaseName}-development`,
  test: `mongodb://127.0.0.1/${mongooseBaseName}-test`
}

const localDb = process.env.TESTENV ? database.test : database.development

const currentDb = process.env.DB_URI || localDb

module.exports = currentDb
