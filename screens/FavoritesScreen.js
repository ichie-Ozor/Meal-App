import {Text, StyleSheet, View} from 'react-native'
import MealsList from '../component/MealsList/MealsList';
import { FavoritesContext } from '../store/context/favorites-context'
// import { useContext } from 'react';
import { MEALS } from '../data/dummy-data';
import { useDispatch, useSelector } from 'react-redux';

function FavoritesScreen(){
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealId = useSelector(state => state.favoriteMeals.ids)

    // const favoriteMeals = MEALS.filter(meal => favoriteMealsCtx.ids.includes(meal.id))
    const favoriteMeals = MEALS.filter(meal => favoriteMealId.includes(meal.id))

    if(favoriteMeals.length === 0) {
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You have no favorite yet</Text>
            </View>
        )
    }
    return <MealsList items={favoriteMeals} />
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white'
  }
})