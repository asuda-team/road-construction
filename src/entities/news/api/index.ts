import { api } from "@/shared/api";
import { INews } from "../model";
import { Locale } from "@/i18n/config";

export const getNews = async (
  params: Record<string, unknown>
): Promise<INews[]> => {
  const res = await api.get("/news", { params });
  return res.data.payload;
};

export const getNewsDetails = async (
  id: number,
  lang: Locale
): Promise<INews> => {
  const res = await api.get(`/news/${id}`, { params: { lang } });
  return res.data.payload;
};
