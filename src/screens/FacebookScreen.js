import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


const FacebookScreen = () => {
  return (
    <View style={styles.container}>

      <Text>FacebookScreen</Text>

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

export default FacebookScreen;