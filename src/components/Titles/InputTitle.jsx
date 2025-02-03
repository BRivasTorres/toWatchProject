import { useDispatch } from "react-redux";
import { setWatchedTitle } from "../../redux/form/formActions";
import { updateIsWatched } from "../firebase/databaseConnections";

const InputTitle = ({item, category}) => {
    const dispatch = useDispatch()
    
    const handleOnChange = async(item, category) => {
        try {
            await updateIsWatched(item.title, category)
            dispatch(setWatchedTitle(item.title, category));
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div>
            <input
                type="checkbox"
                className={`checkbox-style ${item.isWatched ? "is-watched" : ""}`}
                checked={item.isWatched}
                onChange={() => handleOnChange(item, category)}
            />
        </div>
    );
}

export default InputTitle
