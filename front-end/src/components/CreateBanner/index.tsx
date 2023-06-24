import React from "react"
import { AddressBook } from "phosphor-react"
import * as Dialog from "@radix-ui/react-dialog"

import { Container, Content } from "./styles"

export const CreateBanner: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <span>Ainda sem agendamentos?</span>
          <span>Ligue para agendar!</span>
        </div>
        <Dialog.Trigger>
          <AddressBook size={24} />
          Agendar
        </Dialog.Trigger>
      </Content>
    </Container>
  )
}
