import React from 'react';
import {
    StyleSheet,
    View,
    Button
} from 'react-native';


const SendGroupMessage = () => {
    return (
        <View style={styles.container}>

            <View style={styles.button}>
                <Button
                    onPress={() => {}}
                    title="Send Message"
                />
            </View>
            <View style={styles.button}>
                <Button
                    onPress={() => {}}
                    title="Send Group Message"
                />
            </View>
            <View style={styles.button}>
                <Button
                    onPress={() => {}}
                    title="Follower"
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
        alignItems: 'center'
    },
    button: {
        margin: 10,
        width: 200,
        height: 80,
    }
});

export default SendGroupMessage;