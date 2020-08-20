'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategorySchema extends Schema {
  up () {
    this.create('category', (table) => {
      table.increments()
      table.string('name', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('category')
  }
}

module.exports = CategorySchema
