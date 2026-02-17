import { useDispatch } from "react-redux";
import { setWatchedTitle } from "../../redux/form/formActions";
import { updateIsWatched } from "../firebase/databaseConnections";

const InputTitle = ({item, category}) => {
    const dispatch = useDispatch()
    
    const handleOnChange = async(item, category) => {
        try {
            await updateIsWatched(item.title, category)
            dispatch(setWatchedTitle(item.title, category, item.currentSeason));
        } catch (error) {
            console.log(error)
        }
    }

    let isNewSeasonAvailable = false;
    if (['series', 'animes'].includes(category)) {
        const lastSeasonAPI = item.titleDetails.seasons
            ? item.titleDetails.seasons[item.titleDetails.seasons.length - 1].id
            : null;
        const watchedSeasonObj = item.titleDetails.seasons
            ? item.titleDetails.seasons.find(season => season.name === item.currentSeason)
            : null;
        const watchedSeasonId = watchedSeasonObj ? watchedSeasonObj.id : null;
        isNewSeasonAvailable = item.isWatched && lastSeasonAPI !== watchedSeasonId;
    }
    
    return (
        <div>
            <input
                type="checkbox"
                className={`checkbox-style ${
                    item.isWatched ? "is-watched" : ""
                }`}
                checked={item.isWatched}
                onChange={() => handleOnChange(item, category)}
            />
            {isNewSeasonAvailable && (
                <span className="text-accent-color font-bold">
                    ¡New season available!
                </span>
            )}
        </div>
    );
}

export default InputTitle
