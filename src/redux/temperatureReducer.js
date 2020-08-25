import {SAVETEMPERATURE } from './type'
const INITIAL_STATE = {
    data:[],
  };
  const temperatureReducer = (state = INITIAL_STATE, action) => {
    const {payload} = action;
    switch (action.type) {
      case SAVETEMPERATURE:
          
          return {
              ...state,
              data:payload
          }
          break;
      default:
        return state
    }
  };
 export default temperatureReducer 
  