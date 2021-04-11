const initialState = {
    photos: {
        photoData: { results: [], total: 0, total_pages: 0 }
    },
    isLoading: true,
    error: null
};

function APICallReducer(state = initialState, action) {
    if(action.type === "FETCH_PHOTOS_BEGIN") {
        return { ...state, photos: {}, isLoading: true, error: null };
    } else if(action.type === "FETCH_PHOTOS_SUCCESS") {
        return { ...state, photos: action.payload, isLoading: false, error: null };
    } else if(action.type === "FETCH_PHOTOS_FAILURE") {
        return { ...state, photos: {}, isLoading: false, error: action.payload.error };
    } else {
        return state;
    }
    
}

export default APICallReducer;