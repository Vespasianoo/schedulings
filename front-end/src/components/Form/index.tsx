import React, { FormEvent, useEffect, useState } from "react"
import axios from "axios"
import { AddressBook } from "phosphor-react"

import * as Dialog from "@radix-ui/react-dialog/"

import {
  Container,
  Overlay,
  Content,
  Title,
  InputBox,
  Values,
  Footer,
  ButtonClose,
  ButtonSubmit
} from "./styles"

interface Days {
  id: string
  name: string
}

export const Form: React.FC = () => {
  const [days, setDays] = useState<Days[]>([])

  useEffect(() => {
    axios("http://localhost:3333/days").then(response => {
      setDays(response.data)
    })
  }, [])

  async function createNewShedules(event: FormEvent) {
    event.preventDefault()

    const formData = new FormData(event.target as HTMLFormElement)
    const data = Object.fromEntries(formData)

    if (!data.clientName) {
      return
    }

    try {
      await axios.post(
        `http://localhost:3333/days/${data.weekDay}/schedulings`,
        {
          clientName: data.clientName,
          interest: data.interest,
          entryValue: Number(data.entryValue),
          installment: Number(data.installment),
          credit: Number(data.credit),
          weekDay: data.weekDay,
          hour: data.hour
        }
      )
      alert("Agendamento criando com sucesso")
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <Title>NOVO AGENDAMENTO</Title>
          <form onSubmit={createNewShedules} autoComplete="off">
            <InputBox>
              <label htmlFor="clientName">Nome do cliente</label>
              <input
                type="text"
                id="clientName"
                name="clientName"
                placeholder="Qual o nome do cliente?"
              />
            </InputBox>
            <InputBox>
              <label htmlFor="weekDay">Qual o dia da semana?</label>
              <select name="weekDay" id="weekDay" defaultValue="">
                <option disabled value="">
                  Selecione o dia que deseja agendar
                </option>

                {days.map(dia => {
                  return (
                    <option key={dia.id} value={dia.id}>
                      {dia.name}
                    </option>
                  )
                })}
              </select>
            </InputBox>
            <InputBox>
              <label htmlFor="hour">Qual horário do dia?</label>
              <input type="text" id="hour" name="hour" placeholder="15:30" />
            </InputBox>
            <InputBox>
              <label htmlFor="interest">Qual o interesse?</label>
              <input
                type="text"
                id="interest"
                name="interest"
                placeholder="Casa, carro ou moto"
              />
            </InputBox>
            <Values>
              <InputBox>
                <label htmlFor="entryValue">Entrada</label>
                <input
                  type="number"
                  id="entryValue"
                  name="entryValue"
                  placeholder="R$ 8000"
                />
              </InputBox>
              <InputBox>
                <label htmlFor="installment">Parcelas</label>
                <input
                  type="number"
                  id="installment"
                  name="installment"
                  placeholder="R$ 500"
                />
              </InputBox>
              <InputBox>
                <label htmlFor="credit">Crédito</label>
                <input
                  type="number"
                  id="credit"
                  name="credit"
                  placeholder="R$ 80.000"
                />
              </InputBox>
            </Values>

            <Footer>
              <ButtonClose>Cancelar</ButtonClose>
              <ButtonSubmit type="submit">
                <AddressBook size={24} />
                Agendar
              </ButtonSubmit>
            </Footer>
          </form>
        </Content>
      </Dialog.Portal>
    </Container>
  )
}
