import { GET_ALL_CHAMPULL,DELETE_CHAMP_CHAMPULL, ADD_CHAMP_CHAMPULL } from "./action-types"

export const getAllChampPull = (champions: any) => {
    return {
        type: GET_ALL_CHAMPULL,
        payload: champions
    }
}

export const deleteChampion = (champion: any) => {
    return {
        type: DELETE_CHAMP_CHAMPULL,
        payload: champion
    }
}

export const addChamp = (champion: any) => {
    return {
        type: ADD_CHAMP_CHAMPULL,
        payload: champion
    }
}