'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table.integer('quantity',8).notNullable()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('user')

      table
        .integer('product_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('products')
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
