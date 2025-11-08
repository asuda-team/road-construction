import { useQuery } from "@tanstack/react-query";
import { getNewsDetails } from "../api";
import { useMemo } from "react";
import { useLanguage } from "@/shared/hooks";

const useNewsDetails = (id: number) => {
  const { currentLanguage } = useLanguage();

  const { data, isPending } = useQuery({
    queryKey: ["news-details", id, currentLanguage],
    queryFn: () => getNewsDetails(id, currentLanguage),
    enabled: !!id,
  });

  const details = useMemo(() => (data ? data : null), [data]);

  return { details, isPending };
};

export default useNewsDetails;
