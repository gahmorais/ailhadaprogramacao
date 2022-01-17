import axiosInstance from "axios";
import { IRounds } from "interfaces/interface_futebol";

const axios = axiosInstance.create({ baseURL: "https://thawing-plateau-66183.herokuapp.com" }); ///"http://localhost:3001

export async function read(url: string): Promise<IRounds[]> {
  const { data } = await axios.get(`ano/${url}`);
  return data;
}

export async function getAllYears(): Promise<string[]> {
  const { data } = await axios.get("/todos");
  console.log(data)
  return data;
}