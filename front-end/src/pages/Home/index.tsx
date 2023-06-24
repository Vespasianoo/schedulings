import { useEffect, useState } from "react"
import axios from "axios"
import * as Dialog from "@radix-ui/react-dialog"

import logo from "../../assets/logo.png"
import { Card } from "../../components/Card"
import { CreateBanner } from "../../components/CreateBanner"
import { Form } from "../../components/Form"
import { Container, DaysContainer } from "./styles"

interface Days {
  id: string
  name: string
  _count: {
    schedulings: number
  }
}

export const Home = () => {
  const [days, setDays] = useState<Days[]>([])

  useEffect(() => {
    axios("http://localhost:3333/days").then(response => {
      setDays(response.data)
    })
  }, [days])

  return (
    <Container>
      <img src={logo} alt="Logo Alpha Invest" />
      <h1>SEUS AGENDAMENTOS.</h1>
      <DaysContainer>
        {days.map(day => {
          return (
            <Card
              key={day.id}
              title={day.name}
              agendamentos={day._count.schedulings}
              url={`/days/${day.id}`}
            />
          )
        })}
      </DaysContainer>

      <Dialog.Root>
        <CreateBanner />
        <Form />
      </Dialog.Root>
    </Container>
  )
}
