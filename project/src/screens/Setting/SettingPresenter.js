import React from 'react'
import {
    Text,
    View,
    StyleSheet
} from 'react-native';



const SettingPresenter = () => {
    return ( 
        <View style = { styles.container } >
            <Text>Setting</Text>
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

export default SettingPresenter;