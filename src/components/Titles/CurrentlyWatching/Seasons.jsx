import { useSelector } from "react-redux";
import CurrentEpisode from "./CurrentEpisode";
import CurrentSeasons from "./CurrentSeasons";

const Seasons = ({ seasons, title, category }) => {
    const titles = useSelector((state) => state.form[category]);
    const selectedTitle = titles.find((i) => i.title === title);

    return (
        <div className="flex flex-col gap-8">
            <CurrentSeasons 
                selectedTitle={selectedTitle}
                seasons={seasons}
                category={category}
            />
            <CurrentEpisode
                selectedTitle={selectedTitle}
                seasons={seasons}
                title={title}
                category={category}
            />
        </div>
    );
};

export default Seasons;
