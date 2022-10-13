import axios from "axios";
import { 
    getMovieFailure, 
    getMovieStart, 
    getMovieSuccess,
    deleteMovieStart,
    deleteMovieSuccess,
    deleteMovieFailure
} from "./MovieActions";

export const getMovies = async (dispatch) => {
    dispatch(getMovieStart());
    try{
        const res = await axios.get('movies',{ headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken,
            }
        });

        dispatch(getMovieSuccess(res.data))

    } catch(err){
        dispatch(getMovieFailure());
    }
}

export const deleteMovie = async (id,dispatch) => {
    dispatch(deleteMovieStart());
    try{
        await axios.delete('movies/' + id,{ headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem('user')).accessToken,
            }
        });

        dispatch(deleteMovieSuccess(id))

    } catch(err){
        dispatch(deleteMovieFailure());
    }
}