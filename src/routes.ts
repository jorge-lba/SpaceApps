import { Router } from 'express'

import UserController from './controllers/UserController'
import MentorController from './controllers/MentorController'
import TeamController from './controllers/TeamController'

const routes = Router()

routes.get('/users', UserController.index)
routes.post('/users', UserController.store)
routes.put('/users/:id', UserController.update)
routes.delete('/users/:id', UserController.delete)

routes.get('/mentors', MentorController.index)
routes.post('/mentors', MentorController.store)
routes.put('/mentors/:id', MentorController.update)
routes.delete('/mentors/:id', MentorController.delete)

routes.get('/teams', TeamController.index)
routes.post('/teams', TeamController.store)
routes.put('/teams/:id', TeamController.update)

export default routes
