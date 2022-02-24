
import React from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';

const MainScreen = ({navigation}) => {
  return (
    <View style={styles.container}>

      <View style={styles.button}>
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('Facebook')}
          title="Facebook"
        />
      </View>
      <View style={styles.button}>
        <Button
          onPress={() => navigation.navigate('Zalo')}
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

export default MainScreen;
