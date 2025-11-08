import { api } from "@/shared/api"
import { IBanner } from "../model";

export const getBanners = async (params?: Record<string, unknown>): Promise<IBanner[]> => {
  const res = await api.get('/banners', { params });
  return res.data.payload;
};
