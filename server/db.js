'use strict'

const sqlite3 = require('sqlite3').verbose()

class Db {
  constructior (file) {
    this.db = new sqlite3.Database(file)
    this.createTable()
  }

  createTable () {
    const sql = `
      CREATE TABLE IF NOT EXISTS user (
        id integer PRIMARY KEY,
        name text,
        email text UNIQUE,
        user_pass text,
        is_admin integer)`
    return this.db.run(sql)
  }

  selectByEmail (email, callback) {}

  insertAdmin (user, callback) {}

  selectAll (callback) {}

  insert (user, callback) {}

}

module.export = Db