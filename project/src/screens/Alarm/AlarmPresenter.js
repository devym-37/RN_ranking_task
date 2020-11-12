import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native';



const AlarmPersenter = () => {
    return ( 
        <View style = { styles.container } >
            <Text>Alarm</Text>
        </View > 
        );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})

export default AlarmPersenter;