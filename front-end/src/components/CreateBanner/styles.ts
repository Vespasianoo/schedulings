import styled from "styled-components"

export const Container = styled.div`
  align-self: stretch;

  margin-top: 3.2rem;
  padding-top: 0.25rem;

  border-radius: 0.8rem;
  background: #272727;
  background-image: linear-gradient(
    90deg,
    #e03232 0%,
    #e83232 50.52%,
    #f92e2e 100%
  );
`
export const Content = styled.div`
  background-color: var(--color-2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3.2rem 2.4rem;
  border-radius: 0.5rem;

  div {
    > span {
      display: block;

      &:first-child {
        font-weight: 900;
        font-size: 2.4rem;
        line-height: 160%;
        letter-spacing: -0.47px;

        color: var(--white);
      }
      &:last-child {
        font-weight: 400;
        font-size: 16px;
        line-height: 160%;

        letter-spacing: -0.18px;

        color: var(--color-3);
      }
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.2rem;

    padding: 1.2rem 1.6rem;
    background-color: var(--color-1);
    border-radius: 0.4rem;
    cursor: pointer;

    transition: background 200ms;
    &:hover {
      background-color: var(--color-1-hover);
    }
  }
`
