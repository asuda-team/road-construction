import { useQuery } from "@tanstack/react-query";
import { getLicences } from "../api";
import { useLanguage } from "@/shared/hooks";
import { useMemo } from "react";

const useLicences = () => {
  const { currentLanguage } = useLanguage();

  const { data, isPending } = useQuery({
    queryKey: ["licences", currentLanguage],
    queryFn: () =>
      getLicences({
        limit: 100,
        page: 1,
        order_by: "priority",
        order_direction: "asc",
        lang: currentLanguage,
      }),
  });

  const licences = useMemo(() => (data ? data : []), [data]);

  return { licences, isPending };
};

export default useLicences;
