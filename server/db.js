'use strict'

const sqlite3 = require('sqlite3').verbose()

class Db {
  constructior (file) {
    this.db = new sqlite3.Database(file)
    this.createTable()
  }

  createTable () {}

  selectByEmail (email, callback) {}

  insertAdmin (user, callback) {}

  selectAll (callback) {}

  insert (user, callback) {}

}

module.export = Db;