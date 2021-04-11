const searchActionCreator = (searchTerm, pageNum=1) => {
    return {
        type: "ADD_SEARCHTERM",
        payload: {
            searchTerm: searchTerm,
            pageNum: pageNum
        }
    };
}

export default searchActionCreator;