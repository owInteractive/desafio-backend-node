'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductsSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments()
      table.string('name', 200).notNullable()
      table.integer('quantity',8).notNullable()
      table.integer('categories_id').unsigned().references('id').inTable('category')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductsSchema
