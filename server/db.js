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

  selectByEmail (email, callback) {
    return this.db.get(
      `SELECT * FROM user WHERE email = ?`,
      [email], (err, row) => {
        callback(err, row)
      }
    )
  }

  insertAdmin (user, callback) {
    return this.db.run(
      'INSERT INTO user (name,email,user_pass,is_admin) VALUES (?,?,?,?)',
      user, (err) => {
        callback(err)
      })
  }

  selectAll (callback) {}

  insert (user, callback) {}
}

module.export = Db
