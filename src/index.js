import express from 'express'
import productsRoutes from './routes/products.routes.js'
import categoriesRoutes from './routes/categories.routes.js'

const app = express()
const PORT = 3000

// Middleware
app.use(express.json())

// Routes
app.use('/api', productsRoutes)
app.use('/api', categoriesRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
