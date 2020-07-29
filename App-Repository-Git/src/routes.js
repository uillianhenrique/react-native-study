import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/Main';
import User from './pages/User';

const MainRoutes = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <MainRoutes.Navigator
                screenOptions={{
                    headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#7159c1',
                    },
                    headerTintColor: '#fff',
                    headerBackTitleVisible: false,
                }}
            >
                <MainRoutes.Screen name="Usuários" component={User} />
                <MainRoutes.Screen name="Main" component={Main} />
            </MainRoutes.Navigator>
        </NavigationContainer>
    );
}

export default Routes;
