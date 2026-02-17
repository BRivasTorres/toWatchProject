import { useSelector } from "react-redux"
import DetailsImg from "./TitleDetailsComponents/DetailsImg";
import DetailsGenres from "./TitleDetailsComponents/DetailsGenres";
import DetailsEpisodes from "./TitleDetailsComponents/DetailsEpisodes";
import DetailsSeasons from "./TitleDetailsComponents/DetailsSeasons";
import DetailsStatus from "./TitleDetailsComponents/DetailsStatus";
import DetailsVoteAverage from "./TitleDetailsComponents/DetailsVoteAverage";
import DetailsOverview from "./TitleDetailsComponents/DetailsOverview";
import DetailsAirDate from "./TitleDetailsComponents/DetailsAirDate";
import DetailsRuntime from "./TitleDetailsComponents/DetailsRuntime";
import Seasons from "./CurrentlyWatching/Seasons";
import CurrentEpisode from "./CurrentlyWatching/CurrentEpisode";

const TitleDetails = ({category, item}) => {
    const titleDetails = useSelector(state => state.form[category])
    const selectedTitle = titleDetails.find(i => i.title === item.title)
    const baseUrl = "https://image.tmdb.org/t/p/w500"
    
    const data = selectedTitle.titleDetails
    
    const normalizeData = {
        overview: data.overview || data.synopsis,
        status: data.status,
        genres: data.genres,
        numberOfEpisodes:
			data.number_of_episodes || data.episodes,
        numberOfSeasons: data.number_of_seasons,
        runtime: data.runtime || data.duration,
        voteAverage: data.vote_average || data.score,
        imgUrl: data.poster_path
            ? `${baseUrl}${data.poster_path}`
            : data?.images?.jpg?.image_url,
        aired:
			data.last_air_date && data.first_air_date
			    ? `from ${data.first_air_date} to ${data.last_air_date}`
			    :  data.aired?.string || null,
        seasons: data.seasons,
    };
    
    return (
        <div className="bg bg-highlight-color p-4 rounded-lg text-main-color">
            {normalizeData.imgUrl && (
                <section>
                    {<DetailsImg item={item} imgUrl={normalizeData.imgUrl} />}
                </section>
            )}
            <section className="flex flex-col gap-y-2 ">
                {normalizeData.genres && (
                    <DetailsGenres genres={normalizeData.genres}/>
                )}
                {normalizeData.overview && (
                    <DetailsOverview overview={normalizeData.overview} />
                )}
                {normalizeData.numberOfEpisodes && (
                    <DetailsEpisodes
                        episodes={normalizeData.numberOfEpisodes}
                    />
                )}
                {normalizeData.numberOfSeasons && (
                    <DetailsSeasons seasons={normalizeData.numberOfSeasons} />
                )}
                {normalizeData.status && (
                    <DetailsStatus status={normalizeData.status} />
                )}
                {normalizeData.voteAverage && (
                    <DetailsVoteAverage
                        voteAverage={normalizeData.voteAverage}
                    />
                )}
                {normalizeData.runtime && (
                    <DetailsRuntime runtime={normalizeData.runtime} />
                )}
                {normalizeData.aired && (
                    <DetailsAirDate aired={normalizeData.aired} />
                )}
            </section>

            <section className="mt-4">
                {normalizeData.seasons && (
                    <Seasons
                        seasons={normalizeData.seasons}
                        category={category}
                        title={selectedTitle.title}
                    />
                )}
                {normalizeData.numberOfEpisodes && !normalizeData.seasons && (
                    <CurrentEpisode
                        selectedTitle={selectedTitle}
                        category={category}
                        episodeCount={normalizeData.numberOfEpisodes}
                    />
                )}
            </section>
        </div>
    );
}

export default TitleDetails
