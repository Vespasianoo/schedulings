import styled from "styled-components"
import * as Dialog from "@radix-ui/react-dialog/"

export const Container = styled.div``

export const Overlay = styled(Dialog.Overlay)`
  background-color: rgb(0 0 0 / 0.6);
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  position: fixed;
`

export const Content = styled(Dialog.Content)`
  width: 488px;
  position: absolute;
  background-color: #272727;
  padding: 3.2rem 4rem;
  border-radius: 4px;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  > form {
    overflow: hidden;
  }
`
export const Title = styled(Dialog.Title)`
  color: red;
  font-weight: 900;
  font-size: 32px;
  line-height: 160%;

  letter-spacing: -0.69px;

  color: #ffffff;
  margin-bottom: 0.8rem;
`

export const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 1.6rem;

  > label {
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 2.6rem;

    letter-spacing: -0.18px;

    color: var(--white);
  }
  > input {
    height: 5rem;
    background-color: var(--bg-input);
    border-radius: 0.4rem;
    padding-left: 1.6rem;
    width: 100%;
    outline: none;
  }

  > select {
    height: 5rem;
    background-color: var(--bg-input);

    border-radius: 0.4rem;
    padding-left: 1.6rem;
    outline: none;
  }
`

export const Values = styled.div`
  display: flex;
  gap: 1.6rem;
`
export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;
`

export const ButtonClose = styled(Dialog.Close)`
  padding: 1.2rem 2rem;

  background: var(--button-close);
  border-radius: 0.4rem;

  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: -0.18px;

  color: var(--white);
  cursor: pointer;
`

export const ButtonSubmit = styled.button`
  padding: 1.2rem 2rem;

  background-color: var(--color-1);
  border-radius: 0.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  font-weight: 600;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: -0.18px;

  color: var(--white);
  cursor: pointer;
`
