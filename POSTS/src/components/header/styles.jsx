import styled from "styled-components"
import { NavLink } from 'react-router-dom'

export const NavBar = styled.nav`
    width: 100%;
    background-color: ${props => props.theme.colors.azulForte};
    color: ${props => props.theme.colors.corFont};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    box-sizing: border-box;

    &{@media screen and (min-width: 768px) {
        padding: 14px;
        font-size: 18px;
    }
    }
`

export const H2 = styled.h2`
    font-style: italic;
`

export const Ul = styled.ul`
    list-style: none;
    display: flex;
    gap: 10px;
`

export const Link = styled(NavLink)`
    color: ${props => props.theme.colors.corFont};
    text-decoration: none;
`