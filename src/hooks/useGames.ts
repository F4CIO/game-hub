import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

export interface Platform{
  id:number;
  name:string;
  slug: string;
}

interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform:Platform}[];
    metacritic:number;
  }
  
interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      setIsLoading(true);
      const controller = new AbortController();

      apiClient
        .get<FetchGamesResponse>("/games", {signal: controller.signal})
        .then((r) => {
          setGames(r.data.results);
          setIsLoading(false);
        })
        .catch((e) => {
            if(e instanceof CanceledError) return;
            setError(e.message);
            setIsLoading(false);
        });
        return ()=> controller.abort();
    }, []);

    return {games, error, isLoading};
}

export default useGames;
export type {Game};