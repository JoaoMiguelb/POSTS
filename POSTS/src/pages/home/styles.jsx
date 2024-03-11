import styled from 'styled-components'

export const Div = styled.div`
    text-align: center; 
`

export const CardContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`

export const ButtonArrows = styled.button`
    background-color: none;
    border: none;
    font-size: 30px;
    padding: 10px;
    cursor: pointer;
    color:  ${props => props.theme.colors.azulFraco};
    opacity: 1;
    transition: .4s;

    &:hover {
        color: ${props => props.theme.colors.azulForte};
    }

    &:active {
        font-size: 28px;
    }
`

export const CreatePost = styled.form`
    background-color: ${props => props.theme.colors.cinza};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    padding: 20px;

   
`

export const Input = styled.input`
        border: none;
        padding: 5px;
        border-radius: 10px;
        box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
    
        &:focus {
        border-color: ${props => props.theme.colors.azulForte};
         outline: none;
        }

        &{@media screen and (min-width: 768px){
            padding: 8px
        }} 
`

export const HomeLabel = styled.label`
    cursor: pointer;
    color: ${props => props.theme.colors.azulForte};


`

export const InputBox = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
    font-size: 14px;

    &{@media screen and (min-width: 768px){
    font-size: 20px;
    gap: 5px;
}}
`

export const Button = styled.button`
    border: none;
    padding: 8px;
    background-color: ${props => props.theme.colors.azulFraco};
    color: white;
    border-radius: 10px;
    cursor: pointer;

    &{@media screen and (min-width: 768px){
        font-size: 16px;
}}
`
