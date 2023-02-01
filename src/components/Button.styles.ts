import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'sucess';

interface IButtonContainer {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  sucess: 'green'
};

export const ButtonContainer = styled.button<IButtonContainer>`
  width: 100px;
  height: 40px;

  background-color: ${props => props.theme.primary}

  /* ${props => {
    return `background-color: ${buttonVariants[props.variant]}`
  }} */
`