import { api } from "@/shared/api";
import { ILicence } from "../model";
import { Locale } from "@/i18n/config";

export const getLicences = async (params?: Record<string, unknown>): Promise<ILicence[]> => {
  const res = await api.get('/licenses', { params });
  return res.data.payload;
};

export const getLicenceDetails = async (id: number, lang: Locale): Promise<ILicence[]> => {
  const res = await api.get(`/licenses/${id}`, { params: { lang }});
  return res.data.payload;
};
