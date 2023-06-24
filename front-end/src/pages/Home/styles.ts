import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  flex-direction: column;
  margin-inline: auto;
  width: 100%;
  max-width: 1200px;
  padding-inline: 2.2rem;
  > img {
    width: 15rem;
    margin-block: 4rem;
  }
  > h1 {
    font-weight: 900;
    font-size: 5.4rem;
    color: var(--white);
    margin-bottom: 4.2rem;
  }
`

export const DaysContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 2.4rem;
`
