import { createContext, useState } from "react";


export const FavoritesContext = createContext({  //this is context object which is exported
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
});

function FavoritesContextProvider({children}){  //functional component of the context
    ///this contains all the logic that we need to manage our state
    const [favoriteMealId, setFavoriteMealId] = useState([]);

    function addFavorite(id){
        setFavoriteMealId((currentFavId) => [...currentFavId, id])
    }
    function removeFavorite(id){
        setFavoriteMealId((currentFavId) => 
            currentFavId.filter((mealId) => mealId !== id))
    }
    const data = {
        ids: favoriteMealId,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }
    return <FavoritesContext.Provider value={data}>
        {children}
        </FavoritesContext.Provider>
}

export default FavoritesContextProvider