import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Instructor from './instructor.js'
import { DateTime } from 'luxon'

export default class Instrumento extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombre: string

  @manyToMany(() => Instructor, {
    pivotTable: 'instrumento_instructor', // 👈 tabla intermedia N:M
  })
  declare instructores: ManyToMany<typeof Instructor>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
