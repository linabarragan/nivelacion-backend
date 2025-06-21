// app/controllers/instrumentos_controller.ts
import type { HttpContext } from '@adonisjs/core/http'
import Instrumento from '#models/instrumento'

export default class InstrumentosController {
  async index({ response }: HttpContext) {
    const instrumentos = await Instrumento.all()
    return response.ok(instrumentos)
  }
}
