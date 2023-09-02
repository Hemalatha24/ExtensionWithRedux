import { legacy_createStore as createStore } from "redux";
import {profileReducer} from './reducers/profileReducer';

const store = createStore(profileReducer);

export default store;