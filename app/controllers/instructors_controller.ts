import type { HttpContext } from '@adonisjs/core/http'
import Instructor from '#models/instructor'
import { storeInstructorSchema } from '#validators/store_instructor'
import { updateInstructorSchema } from '#validators/update_instructor'
import vine from '@vinejs/vine'

export default class InstructorsController {
  async index({ response }: HttpContext) {
    const data = await Instructor.query().preload('instrumentos') // ✅ muchos instrumentos
    return response.ok(data)
  }

  async store({ request, response }: HttpContext) {
    const data = await vine.validate({
      schema: storeInstructorSchema,
      data: request.all(),
    })

    const instructor = await Instructor.create({
      nombreCompleto: data.nombre_completo,
      activo: true,
    })

    // ✅ Asignar múltiples instrumentos
    await instructor.related('instrumentos').attach(data.instrumento_ids)
    await instructor.load('instrumentos')

    return response.created({
      message: 'Instructor creado correctamente',
      instructor,
    })
  }

  async show({ params, response }: HttpContext) {
    const instructor = await Instructor.query()
      .where('id', params.id)
      .preload('instrumentos') // ✅ plural
      .firstOrFail()

    return response.ok(instructor)
  }

  async update({ params, request, response }: HttpContext) {
    const instructor = await Instructor.findOrFail(params.id)

    const data = await vine.validate({
      schema: updateInstructorSchema,
      data: request.all(),
    })

    instructor.merge({
      nombreCompleto: data.nombre_completo,
      activo: data.activo,
    })
    await instructor.save()

    // ✅ Si se envían instrumentos, sincronizamos
    if (data.instrumento_ids) {
      await instructor.related('instrumentos').sync(data.instrumento_ids)
    }

    await instructor.load('instrumentos')

    return response.ok(instructor)
  }

  async destroy({ params, response }: HttpContext) {
    const instructor = await Instructor.find(params.id)

    if (!instructor) {
      return response.notFound({ message: 'Instructor no encontrado' })
    }

    if (instructor.activo) {
      return response.badRequest({
        message: 'No se puede eliminar un instructor activo. Inactívelo primero.',
      })
    }

    await instructor.delete()
    return response.ok({ message: 'Instructor eliminado correctamente' })
  }

  async toggleActivo({ params, response }: HttpContext) {
    const instructor = await Instructor.find(params.id)

    if (!instructor) {
      return response.notFound({ message: 'Instructor no encontrado' })
    }

    instructor.activo = !instructor.activo
    await instructor.save()

    await instructor.load('instrumentos')

    const estado = instructor.activo ? 'activado' : 'inactivado'

    return response.ok({
      message: `Instructor ${estado} correctamente`,
      instructor,
    })
  }
}
