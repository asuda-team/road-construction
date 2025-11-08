import { api } from "@/shared/api"
import { Information } from "../model";

export const getCompanyInformation = async (params: Record<string, unknown>): Promise<Information[]> => {
  const res = await api.get('/organization-informations', { params });
  return res.data.payload;
}