// redux
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../redux/user/actions'

// CSS
import * as Styled from './styles'

const Header = ({ conteudo }) => {
  const { user } = useSelector(rootReducer => rootReducer.userReducer)
  const dispatch = useDispatch()

  const handleLogout = () => {
    dispatch(logoutUser())
  }

  return (
    <Styled.NavBar>
      <Styled.Link to='/'><Styled.H2> POSTS </Styled.H2></Styled.Link>
      {conteudo}
      <Styled.Ul>
        {!user.login 
        ? <Styled.Link to='/login'>Login</Styled.Link> 
        : <p onClick={handleLogout} >Sair</p>
        }
        <Styled.Link to='/favorites'>Favoritos</Styled.Link>
      </Styled.Ul>
    </Styled.NavBar>
  )
}

export default Header