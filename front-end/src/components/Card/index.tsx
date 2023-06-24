import { Container } from "./styles"

interface cardProps {
  title: string
  agendamentos: number
  url: string
}

export const Card: React.FC<cardProps> = ({
  title,
  agendamentos,
  url
}: cardProps) => {
  return (
    <Container to={url}>
      <span>{title}</span>
      <span>{agendamentos} agendamento(s)</span>
    </Container>
  )
}
