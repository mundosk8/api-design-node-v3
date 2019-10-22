import { Router } from 'express'
const controller = (req, res) => {
  res.send({ message: 'hello' })
}

const router = Router()

// /api/item
router
  .route('/')
  .get(controller)
  .post(controller)

// /api/item/:id
router
  .route('/:id')
  .get(controller)
  .put(controller)
  .delete(controller)

export default router
