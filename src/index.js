import express from 'express'

const app = express()
const PORT = 3000

// Middleware
app.use(express.json())


app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`)
})
