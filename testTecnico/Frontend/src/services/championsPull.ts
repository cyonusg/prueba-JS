import { call } from 'redux-saga/effects';
import axios from 'axios';
const urlApi = "http://localhost:3001/api/";
export default class champiosPull {} 

export function* getAllData() {
    const objectRequest: any = {
        method:'GET',
        url:`${urlApi}champions`,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const response = yield call(axios, objectRequest);
    const responseBody = response;
    return responseBody;
}

export function* DeteleChamp(id: string){
    const objectRequest: any = {
        method:'DELETE',
        url:`${urlApi}champions/${id}`,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const response = yield call(axios, objectRequest);
    const responseBody = response;
    return responseBody;
}


export function* addChamp(champion: any){
    const objectRequest: any = {
        method:'POST',
        url:`${urlApi}champions/`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: {
            'name': champion.name,
            'slug': champion.id,
            'tags': champion.tags,
            'info': champion.info,
            'blurb': champion.blurb
        }
}
    const response = yield call(axios, objectRequest);
    const responseBody = response;
    return responseBody;
}
