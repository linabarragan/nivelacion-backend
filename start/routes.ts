/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
const InstructorsController = () => import('#controllers/instructors_controller')

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
router.get('/', async () => {
  return {
    hello: 'world',
  }
})
