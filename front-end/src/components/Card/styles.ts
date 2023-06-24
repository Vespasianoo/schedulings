import styled from "styled-components"
import { Link } from "react-router-dom"
export const Container = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 12px;

  gap: 0.6rem;

  width: 100%;
  max-width: 220px;
  height: 9.2rem;

  border-radius: 0.4rem;
  background-color: var(--color-1);

  > span:first-child {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 2.4rem;
    color: var(--white);
  }

  > span:last-child {
    font-size: 1.6rem;
    line-height: 2.4rem;
    color: var(--white);
  }

  transition: background 200ms;
  &:hover {
    background-color: var(--color-1-hover);
  }
`
