import { call, put, takeLatest } from 'redux-saga/effects';
import fetchService from '../../services/officialApi';
import { GET_ALL_CHAMP,GET_ALL_CHAMP_ASYNC } from './action-types';

function* asyncDataOfficialApi() {
    try {
        const response = yield call(fetchService, 'http://ddragon.leagueoflegends.com/cdn/10.20.1/data/es_ES/champion.json');        
        console.log(response.data);
        yield put({
            type: GET_ALL_CHAMP_ASYNC,
            payload: { champs: Object.values(response.data) }
        });

    } catch(error) {
        console.log(error);
    }
}

export function* watchDataOfficialApi() {
    yield takeLatest(GET_ALL_CHAMP, asyncDataOfficialApi);
}
