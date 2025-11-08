import { api } from "@/shared/api";
import { ICompany } from "../model";
import { Locale } from "@/i18n/config";

export const getCompanies = async (
  params?: Record<string, unknown>
): Promise<ICompany[]> => {
  const res = await api.get("/organizations", { params });
  return res.data.payload;
};

export const getCompanyDetails = async (
  id: number,
  lang: Locale
): Promise<ICompany> => {
  const res = await api.get(`/organizations/${id}`, { params: { lang } });
  return res.data.payload;
};
