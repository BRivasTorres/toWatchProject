import { FETCH_DATA_FAILURE,FETCH_DATA_SUCCESS, FETCH_DATA_REQUEST, FETCH_DATA_EMPTY, FETCH_DATA_DETAILS } from "./fetchDataTypeActions"
import axios from "axios"
import { ref, get } from "firebase/database";
import { db } from "../../components/firebase/firebase";
import { setInitialData } from "../form/formActions";

const fetchDateRequest = () => {
    return {
        type: FETCH_DATA_REQUEST,
    }
}

const fetchDataSuccess = (data, category) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: {data, category}
    }
}

const fetchDataFailure = (error, category) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: {error, category}
    }
}

const fetchDataEmpty = (category) => {
    return {
        type: FETCH_DATA_EMPTY,
        payload: {data: [], category}
    }
}

const fetchDataDetails = (data) => {
    return {
        type: FETCH_DATA_DETAILS,
        payload: data
    }
}

const AUTH_HEADER = {
    accept: "application/json",
    Authorization:
		"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMjJhNTc0ZjljOGQxYWM0OTNhZDQ3OWQ4YWI0NGZjNCIsIm5iZiI6MTcyODAwOTU4My4xNjUzODEsInN1YiI6IjYzNTllNTk2NTViYzM1MDA4MWJkYTg0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.3KM_udw0P4bp4-Fn-2vbqYc-UF-IcB5w-27hwBO4J5Y",
};

const createAxiosOptions = (url, params) => ({
    method: "GET",
    url,
    params,
    headers: AUTH_HEADER,
});

const fetchData = (category) => async (dispatch) => {
    dispatch(fetchDateRequest());
        
    try {
        const snapshot = await get(ref(db, category))
            
        if (snapshot.exists()) {
            const dataArr = Object.entries(snapshot.val()).map(([id, data]) => ({
                id, 
                ...data
            }))
            dispatch(setInitialData(dataArr, category))
            dispatch(fetchDataSuccess(dataArr, category))
        } else {
            dispatch(fetchDataEmpty(category));
        }
    
    } catch (error) {
        const serialError = {
            message: error.message,
            stack: error.stack
        }
        dispatch(fetchDataFailure(serialError, category));
    }
}

const fetchApiData = async ({
    dispatch,
    url,
    params = { query: "", q: ""},
    axiosOptions = {},
}, category) => {
    try {
        dispatch(fetchDateRequest());

        const paramValue = params.query || params.q || "";
        if (paramValue.length <= 2) {
            return dispatch(fetchDataSuccess([], category));
        }

        const options = {
            method: "GET",
            url,
            params,
            ...axiosOptions,
        };

        const response = await axios(options);
        let results = response.data.results || response.data.data;
        let maxResults = results.slice(0, 10);

        dispatch(fetchDataSuccess(maxResults, category));
    } catch (error) {
        dispatch(fetchDataFailure(error.message, category));
    }
};


const fetchApiDataDetails = async(dispatch, id, url, category) => {
    dispatch(fetchDateRequest());
    try {
        const options = createAxiosOptions(`${url}/${id}`)
        const response = await axios(options);
        dispatch(fetchDataDetails(response.data, category));
        return response.data
    } catch (error) {
        dispatch(fetchDataFailure(error.message));
        throw error 
    }
};


export default fetchApiData
export {fetchDateRequest, fetchDataSuccess, fetchDataFailure, fetchDataEmpty, fetchDataDetails, fetchApiDataDetails, fetchData}