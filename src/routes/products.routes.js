import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router()
const prisma = new PrismaClient()

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

export default router