// database/migrations/xxxx_create_instrumento_instructor.ts
import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'instrumento_instructor'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table
        .integer('instructor_id')
        .unsigned()
        .references('id')
        .inTable('instructors')
        .onDelete('CASCADE')

      table
        .integer('instrumento_id')
        .unsigned()
        .references('id')
        .inTable('instrumentos')
        .onDelete('CASCADE')

      table.unique(['instructor_id', 'instrumento_id']) // evita duplicados

      table.timestamp('created_at', { useTz: true }).nullable()
      table.timestamp('updated_at', { useTz: true }).nullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
