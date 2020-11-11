import React from "react";
import {
    Text,
    View,
    StyleSheet
} from 'react-native';



const Header = ({ header }) => {
    return ( 
        <View style = { styles.container } >
            <Text style={styles.title}>{header}</Text>
        </View > 
        );
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        height: 100,
        backgroundColor: "red",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 40
    },
    title:{
        fontSize: 26,
        backgroundColor: "blue"
    }
})

export default Header;