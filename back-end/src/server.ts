import express from "express"
import cors from "cors"
import { PrismaClient } from "@prisma/client"

const app = express()

app.use(express.json())

const corsOptions = {
  origin: "http://localhost:5173"
}
app.use(cors(corsOptions))

const prisma = new PrismaClient()

app.get("/days", async (request, response) => {
  const day = await prisma.day.findMany({
    include: {
      _count: {
        select: {
          schedulings: true
        }
      }
    }
  })
  return response.json(day)
})

app.post("/days", async (request, response) => {
  const body: any = request.body
  const days = await prisma.day.create({
    data: {
      name: body.name
    }
  })

  return response.status(201).json(days)
})

app.post("/days/:id/schedulings", async (request, response) => {
  const dayId = request.params.id
  const body: any = request.body

  const schedulings = await prisma.scheduling.create({
    data: {
      dayId,
      clientName: body.clientName,
      interest: body.interest,
      entryValue: body.entryValue,
      installment: body.installment,
      credit: body.credit,
      hour: body.hour
    }
  })
  return response.status(201).json(schedulings)
})

app.get("/days/:id/schedulings", async (request, response) => {
  const dayId = request.params.id

  const schedulings = await prisma.scheduling.findMany({
    where: {
      dayId
    }
  })
  return response.json(schedulings)
})

app.delete("/schedulings/:id", async (req, res) => {
  const { id } = req.params

  try {
    const schedulings = await prisma.scheduling.delete({
      where: { id }
    })
    res.status(200).json({ message: "Agendamento deletado com sucesso" })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Erro ao deletar o agendamento" })
  }
})

app.listen(3333)
