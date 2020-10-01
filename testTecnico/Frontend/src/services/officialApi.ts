import { call } from 'redux-saga/effects';
import axios from 'axios';

function* getData(url: string, method: string = 'GET') {
    const objectRequest: any = {
        method,
        url,
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const response = yield call(axios, objectRequest);
    const responseBody = response.data;
    return responseBody;
}

export default getData;
