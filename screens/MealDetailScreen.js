import { useLayoutEffect } from 'react'
import { Text, Image, Button, View, StyleSheet, ScrollView } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../component/MealDetails'
import Subtitle from '../component/MealDetail/Subtitle';
import List from '../component/MealDetail/List';
import IconButton from '../component/IconButton';

function MealDetailScreen({route, navigation}){
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((meal) => meal.id === mealId);
    function headerOnPressHandler(){
        console.log("on Press yes")
    }
    
    useLayoutEffect(() => {
        navigation.setOptions({
                headerRight: () => {
                  return <IconButton 
                            onPress={headerOnPressHandler}
                            color='white'
                            icon='star'
                            />
                }
        })
    },[])
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