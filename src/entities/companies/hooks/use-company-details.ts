import { useQuery } from "@tanstack/react-query";
import { getCompanyDetails } from "../api";
import { useMemo } from "react";
import { useLanguage } from "@/shared/hooks";

const useCompanyDetails = (id: number) => {
  const { currentLanguage } = useLanguage();

  const { data, isPending } = useQuery({
    queryKey: ["company-details", id, currentLanguage],
    queryFn: () => getCompanyDetails(id, currentLanguage),
    enabled: !!id,
  });

  const details = useMemo(() => (data ? data : null), [data]);

  return { details, isPending };
};

export default useCompanyDetails;
