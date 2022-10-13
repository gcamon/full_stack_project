const MovieReducer = (state,{ type, payload }) => {
    switch(type){
        case "GET_MOVIES_START":
            return {
                movies: [],
                isFetching: true,
                error: false
            };
        case "GET_MOVIES_SUCCESS":
            return {
                movies: payload,
                isFetching: false,
                error: false
            };
        case "GET_MOVIES_FAILURE":
            return {
                movies: [],
                isFetching: false,
                error: true
            };
        default:
            return {...state};
       
    }
}

export default MovieReducer;