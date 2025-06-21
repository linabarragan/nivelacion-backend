import Instructor from '#models/instructor'
import Instrumento from '#models/instrumento'

export default class InstrumentoInstructorSeeder {
  public async run() {
    const luis = await Instructor.findBy('nombre_completo', 'Luis Miguel')
    const shakira = await Instructor.findBy('nombre_completo', 'Shakira Mebarak')
    const carlos = await Instructor.findBy('nombre_completo', 'Carlos Vives')

    const piano = await Instrumento.findBy('nombre', 'Piano')
    const canto = await Instrumento.findBy('nombre', 'Canto')
    const guitarra = await Instrumento.findBy('nombre', 'Guitarra')
    const banjo = await Instrumento.findBy('nombre', 'Banjo')
    const acordeon = await Instrumento.findBy('nombre', 'Acordeón')

    if (luis && piano && canto) {
      await luis.related('instrumentos').attach([piano.id, canto.id])
    }

    if (shakira && guitarra && banjo) {
      await shakira.related('instrumentos').attach([guitarra.id, banjo.id])
    }

    if (carlos && acordeon && guitarra) {
      await carlos.related('instrumentos').attach([acordeon.id, guitarra.id])
    }
  }
}
