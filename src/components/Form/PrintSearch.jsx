import { useDispatch} from "react-redux";
import ImageHangler from "../../utils/ImageHandler";
import useHandleDetails from "../../hooks/useHandleDetails";

const baseImgUrl = "https://image.tmdb.org/t/p/w500";

const PrintSearch = ({category, data}) => {
    const dispatch = useDispatch()
    const {handleMoviesSeriesDetails, handleAnimesDetials} = useHandleDetails(dispatch, category)
        
    const handleOnClick = (item, displayName) => {
        if(category === "movies" || category === "series") {
            handleMoviesSeriesDetails(item, displayName)
        } else if(category === "animes") {
            handleAnimesDetials(item, displayName)
        }
    }
    
    return (
        <div className="bg-accent-color text-minor-color font-semibold w-full rounded-lg ">
            {data.map((item) => {                
                const {id, poster_path, name, title, images, mal_id} = item
                const itemKey = id || mal_id
                const displayName = name || title
                const imageSrc = poster_path
                    ? `${baseImgUrl}${poster_path}`
                    : images?.jpg?.image_url
                        ? `${images.jpg.image_url}`
                        : "";
                return (
                    <div
                        key={itemKey}
                        className="flex items-center justify-between gap-2 p-4 cursor-pointer hover:bg-highlight-color transition-all duration-300 ease-linear hover:scale-105 rounded-lg"
                        onClick={() => handleOnClick(item, displayName)}
                    >
                        <span>{displayName}</span>
                        <ImageHangler imageSrc={imageSrc} displayName={displayName} />
                    </div>
                );
            })}
        </div>
    );
};

export default PrintSearch;
