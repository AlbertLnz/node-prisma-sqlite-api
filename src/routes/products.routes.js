import { Router } from "express";

const router = Router()

router.get('/products', (_req, res) => {
  res.send('List of products')
})

export default router