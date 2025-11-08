import { api } from "@/shared/api";
import { IContact } from "../model";

export const sendRequest = async (data: IContact): Promise<void> => {
  const res = await api.post('/requests', data);
  return res.data.payload;
};
