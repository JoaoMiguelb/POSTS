import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%)
`

export const Input = styled.input`
    margin: 5px;
    width: 200px;
    border: 1px solid ${props => props.theme.colors.cinza};
    padding: 10px;
    border-radius: 10px;
    box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.167);

    &:focus {
    border-color: ${props => props.theme.colors.azulForte
    };
    outline: none; 

  }
`

export const Button = styled.button`
    border: none;
    background-color: ${props => props.theme.colors.azulFraco};
    padding: 8px;
    margin: 5px;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
`

export const Link = styled(NavLink)`
color: #4169E1;
  text-decoration: none;
`

export const H2 = styled.h2`
  color: ${props => props.theme.colors.azulForte};
`

export const Error = styled.p`
background-color: #f44336; /* Vermelho */
  color: #fff; /* Branco */
  font-weight: bold;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`
export const CheckBoxPassword = styled.input`
`

export const LabelCheckBox = styled.label`
  font-size: 12px;
`

export const Block = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
`
