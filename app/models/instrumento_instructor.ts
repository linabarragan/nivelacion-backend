// app/models/instrumento_instructor.ts
import { BaseModel, column } from '@adonisjs/lucid/orm'
import { DateTime } from 'luxon'

export default class InstrumentoInstructor extends BaseModel {
  static table = 'instrumento_instructor' // 👈 obligatorio en tablas pivote personalizadas

  @column({ isPrimary: true })
  declare id: number

  @column()
  declare instructorId: number

  @column()
  declare instrumentoId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
