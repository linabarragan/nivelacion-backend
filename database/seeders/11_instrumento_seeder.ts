// database/seeders/instrumento_seeder.ts
import Instrumento from '#models/instrumento'

export default class InstrumentoSeeder {
  async run() {
    await Instrumento.createMany([
      { nombre: 'Piano' },
      { nombre: 'Guitarra' },
      { nombre: 'Violín' },
      { nombre: 'Batería' },
      { nombre: 'Flauta' },
      { nombre: 'Saxofón' },
      { nombre: 'Trompeta' },
      { nombre: 'Bajo' },
      { nombre: 'Arpa' },
      { nombre: 'Acordeón' },
      { nombre: 'Clarinete' },
      { nombre: 'Trombón' },
      { nombre: 'Ocarina' },
      { nombre: 'Mandolina' },
      { nombre: 'Ukulele' },
      { nombre: 'Banjo' },
    ])
  }
}
