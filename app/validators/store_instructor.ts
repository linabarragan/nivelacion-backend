import vine from '@vinejs/vine'

export const storeInstructorSchema = vine.object({
  nombre_completo: vine.string().minLength(3),
  instrumento_ids: vine.array(vine.number().positive()).minLength(1), // al menos un instrumento debe seleccionarse
})
