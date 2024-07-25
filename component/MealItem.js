import { View, Text, Pressable, Image, StyleSheet, Platform }  from 'react-native'
import { useNavigation } from '@react-navigation/native'
import MealDetails from './MealDetails'

function MealItem({id, title, imageUrl, duration, complexity, affordability}) {
    const navigation = useNavigation()
    function selectMealItemHandler(){
        navigation.navigate('MealsDetail', {
            mealId: id
        })
    }

    return (
        <View style={styles.mealtItem}>
            <Pressable 
                android_ripple={{color: '#ccc'}} 
                style={({pressed}) => pressed ? styles.buttonPressed : null}
                onPress={selectMealItemHandler}
                >
                <View>
                    <View>
                        <Image source={{uri: imageUrl}} style={styles.image}/>
                        <Text style={styles.title}>{title}</Text>
                    </View>
                    <MealDetails duration={duration} complexity={complexity} affordability={affordability}/>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem

const styles = StyleSheet.create({
    mealtItem: {
        margin: 16,
        borderRadius: 8,
        overflow: Platform.select({'android': 'hidden', 'ios': 'visible'}),
        backgroundColor: 'white',
        elevation: 4,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 16,
    },
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    }
})