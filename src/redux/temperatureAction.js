import {SAVETEMPERATURE} from './type'


export const saveTemperatureData = (data) => {
    return {type: SAVETEMPERATURE,
     payload: { data }
    }
};
