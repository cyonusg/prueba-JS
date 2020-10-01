import { GET_ALL_CHAMPULL_ASYNC } from "./action-types";


const initialState = {
    champsPull: []
}

export default (state = initialState, { type, payload }: any) => {
    switch(type) {
        case GET_ALL_CHAMPULL_ASYNC:
        return { ...payload }

        default:
        return state;
    }
}
