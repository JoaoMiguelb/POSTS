import userActionsType from "./actions-types";

export const registerUser = (payload) => ({
    type: userActionsType.REGISTER,
    payload
})

export const loginUser = (payload) => ({
    type: userActionsType.LOGIN,
    payload
})

export const logoutUser = (payload) => ({
    type: userActionsType.LOGOUT,
    payload
})

export const setError = (payload) => ({
    type: userActionsType.SET_ERROR,
    payload
})

export const setFav = (favorito) => ({
    type: userActionsType.SET_FAV,
    payload: favorito
})

export const createPost = (payload) => ({
    type: userActionsType.CREATE_POST,
    payload,
})

export const deletePost = (payload) => ({
    type: userActionsType.DELETE_POST,
    payload
})