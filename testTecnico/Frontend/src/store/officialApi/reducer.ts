import { GET_ALL_CHAMP_ASYNC } from "./action-types";


const initialState = {
    champs: []
}

export default (state = initialState, { type, payload }: any) => {
    switch(type) {
        case GET_ALL_CHAMP_ASYNC:
        return { ...payload }

        default:
        return state;
    }
}
