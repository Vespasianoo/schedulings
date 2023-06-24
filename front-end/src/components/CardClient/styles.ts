import styled from "styled-components"
import { XCircle } from "phosphor-react"

export const Container = styled.div`
  padding: 2rem 2.2rem;
  background: var(--color-2);
  width: 100%;
  max-width: 202px;
  border-radius: 0.8rem;
  display: flex;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
  }
`
export const ContainerBox = styled.div`
  > span {
    display: block;

    &:first-child {
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.7rem;
      letter-spacing: -0.18px;

      color: var(--text-color-1);
      margin-bottom: 0.4rem;
    }

    &:last-child {
      font-weight: 700;
      font-size: 1.4rem;
      line-height: 1.7rem;
      letter-spacing: -0.18px;
      color: var(--white);
    }
  }
`
export const Icon = styled(XCircle)`
  align-self: self-end;
  cursor: pointer;
`
