import axios from 'axios'
import { GetNewsProps } from "../pages/Home/News";

const api = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export const GET_NEWS = async (): Promise<GetNewsProps[]> => {
  const { data } = await api.get('/news')

  return data;
};


export const GET_SCHEDULES = async () => {
  const { data } = await api.get('/schedules')

  return data
}