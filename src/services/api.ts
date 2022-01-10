import api from "axios";
import { GetNewsProps } from "../pages/Home/News";

// const api = axios.create({
//   baseURL: process.env.REACT_APP_BASE_URL,
// });

export const GET_NEWS = async (): Promise<GetNewsProps[]> => {
  const { data } = await api.get("/news.json");

  return data;
};

export const GET_SCHEDULES = async () => {
  const { data } = await api.get("/schedules.json");

  return data;
};
