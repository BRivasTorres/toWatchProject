import { set, ref, get, remove, update } from "firebase/database";
import { db } from "./firebase";

const sendDataToDb = async(item, category) => {
    try {
        const dataRef = ref(db, `${category}/${item.title || item.name}`)
        const snapshot = await get(dataRef)
                
        if (snapshot.exists()) {
            const data = snapshot.val();
            const dbHasItem = data.id === item.id

            if (!dbHasItem) {
                await set(dataRef, item);
            }
        } else {
            await set(dataRef, item);
        }
    } catch (error) {
        console.log(error)
    }
}

const deleteTitleFromDb = async(key, category) => {    
    try {
        const dataRef = ref(db, `${category}/${key}`);
        const snapshot = await get(dataRef);    
                
        if (snapshot.exists()) {
            await remove(dataRef) 
        }
    } catch (error) {
        console.log(error)
    }
}

const updateDateSeason = async(key, category, val) => {
    try {
        const itemRef = ref(db, `${category}/${key}`);
        const snapshot = await get(itemRef)
        
        if(snapshot.exists()) {
            await update(itemRef, {
                currentSeason: val
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const updateDateChapter = async (key, category, val) => {
    try {
        const itemRef = ref(db, `${category}/${key}`);
        const snapshot = await get(itemRef);

        if (snapshot.exists()) {
            await update(itemRef, {
                currentEpisode: val,
            });
        }
    } catch (error) {
        console.log(error);
    }
};

const updateFavorite = async (key, category) => {
    try {
        const itemRef = ref(db, `${category}/${key}`)
        const snapshot = await get(itemRef)
        
        if(snapshot.exists()) {
            const currentData = snapshot.val()
            const currentFavoriteStatus = currentData.isFavorite || false
            
            await update(itemRef, {
                isFavorite: !currentFavoriteStatus
            })
        }
    } catch (error) {
        console.log(error)
    }
}

const updateIsWatched = async (key, category) => {
    try {
        const itemRef = ref(db, `${category}/${key}`)
        const snapshot = await get(itemRef)
        
        if(snapshot.exists()) {
            const currentData = snapshot.val()
            const currentWatchedStatus = currentData.isWatched || false
            
            await update(itemRef, {
                isWatched: !currentWatchedStatus
            })
        }
        
    } catch (error) {
        console.log(error)
    }
}

export {sendDataToDb, deleteTitleFromDb, updateDateChapter, updateDateSeason, updateFavorite, updateIsWatched }