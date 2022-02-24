
import React from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import FacebookScreen from './src/screens/FacebookScreen';
import ZaloScreen from './src/screens/ZaloScreen';
import MainScreen from './src/screens/MainScreen';
import { LogBox } from 'react-native';
import SendMessageScreen from './src/screens/SendMessageScreen';
import SendGroupMessage from './src/screens/SendGroupMessageScreen';
import FollowerScreen from './src/screens/FollowerScreen';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown: false}} />
        <Stack.Screen name="Facebook" component={FacebookScreen} />
        <Stack.Screen name="Zalo" component={ZaloScreen} />
        <Stack.Screen name="ZaloSendMessage" component={SendMessageScreen} />
        <Stack.Screen name="ZaloSendGroupMessage" component={SendGroupMessage} />
        <Stack.Screen name="ZaloFollowerScreen" component={FollowerScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: 'column',
    alignItems: 'center'
  },
  button: {
    width: 200,
    height: 80,
  }
});

export default App;
