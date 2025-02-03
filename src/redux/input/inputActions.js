import { SET_INPUT } from "./inputActionTypes";

const setInput = (value, category) => ({
    type: SET_INPUT,
    payload: {value, category},
});

export { setInput };
