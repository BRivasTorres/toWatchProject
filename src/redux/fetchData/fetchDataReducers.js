import { FETCH_DATA_FAILURE, FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_EMPTY, FETCH_DATA_DETAILS } from "./fetchDataTypeActions";

const initilaState = {
    loading: false,
    data : [],
    error: ""
}

const fetchDataReducer = (state = initilaState, action) => {
    switch (action.type) {
    case FETCH_DATA_REQUEST:
        return {
            ...state,
            loading: true
        }            
    case FETCH_DATA_SUCCESS:
        return {
            ...state,
            data: {
                ...state.data,
                [action.payload.category] : [...action.payload.data]
            },
            loading: false,
        }
    case FETCH_DATA_FAILURE:
        return {
            ...state,
            loading: false,
            error: action.payload.error
        }
    case FETCH_DATA_EMPTY: 
        return {
            ...state,
            data: {
                ...state.data, 
                [action.payload.category] : action.payload.data
            }
        }
    case FETCH_DATA_DETAILS: 
        return {
            ...state,
            data: action.payload,
            loading: false
        }
    default:
        return state;
    }
}

export default fetchDataReducer