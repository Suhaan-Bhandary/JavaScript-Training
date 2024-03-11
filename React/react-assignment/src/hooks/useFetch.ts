import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect, useRef } from "react";

const useFetch = <T>(
  url: string,
  queryKey: (string | number)[],
  onError: () => void,
) => {
  // Using useRef to store onError so that we can use it in useEffect
  const onErrorRef = useRef(onError);

  const { data, isLoading, isError } = useQuery({
    queryKey: queryKey,
    queryFn: async () => {
      return axios.get<T>(url).then((response) => response.data);
    },
  });

  useEffect(() => {
    if (isError) {
      onErrorRef.current();
    }
  }, [isError]);

  return [data, isLoading, isError] as const;
};

export default useFetch;
