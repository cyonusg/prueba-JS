import { all, fork } from 'redux-saga/effects';
import { watchDataOfficialApi } from './officialApi/saga';
import { watchGetAllData,watchDeteleChamp, watchAddChamp } from './championPull/saga';

export default function* () {
    yield all([
        fork(watchDataOfficialApi),
        fork(watchGetAllData),
        fork(watchDeteleChamp),
        fork(watchAddChamp),
    ]);
}
