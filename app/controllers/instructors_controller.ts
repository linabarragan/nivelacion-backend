import type { HttpContext } from '@adonisjs/core/http'
import Instructor from '#models/instructor'
import { storeInstructorSchema } from '#validators/store_instructor'
import { updateInstructorSchema } from '#validators/update_instructor'
import vine from '@vinejs/vine'

export default class InstructorsController {
  async index({ response }: HttpContext) {
    const data = await Instructor.all()
    return response.ok(data)
  }

  async store({ request, response }: HttpContext) {
    const data = await vine.validate({
      schema: storeInstructorSchema,
      data: request.all(),
    })

    const instructor = await Instructor.create({
      nombreCompleto: data.nombre_completo,
      instrumentoPrincipal: data.instrumento_principal,
    })
    return response.created(instructor)
  }

  async show({ params, response }: HttpContext) {
    const instructor = await Instructor.findOrFail(params.id)
    return response.ok(instructor)
  }

  async update({ params, request, response }: HttpContext) {
    const instructor = await Instructor.findOrFail(params.id)

    const data = await vine.validate({
      schema: updateInstructorSchema,
      data: request.all(),
    })

    instructor.merge(data)
    await instructor.save()

    return response.ok(instructor)
  }

  async destroy({ params, response }: HttpContext) {
    const instructor = await Instructor.find(params.id)

    if (!instructor) {
      return response.notFound({ message: 'Instructor no encontrado' })
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

    const estado = instructor.activo ? 'activado' : 'inactivado'

    return response.ok({
      message: `Instructor ${estado} correctamente`,
      instructor,
    })
  }
}
