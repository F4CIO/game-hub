import useData from './useData';
import genres from '../data/genres'

export interface Genre{
    id:number;
    name:string;
    image_background:string;
}

interface FetchGenreResponse{
    count:number;
    results:Genre[];
}

//const useGenres = ()=>useData<Genre>('/genres');   //this calls server
const useGenres = ()=>({data:genres, isLoading:false, error:null}); //this uses local file

export default useGenres;