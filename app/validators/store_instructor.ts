import vine from '@vinejs/vine'

export const storeInstructorSchema = vine.object({
  nombre_completo: vine.string().minLength(3),
  instrumento_principal: vine.string().minLength(2),
})
