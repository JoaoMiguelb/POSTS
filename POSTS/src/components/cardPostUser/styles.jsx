import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 200px;
    background-color: ${props => props.theme.colors.branco};
    border: 1px solid ${props => props.theme.colors.cinzaClaro};
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    margin: 10px;

    &:hover {
        transform: scale(1.05);
    }
`

export const Img = styled.img`
    width: 100%;
    height: 120px;
    object-fit: cover;
    border-bottom: 1px solid ${props => props.theme.colors.cinzaClaro};
`

export const UserNameText = styled.p`
    color: ${props => props.theme.colors.azulEscuro};
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 5px;
`

export const ButtonDelete = styled.button`
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: transform .6s;

    &:hover {
        transform: translate(0px, -2px);
        
    }
`