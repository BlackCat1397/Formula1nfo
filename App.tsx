import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './src/screens/HomeScreen';
import { DriverDetailsScreen } from './src/screens/DriverDetailsScreen';
import { Colors } from './src/constants/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.warmRed,
          },
          headerTintColor: Colors.white,
          headerTitleStyle: {
            fontWeight: 'bold',
            fontFamily: 'Formula1',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'F1 Drivers' }}
        />
        <Stack.Screen
          name="DriverDetails"
          component={DriverDetailsScreen}
          options={({ route }) => ({
            title: `${route.params.driver.givenName} ${route.params.driver.familyName}`,
            headerBackTitleStyle: {
              fontFamily: 'Formula1',
              fontSize: 13,
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
