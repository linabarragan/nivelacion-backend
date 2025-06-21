import router from '@adonisjs/core/services/router'
const InstructorsController = () => import('#controllers/instructors_controller')
const InstrumentosController = () => import('#controllers/instrumentos_controller')

router
  .group(() => {
    router.get('/', [InstructorsController, 'index'])
    router.post('/', [InstructorsController, 'store'])
    router.get('/:id', [InstructorsController, 'show'])
    router.patch('/:id', [InstructorsController, 'update'])
    router.delete('/:id', [InstructorsController, 'destroy'])

    // Activar/inactivar
    router.put('/:id/toggle-activo', [InstructorsController, 'toggleActivo'])
  })
  .prefix('/api/instructores')

router
  .group(() => {
    router.get('/', [InstrumentosController, 'index'])
    // Aquí podrías agregar más rutas para Instrumentos si es necesario
  })
  .prefix('/api/instrumentos')
