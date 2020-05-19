import { Router } from 'express'

import UserController from './controllers/UserController'
import MentorController from './controllers/UserController'

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

routes.get('/mentors', MentorController.index)
routes.post('/mentors', MentorController.store)
routes.put('/mentors/:id', MentorController.update)
routes.delete('/mentors/:id', MentorController.delete)

export default routes
