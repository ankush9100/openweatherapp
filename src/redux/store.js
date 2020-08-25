import { createStore } from 'redux'
import combineReducers from './mainReducer'
const store = createStore(combineReducers)
export default store