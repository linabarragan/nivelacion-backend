import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany } from '@adonisjs/lucid/orm'
import type { ManyToMany } from '@adonisjs/lucid/types/relations'
import Instrumento from './instrumento.js'

export default class Instructor extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nombreCompleto: string

  @column()
  declare activo: boolean

  // ✅ NUEVA relación muchos-a-muchos
  @manyToMany(() => Instrumento, {
    pivotTable: 'instrumento_instructor', // 👈 tabla intermedia
  })
  declare instrumentos: ManyToMany<typeof Instrumento>

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
