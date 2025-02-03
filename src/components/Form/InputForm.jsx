import { useSelector, useDispatch } from "react-redux";
import { setInput } from "../../redux/input/inputActions";
import fetchApiData from "../../redux/fetchData/fetchDataActions";
import urls from "../../utils/urls";

const InputForm = ({category}) => {
    const dispatch = useDispatch()
    const input = useSelector((state) => state.input.inputs[category] || "");
     
    const handleOnChange = (e) => {
        const val = e.target.value;
        dispatch(setInput(val, category));

        const params =
			category === "animes"
			    ? { q: val }
			    : { query: val };

        fetchApiData({
            dispatch,
            url: urls[`${category}Url`],
            params,
            axiosOptions:
				category !== "animes"
				    ? { headers: { Authorization: urls[`${category}Key`] } }
				    : {},
        }, category);
    };
    
    return (
        <input
            type="text"
            placeholder="Add new title"
            name="add"
            className="neomorphism-shadow rounded-full p-4 outline-none text-highlight-color placeholder:text-highlight-color mb-4 "
            onChange={handleOnChange}
            value={input}
        />
    );
};

export default InputForm;
