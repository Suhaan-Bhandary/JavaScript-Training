import { useEffect, useRef, useState } from "react";
import axios from "axios";

const useFetch = <T>(url: string, initialData: T, onError: () => void) => {
  // Using useRef to store onError so that we can use it in useEffect
  const onErrorRef = useRef(onError);

  const [data, setData] = useState<T>(initialData);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch data initially
  useEffect(() => {
    setIsLoading(true);

    axios
      .get<T>(url)
      .then((response) => setData(response.data))
      .catch(onErrorRef.current)
      .finally(() => setIsLoading(false));
  }, [url]);

  return [data, setData, isLoading] as const;
};

export default useFetch;
