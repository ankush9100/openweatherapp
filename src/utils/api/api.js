import API from 'apisauce';
const baseURL = "http://api.openweathermap.org/data/2.5/"
const APICall = API.create({baseURL:baseURL})
export const getWeatherData = async (lat,lng) => {
  try {
 let data = await APICall.get("forecast?lat="+lat+"&lon="+lng+"&appid=efe9c22c57978488b8788b803605314a");
 return data;
  }catch(error){
    return error.response
  }
}