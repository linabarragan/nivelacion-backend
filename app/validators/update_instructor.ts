import vine from '@vinejs/vine'

export const updateInstructorSchema = vine.object({
  nombre_completo: vine.string().minLength(3).optional(),
  instrumento_principal: vine.string().minLength(2).optional(),
  activo: vine.boolean().optional(),
})
