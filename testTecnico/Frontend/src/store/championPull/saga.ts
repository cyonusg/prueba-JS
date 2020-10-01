
import { call, put, takeLatest } from 'redux-saga/effects';
import {getAllData, DeteleChamp, addChamp } from '../../services/championsPull';
import { GET_ALL_CHAMPULL,GET_ALL_CHAMPULL_ASYNC, DELETE_CHAMP_CHAMPULL, ADD_CHAMP_CHAMPULL } from './action-types';
import { toast } from 'react-toastify';

function* asyncGetAllData() {
    try {
        const response = yield call(getAllData);        
        yield put({
            type: GET_ALL_CHAMPULL_ASYNC,
            payload: { champsPull: response.data.result.data }
        });

    } catch(error) {
        console.log(error);
    }
}

function* asyncDeteleChamp({ payload }: any) {
    try {
        const response = yield call(DeteleChamp,payload);        
        yield put({
            type: GET_ALL_CHAMPULL,
            payload: { champsPull: response.data.result.data }
        });
        toast.success(response.data.result.message);
    } catch(error) {
        toast.error('Error al guardar en la BD');
    }
}

function* asyncAddChamp({ payload }: any) {
    try {
        const response = yield call(addChamp,payload);
        yield call((asyncGetAllData))
    } catch (error) {
        toast.error('Error al guardar en la BD');
    }
}

export function* watchGetAllData() {
    yield takeLatest(GET_ALL_CHAMPULL, asyncGetAllData);
}


export function* watchDeteleChamp() {
    yield takeLatest(DELETE_CHAMP_CHAMPULL, asyncDeteleChamp);
}



export function* watchAddChamp() {
    yield takeLatest(ADD_CHAMP_CHAMPULL, asyncAddChamp);
}