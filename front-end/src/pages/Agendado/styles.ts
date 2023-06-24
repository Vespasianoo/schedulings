import styled from "styled-components"

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;

  > div {
    display: flex;
    justify-content: flex-start;
    gap: 2.2rem;

    > p {
      font-size: 1.6rem;
      line-height: 160%;
      text-align: center;
      color: var(--text-color-2);
    }
  }

  > h1 {
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 2.6rem;
    letter-spacing: 0.08em;

    color: var(--color-1);
    margin-block: 14.2rem 1.2rem;
  }

  > h2 {
    font-weight: 700;
    font-size: 3.2rem;
    line-height: 2.6rem;
    color: var(--white);

    margin-bottom: 5.2rem;
  }
`
