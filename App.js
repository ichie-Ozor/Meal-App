import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoryScreen from './screens/CategoryScreen';
import MealsOverViewScreen from './screens/MealOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import {AntDesign} from '@expo/vector-icons'
import {Provider} from 'react-redux'
// import FavoritesContextProvider from './store/context/favorites-context';
import { store } from './store/redux/store'
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator(){
  return (
  <Drawer.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: '#351401'},
      headerTintColor: 'white',
      sceneContainerStyle: {backgroundColor: '#3f2f25'},
      drawerContentStyle: { backgroundColor: '#351401'},
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#e4baa1'
    }}
  >
    <Drawer.Screen 
      name='Categories' 
      component={CategoryScreen} 
      options={{
      title: "All Category",
      drawerIcon: ({color, size}) => (
        <AntDesign name='windowso' color='gold' />
      )
      }}
      />
    <Drawer.Screen 
      name='Favorites' 
      component={FavoritesScreen}
      options={{
        drawerIcon: ({color, size}) => (
          <AntDesign name='star' color='gold' />
        )
      }}
      />
  </Drawer.Navigator>
)}

export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    {/* <FavoritesContextProvider>   this is for context API */}
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {backgroundColor: '#351401'},
          headerTintColor: 'white',
          contentStyle: {
          backgroundColor: '#3f2f25'
          }
        }}
      >
        <Stack.Screen 
           name="Drawer" 
           component={DrawerNavigator}
           options={{
            headerShown: false
           }}
           />
        <Stack.Screen name="MealsOverview" component={MealsOverViewScreen} />
        <Stack.Screen 
          name="MealsDetail" 
          component={MealDetailScreen}
          options={{
            title: "About the Meal"
          }}
          />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
    {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
  },
});
