import { SET_INPUT } from "./inputActionTypes";

const initialState = {
    inputs: {}
} ;

const inputReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_INPUT:
        return {
            ...state,
            inputs: {
                ...state.inputs,
                [action.payload.category] : action.payload.value
            }
        };
    default:
        return state;
    }
};

export default inputReducer;
