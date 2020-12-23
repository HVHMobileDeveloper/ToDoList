import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import TodoScreen from '../screen/TodoScreen';
import AddTodoScreen from '../screen/AddTodoScreen';

const Stack = createStackNavigator();

const navigation : FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="TodoScreen">
                <Stack.Screen
                    options={{
                        title: 'Todo list'
                    }}
                    name="TodoScreen"
                    component={TodoScreen}
                />
                <Stack.Screen
                    options={{
                        title: 'Add Todo',
                        cardStyleInterpolator: ({current}) => ({
                            cardStyle: {
                                opacity: current.progress,
                            },
                        }),
                    }}
                    name="AddTodoScreen"
                    component={AddTodoScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default navigation;
