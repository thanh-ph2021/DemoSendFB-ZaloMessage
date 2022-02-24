
import React from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import FacebookScreen from './src/screens/FacebookScreen';
import ZaloScreen from './src/screens/ZaloScreen';

const Stack = createStackNavigator();

const myStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Facebook" component={FacebookScreen} />
      <Stack.Screen name="Zalo" component={ZaloScreen} />
    </Stack.Navigator>
  );
}
const App = () => {
  return (
    <View style={styles.container}>

      <View style={styles.button}>
        <Button
          style={styles.button}
          onPress={() => { }}
          title="Facebook"
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => { }}
          title="Zalo"
        />
      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: 'column',
    alignItems:'center'
  },
  button: {
    width: 200,
    height: 80,
  }
});

export default App;
