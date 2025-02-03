import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
    setSelectedSeason,
} from "../../../redux/form/formActions";
import { useDispatch } from "react-redux";
import {
    updateDateSeason,
} from "../../firebase/databaseConnections";

const CurrentSeasons = ({ selectedTitle, seasons, category }) => {
    const dispatch = useDispatch();
    const currentSeason = selectedTitle?.currentSeason || "";
    
    const handleOnChange = (e) => {
        const val = e.target.value
        dispatch(setSelectedSeason(val, selectedTitle.title, category));
        updateDateSeason(selectedTitle.title, category, val);
    }

    return (
        <FormControl className="w-[80%]">
            <InputLabel id="seasons-label">Seasons</InputLabel>
            <Select
                labelId="seasons-label"
                id="seasons-select"
                value={currentSeason}
                onChange={handleOnChange}
                autoWidth
                label="Seasons"
            >
                {seasons.map((season) => (
                    <MenuItem key={season.id} value={season.name}>
                        {season.name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default CurrentSeasons;
