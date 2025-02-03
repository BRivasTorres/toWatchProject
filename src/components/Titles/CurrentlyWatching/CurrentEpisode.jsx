import { useDispatch } from "react-redux";
import { setSelectedChapter } from "../../../redux/form/formActions";
import { updateDateChapter } from "../../firebase/databaseConnections";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const CurrentEpisode = ({selectedTitle, seasons, category, episodeCount}) => {
    const dispatch = useDispatch()
    const currentEpisode = selectedTitle?.currentEpisode || "";
    const currentSeason = selectedTitle?.currentSeason || "";
    const selectedSeason = seasons?.find((s) => s.name === currentSeason);
    const episodes = selectedSeason?.episode_count || episodeCount || 0;
    
    const handleOnChange = (e) => {
        const val = e.target.value
        dispatch(setSelectedChapter(val, selectedTitle.title, category));
        updateDateChapter(selectedTitle.title, category, val);
    }
    
    return (
        <FormControl className="w-[80%]">
            <InputLabel id="episodes-label">Episodes</InputLabel>
            <Select
                labelId="episodes-label"
                id="episodes-select"
                value={currentEpisode}
                onChange={handleOnChange}
                autoWidth
                label="Episodes"
            >
                {Array.from(
                    { length: episodes },
                    (_, index) => index + 1
                ).map((ep) => (
                    <MenuItem key={ep} value={`Episode ${ep}`}>
						Episode {ep}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default CurrentEpisode
