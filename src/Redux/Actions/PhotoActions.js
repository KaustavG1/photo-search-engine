import axios from 'axios';

const BASE_URL = "https://api.unsplash.com/";
const SEARCH = "search/photos/";
const ACCESS_KEY = "Ne3Ifkzab3RyFm-Q2zvyHm2LaPSU2fh0CR7AjABepNQ";

const auth_headers = {
    Authorization: `Client-ID ${ACCESS_KEY}`
};

export const getPhotosBegin = () => {
  return { type: "FETCH_PHOTOS_BEGIN" }
};

export const getPhotosSuccess = photosData => {
  return { type: "FETCH_PHOTOS_SUCCESS",
  payload: { photosData } }
};

export const getPhotosFailure = error => {
  return { type: "FETCH_PHOTOS_FAILURE",
  payload: { error } }
};

export const getPhotos = (searchTerm, pageNum=1) => {
    return async (dispatch) => {
        try {
            dispatch(getPhotosBegin());
            // TODO: Do actual data call and dispatch success/failure action accordingly
            const response = await axios.get(`${BASE_URL}${SEARCH}`, 
                                            { headers: auth_headers, params: { page: pageNum, query: searchTerm, per_page: 8 } });
            dispatch(getPhotosSuccess(response.data));
        } catch(error) {
            dispatch(getPhotosFailure(error));
        }
    }
};