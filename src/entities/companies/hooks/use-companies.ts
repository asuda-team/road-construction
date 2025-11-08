import { useQuery } from "@tanstack/react-query";
import { getCompanies } from "../api";
import { useMemo } from "react";
import { useLanguage } from "@/shared/hooks";

const useCompanies = () => {
  const { currentLanguage } = useLanguage();

  const { data, isPending } = useQuery({
    queryKey: ["companies", currentLanguage],
    queryFn: () =>
      getCompanies({
        limit: 100,
        page: 1,
        order_by: "priority",
        order_direction: "asc",
        lang: currentLanguage ?? "tk",
        is_active: true,
      }),
  });

  const companies = useMemo(() => (data ? data : []), [data]);

  return { companies, isPending };
};

export default useCompanies;
