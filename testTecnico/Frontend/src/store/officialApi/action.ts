import { GET_ALL_CHAMP } from "./action-types"

export const getAllChamp = (champions: any) => {
    return {
        type: GET_ALL_CHAMP,
        payload: champions
    }
}
