// redux
import { setFav } from '../../redux/user/actions'
import { useDispatch, useSelector } from 'react-redux'

// icons 
import { FaHeart, FaRegHeart } from "react-icons/fa";

// CSS
import * as Styled from './styles'

const Card = ({ dado }) => {
  const dispatch = useDispatch()
  const { user } = useSelector(rootReducer => rootReducer.userReducer)
  const isFavorited = user && user.fav && user.fav.some(item => item.id === dado.id);
  const handleFav = () => {
    dispatch(setFav(dado))
  }

  return (
    <Styled.CardContainer>
      <Styled.Img src={dado.urls.small} alt={dado.alt_description} />
      <Styled.UserNameText>@{dado.user.username}</Styled.UserNameText>
      {user.login === true ? (
        <>
          {isFavorited ? (
            <Styled.ButtonFav onClick={handleFav}><FaHeart /></Styled.ButtonFav> // remover
          ) : (
            <Styled.ButtonFav onClick={handleFav}><FaRegHeart /></Styled.ButtonFav> //adicionar
          )}
        </>
      ) : (
        <p>Faça login para adicionar aos favoritos</p>
      )}
    </Styled.CardContainer>
  )
}

export default Card
