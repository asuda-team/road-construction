import { useQuery } from "@tanstack/react-query";
import { getCompanyInformation } from "../api";
import { useLanguage } from "@/shared/hooks";
import { useMemo } from "react";
import { Information } from "../model";

export const useInformation = () => {
  const { currentLanguage } = useLanguage();

  const { data, isPending } = useQuery({
    queryKey: ["information", currentLanguage],
    queryFn: () =>
      getCompanyInformation({
        limit: 1,
        page: 1,
        order_by: "priority",
        order_direction: "asc",
        lang: currentLanguage,
      }),
  });

  const details = useMemo<Information | null>(
    () => (data ? data[0] : null),
    [data]
  );

  return { details, isPending };
};
