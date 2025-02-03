import { deleteTitle, showTitleDetails, updateFavoriteTitle } from '../../redux/form/formActions';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
import { deleteTitleFromDb, updateFavorite } from '../firebase/databaseConnections';

const ButtonsTitle = ({category, item: {id, title, name, isFavorite}}) => {
    const itemName = title || name
    const dispatch = useDispatch();
    
    const handleDelete = async(id, itemName, category) => {
        try {
            await deleteTitleFromDb(itemName, category);
            dispatch(deleteTitle(id, category));
        } catch (error) {
            console.log(error)            
        }
    };

    const handleDetails = (itemName, category) => {
        dispatch(showTitleDetails(itemName, category))     
    };
    
    const handleFavorite = async(key, category) => {
        try {
            await updateFavorite(key, category)
            dispatch(updateFavoriteTitle(key, category))
        } catch (error) {
            console.log(error)
        }
    }
     
    return (
		<div className="flex gap-x-4">
			<button onClick={() => handleDetails(itemName, category)}>
				<FontAwesomeIcon icon={faAngleDown} />
			</button>
			<button onClick={() => handleDelete(id, itemName, category)}>
				<FontAwesomeIcon icon={faTrash} />
			</button>
			<button>
				<FontAwesomeIcon
					icon={faStar}
					style={{ color: isFavorite ? `gold` : `#50B498` }}
					onClick={() => handleFavorite(itemName, category)}
				/>
			</button>
		</div>
	);
}

export default ButtonsTitle
 