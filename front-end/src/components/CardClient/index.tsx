import { Container, ContainerBox, Icon } from "./styles"

interface AgendamentosProps {
  id?: string
  clientName: string
  interest: string
  hour: string
  credit?: number
  entryValue?: number
  installment?: number
  onButtonClick: () => void
}

export function CardClient(props: AgendamentosProps) {
  return (
    <Container>
      <div>
        <ContainerBox>
          <span>Nome do cliente</span>
          <span>{props.clientName}</span>
        </ContainerBox>
        <ContainerBox>
          <span>Interesse</span>
          <span>{props.interest}</span>
        </ContainerBox>
        <ContainerBox>
          <span>Horário</span>
          <span>{props.hour}</span>
        </ContainerBox>
        <ContainerBox>
          <span>Valor do crédito</span>
          <span>{props.credit}</span>
        </ContainerBox>
        <ContainerBox>
          <span>Valor de entrada</span>
          <span>{props.entryValue}</span>
        </ContainerBox>
        <ContainerBox>
          <span>Parcelas</span>
          <span>{props.installment}</span>
        </ContainerBox>
      </div>
      <Icon color="#D91A1A" size={24} onClick={props.onButtonClick} />
    </Container>
  )
}
