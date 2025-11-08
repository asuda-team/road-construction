import { useQuery } from "@tanstack/react-query";
import { getNews } from "../api";
import { useMemo } from "react";
import { useLanguage } from "@/shared/hooks";

const useNews = () => {
  const { currentLanguage } = useLanguage();

  const { data, isPending } = useQuery({
    queryKey: ["news", currentLanguage],
    queryFn: () =>
      getNews({
        limit: 100,
        page: 1,
        order_by: "priority",
        order_direction: "asc",
        lang: currentLanguage ?? "tk",
        is_active: true,
      }),
  });

  const news = useMemo(() => (data ? data : []), [data]);

  return { news, isPending };
};

export default useNews;
