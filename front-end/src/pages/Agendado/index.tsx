import { useEffect, useState } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import { Loading } from "../../components/Loading"
import { Container } from "./styles"
import { CardClient } from "../../components/CardClient"

interface AgendamentosProps {
  id: string
  clientName: string
  hour: string
  interest: string
  entryValue: number
  installment: number
  credit: number
  weekDay?: string
  diaId?: string
}

export const Agendado = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const { id } = useParams()
  const [schedulings, setSchedulings] = useState<AgendamentosProps[]>([])

  useEffect(() => {
    const fetchSchedulings = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3333/days/${id}/schedulings`
        )
        setSchedulings(response.data)
        setIsLoading(false)
      } catch (error) {
        console.error("Erro ao obter os agendamentos:", error)
      }
    }

    fetchSchedulings()
  }, [schedulings])

  const deleteSchedulingsId = async (schedulingsId: string) => {
    try {
      await axios.delete(`http://localhost:3333/schedulings/${schedulingsId}`)
      console.log("Agendamento deletado com sucesso")
    } catch (error) {
      console.error("Erro ao deletar o agendamento:", error)
    }
  }
  return (
    <Container>
      <h1>AGENDAMENTOS</h1>
      <h2>VAMOS GERAR CONTRATO?</h2>
      <div>
        {isLoading ? (
          <Loading />
        ) : schedulings.length ? (
          schedulings.map(day => (
            <CardClient
              key={day.id}
              clientName={day.clientName}
              interest={day.interest}
              hour={day.hour}
              credit={day.credit}
              entryValue={day.entryValue}
              installment={day.installment}
              onButtonClick={() => deleteSchedulingsId(day.id)}
            />
          ))
        ) : (
          <p>Você ainda não registrou nenhum agendamento.</p>
        )}
      </div>
    </Container>
  )
}
