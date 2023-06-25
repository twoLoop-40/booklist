import { useState, useEffect } from "react";
import { apiForId, asyncPipe, fetcher } from "../utils";

export default function useBooksData(category) {
  const [bookInfos, setBookInfos] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(() => true);
      const result = await asyncPipe(apiForId, fetcher)(category);
      if (result) {
        setBookInfos(result);
        setIsLoading(() => false);
      }
    };
    fetchData();
  }, [category]);
  return { bookInfos, isLoading };
}
