import { useQuery } from "@tanstack/react-query";
import { getBanners } from "../api";
import { useLanguage } from "@/shared/hooks";
import { useMemo } from "react";

const useBanners = () => {
  const { currentLanguage } = useLanguage();

  const { data, isPending } = useQuery({
    queryKey: ["banners", currentLanguage],
    queryFn: () =>
      getBanners({
        limit: 100,
        page: 1,
        order_by: "priority",
        order_direction: "asc",
        lang: currentLanguage,
        is_active: true,
      }),
  });

  const banners = useMemo(() => (data ? data : []), [data]);

  return { banners, isPending };
};

export default useBanners;
