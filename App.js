import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../ReactNative-PlantApp/src/screens/HomeScreen';
import DetailsScreen from '../ReactNative-PlantApp/src/screens/DetailsScreen';
import { StatusBar } from 'react-native';
import COLORS from '../ReactNative-PlantApp/src/consts/colors.js';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle="dark-content" backgroundColor={COLORS.white} />
            <Stack.Navigator screenOptions={{ header: () => null }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
