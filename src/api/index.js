import axios from "axios";
const url = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate }
    } = await axios.get(url);
    //return data;
    //console.log(data);
    //return { confirmed, recovered, deaths, lastUpdate };

    const modifiedData = { confirmed, recovered, deaths, lastUpdate };
    return modifiedData;
  } catch (ex) {
    throw ex;
    console.log(ex.message);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    console.log(data);
    const modifiedData = data.map(dailyData => ({
      confirmed: dailyData.confirmed.total
    }));
    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};
