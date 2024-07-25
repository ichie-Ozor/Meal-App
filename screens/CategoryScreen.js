import { CATEGORIES } from "../data/dummy-data";
import { FlatList, View, StyleSheet } from 'react-native'
import CategoryGridTile from "../component/CategoryGridTile";

function CategoryScreen({navigation}) {
  function pressHandler(ItemData){
    navigation.navigate('MealsOverview', {
      categoryId: ItemData.item.id,
    })
  }
  return (
    <View style={StyleSheet.screen}>
        <FlatList 
        data={CATEGORIES}
        renderItem={(itemData) => <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={()=> pressHandler(itemData)}/>}
        keyExtractor={(item) => item.id}
        numColumns={2}
        />
    </View>
  )
}

export default CategoryScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
})