// redux
import { deletePost } from '../../redux/user/actions'
import { useDispatch, useSelector } from 'react-redux'

// icons
import { FaTrashAlt } from "react-icons/fa";

// CSS
import * as Styled from './styles'

const CardPostUser = ({ dado }) => {
    const dispatch = useDispatch()
    const { user } = useSelector(rootReducer => rootReducer.userReducer)

    const handleDelete = () => {
        dispatch(deletePost(dado.id))
    }

    return (
        <Styled.CardContainer>
            <Styled.Img src={dado.img} alt={dado.alt_description} />
            <Styled.UserNameText>@{dado.username}</Styled.UserNameText>
            <Styled.ButtonDelete onClick={handleDelete}><FaTrashAlt /></Styled.ButtonDelete>
        </Styled.CardContainer>
    )
}

export default CardPostUser
