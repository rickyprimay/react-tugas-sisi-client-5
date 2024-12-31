import { createStore } from 'redux';
import { combineReducers } from 'redux';
import mahasiswaReducer from './reducers/mahasiswaReduces';

const rootReducer = combineReducers({
  mahasiswa: mahasiswaReducer,
});

const store = createStore(rootReducer);

export default store;