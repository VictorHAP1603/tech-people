import { GetNewsProps } from "../pages/Home/News";

export const GET_NEWS = async (): Promise<GetNewsProps[]> => {
  const response = await fetch("/news.json");
  const json = await response.json();

  return json;
};
