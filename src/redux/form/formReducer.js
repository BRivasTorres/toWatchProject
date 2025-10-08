import { FORM_DELETE_TITLE, FORM_SHOW_TITLE_DETAILS, FORM_SUBMIT, FORM_UPDATE_TITLE, FORM_SET_TITLE_DETAILS, FORM_SET_INITIAL_DATA, FORM_SELECTED_CHAPTER, FORM_SELECTED_SEASON, FORM_UPDATE_FAVORITE, FORM_SET_WATCHED } from "./formActionTypes";

const initialState = {
	movies: [],
	series: [],
	animes: [],
};

const formReducer = (state = initialState, action) => {
    const { type, category, payload} = action;
    
    switch (type) {
    case FORM_SUBMIT: {    
        return {
			...state,
			[category]: [
				...state[category],
				{ showTitleDetails: false, title: payload, isFavorite: false, isWatched: false },
			],
		};
    }
    case FORM_DELETE_TITLE:
        return {
            ...state,
            [category]: state[category].filter(
                (item) => item.id !== payload
            ),
        };
    case FORM_UPDATE_TITLE:
        return {
            ...state,
        }
    case FORM_SET_TITLE_DETAILS:
        return {
            ...state,
            [category] : state[category].map(item => 
                item.title === payload.title ? {...item, titleDetails: payload.details} : item
            )
        }
    case FORM_SHOW_TITLE_DETAILS:
        return {
            ...state,
            [category]: state[category].map(item => 
                item.title === payload.title
                    ? {...item, showTitleDetails: !item.showTitleDetails}
                    : item
            ),
        }
    case FORM_SET_INITIAL_DATA : 
        return {
            ...state,
            [category] : payload
        }
    case FORM_SELECTED_SEASON:
        return { 
            ...state,
            [category]: state[category].map(item => 
                item.title === payload.title
                    ? {...item, currentSeason : payload.season}
                    : item
            )
        }
    case FORM_SELECTED_CHAPTER:
        return {
            ...state,
            [category] : state[category].map(item => 
                item.title === payload.title
                    ? {...item, currentEpisode : payload.chapter}
                    : item
            )
        }
    case FORM_UPDATE_FAVORITE:
        return {
            ...state,
            [category] : state[category].map(item => 
                item.title === payload
                    ? {...item, isFavorite: !item.isFavorite}
                    : item
            )
        }
    case FORM_SET_WATCHED: 
        return {
            ...state, 
            [category] : state[category].map(item =>
                item.title === payload
                    ? {...item, isWatched: !item.isWatched}
                    : item
            )
        }
    default:
        return state;
    }
};

export default formReducer;
