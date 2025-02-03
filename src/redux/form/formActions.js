import { FORM_DELETE_TITLE, FORM_SUBMIT, FORM_UPDATE_TITLE, FORM_SHOW_TITLE_DETAILS, FORM_SET_TITLE_DETAILS, FORM_SET_INITIAL_DATA, FORM_SELECTED_SEASON, FORM_SELECTED_CHAPTER, FORM_UPDATE_FAVORITE, FORM_SET_WATCHED} from "./formActionTypes";

const onSubmit = (category, title) => {
    return {
        type: FORM_SUBMIT,
        category: category,
        payload: title
    };
};

const deleteTitle = (id, category) => {
    return {
        type: FORM_DELETE_TITLE,
        category: category,
        payload: id,
    };
};

const updateTitle = (id, val, category) => {
    return {
        type : FORM_UPDATE_TITLE,
        category: category,
        payload: {id: id, val: val}
    }
}

const setTitleDetails = (details, category, title) => {
    return {
        type: FORM_SET_TITLE_DETAILS,
        category: category,
        payload: {
            title,
            details,
        },
    };
};

const showTitleDetails = (title, category) => {
    return {
        type: FORM_SHOW_TITLE_DETAILS,
        category: category,
        payload: {title}
    }
}

const setInitialData = (data, category) => {
    return {
        type: FORM_SET_INITIAL_DATA,
        category,
        payload: data
    }
}

const setSelectedSeason = (season, title, category) => {
    return {
        type:FORM_SELECTED_SEASON,
        category,
        payload: {
            title,
            season
        }    
    } 
}

const setSelectedChapter = (chapter, title, category) => { 
    return { 
        type: FORM_SELECTED_CHAPTER,
        category,
        payload: {
            title,
            chapter
        }
    }
}

const updateFavoriteTitle = (title, category) => {
    return {
        type: FORM_UPDATE_FAVORITE,
        category,
        payload: title
    }
}

const setWatchedTitle = (title, category) => {
    return {
        type: FORM_SET_WATCHED,
        category, 
        payload: title
    }
}

export {onSubmit, deleteTitle, updateTitle, setTitleDetails, showTitleDetails, setInitialData, setSelectedSeason, setSelectedChapter, updateFavoriteTitle, setWatchedTitle}