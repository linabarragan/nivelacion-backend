import Instructor from '#models/instructor'
import { DateTime } from 'luxon'

export default class InstructorSeeder {
  public async run() {
    const now = DateTime.local()

    await Instructor.createMany([
      {
        nombreCompleto: 'Luis Miguel',
        activo: true,
        createdAt: now,
        updatedAt: now,
      },
      {
        nombreCompleto: 'Shakira Mebarak',
        activo: false,
        createdAt: now,
        updatedAt: now,
      },
      {
        nombreCompleto: 'Carlos Vives',
        activo: true,
        createdAt: now,
        updatedAt: now,
      },
    ])
  }
}
