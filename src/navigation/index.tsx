import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TodoScreen from '../screen/TodoScreen';

const Stack = createStackNavigator();

const navigation : FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TodoScreen">
                <Stack.Screen name="TodoScreen" component={TodoScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default navigation;
