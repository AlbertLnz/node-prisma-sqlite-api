import { Router } from "express";
import { prisma } from "../db.js";

const router = Router()

router.get('/products', async (_req, res) => {
  const products = await prisma.product.findMany()
  res.json(products)
})

router.post('/products', async (req, res) => {
  const data = req.body

  const newProduct = await prisma.product.create({
    data: data
  })

  res.json(newProduct)
})

router.get('/products/:id', async (req, res) => {
  const paramId = req.params.id
  
  const product = await prisma.product.findFirst({
    where: {
      id: Number(paramId) // id: Number(paramId) === id: +paramId === id: parseInt(paramId)
    }
  })

  return res.json(product)
})

export default router