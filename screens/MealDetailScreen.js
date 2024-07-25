import { useContext, useLayoutEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, Image, Button, View, StyleSheet, ScrollView } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../component/MealDetails'
import Subtitle from '../component/MealDetail/Subtitle';
import List from '../component/MealDetail/List';
import IconButton from '../component/IconButton';
import { addFavorite, removeFavorite } from '../store/redux/fovorites'
// import {FavoritesContext} from '../store/context/favorites-context'

function MealDetailScreen({route, navigation}){
    // const favoriteMealCtx = useContext(FavoritesContext)

    const favoriteMealsIds = useSelector((state) => state.favoriteMeals.ids)
    const dispatch = useDispatch()

    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    // const mealsIsFavorite = favoriteMealCtx.ids.includes(mealId)  //this is for context
    // console.log(favoriteMealCtx.ids, "meal details")

    const mealsIsFavorite = favoriteMealsIds.includes(mealId)
    function changeFavoriteStatusHandler(){
        if(mealsIsFavorite){
            // favoriteMealCtx.removeFavorite(mealId)  //this is for context
            dispatch(removeFavorite({id: mealId}));
        } else {
            // favoriteMealCtx.addFavorite(mealId)  //this is for context
            dispatch(addFavorite({id: mealId}))
        }
    }
    
    useLayoutEffect(() => {
        navigation.setOptions({
                headerRight: () => {
                  return <IconButton 
                  color='white'
                  icon={mealsIsFavorite ? 'star' : 'star-outline'}
                  onPress={changeFavoriteStatusHandler}
                />
                }
        })
    },[navigation, changeFavoriteStatusHandler])
    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                style={styles.MealDetailContainer} 
                textStyle={styles.DetailStyle}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients}/>
                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    )
}

export default MealDetailScreen

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 250,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    MealDetailContainer:{
        color: 'white'
    },
    DetailStyle: {
        color: 'white'
    },
    listOuterContainer: {
    alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
})