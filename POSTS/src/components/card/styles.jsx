import styled from 'styled-components'

export const CardContainer = styled.div`
    width: 200px;
    background-color: ${props => props.theme.colors.branco};
    border: 1px solid ${props => props.theme.colors.cinzaClaro};
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
    margin: 10px;
    text-align: center;

    &:hover {
        transform: scale(1.05);
    }

    &{@media screen and (min-width: 768px){
        width: 250px;
        font-size: 18px;
    }}
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

    &{@media screen and (min-width: 768px){
        font-size: 20px;
    }}
`

export const ButtonFav = styled.button`
    color: red;
    border: none;
    cursor: pointer;
    font-size: 20px;
    transition: transform .6s;

    &:hover {
        transform: translate(0px, -2px);
    }

    &{@media screen and (min-width: 768px){
        font-size: 24px;
    }}
`