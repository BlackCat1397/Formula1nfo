import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './src/redux/store';

import { HomeScreen } from './src/screens/HomeScreen';
import { DriverDetailsScreen } from './src/screens/DriverDetailsScreen';
import { Colors } from './src/constants/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
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
      </PersistGate>
    </Provider>
  );
}

export default App;
