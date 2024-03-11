import userActionsType from './actions-types';

const initialState = {
    user: {},
    error: '',
};

const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case userActionsType.LOGIN:
            // verificando se é o mesmo
            if (state.user.displayName === action.payload.displayName) {
                // Senha correta, lógica de login bem-sucedido
                if (state.user.password === action.payload.password) {
                    return {
                        ...state,
                        error: null,
                        user: { ...state.user, login: true }
                    };
                    // Senha incorreta
                } else {
                    return { ...state, error: 'Senha incorreta.' };
                }
                // Usuário não encontrado
            } else {
                return { ...state, error: 'Usuário não encontrado.' };
            }

        case userActionsType.LOGOUT:
            return { ...state, user: { ...state.user, login: false } }

        case userActionsType.REGISTER:
            // verificando se já está registrado
            const userIsAlreadyRegister = state.user.hasOwnProperty(action.payload.displayName);
            if (userIsAlreadyRegister) {
                console.log(`Usuário '${action.payload.displayName}' já existe`);
                return {
                    ...state,
                    error: `Usuário com apelido '${action.payload.displayName}' já existe.`
                };
            } else {
                return {
                    ...state,
                    user: {
                        ...state.user,
                        login: true,
                        displayName: action.payload.displayName,
                        email: action.payload.email,
                        password: action.payload.password,
                        fav: []
                    }, error: null
                };
            }

        case userActionsType.SET_ERROR:
            return {
                ...state,
                error: action.payload
            }

        case userActionsType.SET_FAV:
            const favIndex = state.user.fav.findIndex(
                (item) => item.id === action.payload.id
            );

            // Verifica se o favorito já está na lista
            if (favIndex === -1) {
                // Adiciona o favorito à lista se não estiver presente
                return {
                    ...state,
                    user: {
                        ...state.user,
                        fav: [...state.user.fav, action.payload]
                    }
                };
                // Remove o favorito se já estiver na lista
            } else {
                const updatedFav = [...state.user.fav];
                updatedFav.splice(favIndex, 1);

                return {
                    ...state,
                    user: {
                        ...state.user,
                        fav: updatedFav
                    }
                };
            }


        case userActionsType.CREATE_POST:
            return {
                ...state,
                user: {
                    ...state.user,
                    posts: state.user.posts
                        ? [action.payload, ...state.user.posts]
                        : [action.payload]
                }
            };


        case userActionsType.DELETE_POST:
            return {
                ...state,
                user: {
                    ...state.user,
                    posts: state.user.posts.filter(
                        post => post.id !== action.payload)
                }
            };


        default:
            return state;
    }
};

export default userReducer;