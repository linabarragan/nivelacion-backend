import Instructor from '#models/instructor'

export default class InstructorSeeder {
  public async run() {
    await Instructor.createMany([
      {
        nombreCompleto: 'Luis Miguel',
        instrumentoPrincipal: 'Canto',
        activo: true,
      },
      {
        nombreCompleto: 'Shakira Mebarak',
        instrumentoPrincipal: 'Guitarra',
        activo: false,
      },
      {
        nombreCompleto: 'Carlos Vives',
        instrumentoPrincipal: 'Acordeón',
        activo: true,
      },
    ])
  }
}
