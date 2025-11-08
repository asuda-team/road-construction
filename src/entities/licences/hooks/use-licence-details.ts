import { useQuery } from "@tanstack/react-query";
import { getLicenceDetails } from "../api";
import { useLanguage } from "@/shared/hooks";
import { useMemo } from "react";

const useLicenceDetails = (id: number) => {
  const { currentLanguage } = useLanguage();

  const { data, isPending } = useQuery({
    queryKey: ["licence-details", id, currentLanguage],
    queryFn: () => getLicenceDetails(id, currentLanguage),
    enabled: !!id,
  });

  const details = useMemo(() => (data ? data : null), [data]);

  return { details, isPending };
};

export default useLicenceDetails;