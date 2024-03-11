// redux
import { useSelector } from 'react-redux'

// componentes
import Card from '../../components/card'

// CSS
import * as Styled from './styles'

const Favorites = () => {
    const { user } = useSelector(rootReducer => rootReducer.userReducer);
    const fav = user ? user.fav : [];

    return (
        <Styled.FavoritesContainer>
            {(user.login && fav.length > 0)
                ? fav.map((favorite) => <Card dado={favorite} key={favorite.id} />)
                : <p>Você não possui favoritos :/</p>}
        </Styled.FavoritesContainer>
    )
}

export default Favorites;
