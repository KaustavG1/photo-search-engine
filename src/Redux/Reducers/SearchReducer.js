const initialState = {
    searchTerm: ""
};

function SearchReducer(state = initialState, action) {
    if(action.type === "ADD_SEARCHTERM") {
        state = { searchTerm: action.payload.searchTerm, pageNum: action.payload.pageNum };
    }
    return state;
}

export default SearchReducer;