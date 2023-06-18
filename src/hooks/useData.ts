import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface FetchResponse<T>{
    count:number;
    results:T[];
}

function useData<T>(endpoint:string) {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      setIsLoading(true);
      const controller = new AbortController();

      apiClient
        .get<FetchResponse<T>>(endpoint, {signal: controller.signal})
        .then((r) => {
          setData(r.data.results);
          setIsLoading(false);
        })
        .catch((e) => {
            if(e instanceof CanceledError) return;
            setError(e.message);
            setIsLoading(false);
        });
        return ()=> controller.abort();
    }, []);

    return {data, error, isLoading};
}

export default useData;