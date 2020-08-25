 import axios from "axios";
export const getWeatherData = async (lat,lng) => {
  try {
    let data = await axios({
      method: "get",
      url: "http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lng+"&appid=efe9c22c57978488b8788b803605314a",
      // headers: { Authorization: "token " + token },
    });
    return data;
  } catch (error) {
    return error.response;
  }
};