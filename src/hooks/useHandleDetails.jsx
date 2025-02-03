import { v4 as uuidv4 } from "uuid";
import { onSubmit, setTitleDetails } from "../redux/form/formActions";
import {
    fetchApiDataDetails,
    fetchDataEmpty,
} from "../redux/fetchData/fetchDataActions";
import { setInput } from "../redux/input/inputActions";
import urls from "../utils/urls";
import { sendDataToDb } from "../components/firebase/databaseConnections";

const useHandleDetails = (dispatch, category) => {
    
    const handleMoviesSeriesDetails = (item, displayName) => {
        const keyForSearch = item.id;
        dispatch(onSubmit(category, displayName));
        dispatch(fetchDataEmpty(category));
        dispatch(setInput("", category));

        const handleDetails = async () => {
            let detailsData;
            detailsData = await fetchApiDataDetails(
                dispatch,
                keyForSearch,
                urls[`${category}Details`],
                category
            );

            dispatch(setTitleDetails(detailsData, category, displayName));
            
            const updatedItem = {
                ...item, 
                id: uuidv4(),
                isReadOnly: true,
                title: displayName, 
                titleDetails: detailsData, 
                isWatched: false,
                currentSeason: "Season 1",
                currentChapter: "Chapter 1",
            }
            sendDataToDb(updatedItem, category);
        };
        handleDetails();
    };

    const handleAnimesDetials = (item, displayName) => {
        dispatch(onSubmit(category, displayName));
        dispatch(fetchDataEmpty(category));
        dispatch(setInput("", category));
        
        dispatch(setTitleDetails(item, category, displayName))
        
        const updatedItem = {...item, titleDetails: item}
        
        sendDataToDb(updatedItem, category);
    };

    return { handleMoviesSeriesDetails, handleAnimesDetials };
};

export default useHandleDetails;
