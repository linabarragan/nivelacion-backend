import vine from '@vinejs/vine'

export const updateInstructorSchema = vine.object({
  nombre_completo: vine.string().minLength(3).optional(),
  instrumento_ids: vine.array(vine.number().positive()).minLength(1).optional(),
  activo: vine.boolean().optional(),
})
