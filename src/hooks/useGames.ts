import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
import { Genre } from "./useGenres";
import useData from "./useData";
import { GameQuery } from "../App";

export interface Platform{
  id:number;
  name:string;
  slug: string;
}

export interface Ordering{
  name:string;
  slug:string;
}

interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform:Platform}[];
    metacritic:number;
  }

// interface FetchGamesResponse {
//   count: number;
//   results: Game[];
// }

//this can be replaced with const useGames = () => useData<Game>('/games');
// const useGames = (selectedGenre:Genre|null) => {
//     const [games, setGames] = useState<Game[]>([]);
//     const [error, setError] = useState("");
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//       setIsLoading(true);
//       const controller = new AbortController();

//       apiClient
//         .get<FetchGamesResponse>("/games", {signal: controller.signal})
//         .then((r) => {
//           setGames(r.data.results);
//           setIsLoading(false);
//         })
//         .catch((e) => {
//             if(e instanceof CanceledError) return;
//             setError(e.message);
//             setIsLoading(false);
//         });
//         return ()=> controller.abort();
//     }, []);

//     return {games, error, isLoading};
// }

const useGames = (gameQuery: GameQuery) => {
  console.log(gameQuery);
  return useData<Game>(
  '/games', 
  /*this is query explained in docs of api.rawg.io/api: */ {
    params:{
      genres:gameQuery.genre?.id, 
      platforms: gameQuery.platform?.id,
      ordering:gameQuery.ordering?.slug || "added"
    }
  },
  /*deps param:*/[gameQuery]
  );
}

export default useGames;
export type {Game};