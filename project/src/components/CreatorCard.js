import React from 'react';
import {
    Text,
    View,
    Image,
    StyleSheet,
    Dimensions
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

Ionicons.loadFont();

const Width = Dimensions.get("window").width;

const CreatorCard = ({ creator, index }) => {
    return (
        <View style = { styles.container }>
            <View style = { styles.gradeContainer }>
                <Text style = { styles.grade }>{`${index + 1}`}</Text>
                <Text style = {{ fontSize: 18, color: "#C7C7C8"}}>{`-`}</Text>
            </View>
            <View style = { styles.imageContainer }>
                <Image style = { styles.image } source = {{uri: `${creator.img}`}} />
            </View>
            <View style = { styles.titleContainer }>
                <Text style ={ styles.title }>{`${creator.name}`}</Text>
                <View style = { styles.tagContainer }>
                    <Text style = { styles.likes }>
                        <View>
                            <Ionicons name="heart-outline" color={"#C7C7C8"} size={15} style={{textAlign:"center", marginRight:5, justifyContent: 'center', alignItems: 'center', }}/>
                        </View>
                        {`${creator.likes}`}
                    </Text>
                    <Text style = { styles.views }>
                        <View>
                            <Ionicons name="play-outline" color={"#C7C7C8"} size={15} style={{ textAlign:"center", marginRight: 5 }}/>
                        </View>
                        {`${creator.views} `}
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container :{
        flexDirection: "row", 
        width: Width - 50, 
        height: 90,
        marginTop: 4,
    },
    gradeContainer:{
        justifyContent: "center", 
        alignItems: "center", 
        width: 30, 
        marginRight: 10
    },
    grade:{
        marginBottom: 5, 
        fontSize: 18, 
        fontWeight: "600"
    },
    imageContainer:{
        justifyContent: "center", 
        alignItems: 'center', 
        marginRight: 15
    },
    image:{
        width: 65, 
        height: 65,
        borderRadius: 50
    },
    titleContainer:{
        justifyContent: "center"
    },
    title:{
        fontSize: 18, 
        marginBottom: 8
    },
    tagContainer:{
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    likes:{
        color: "#C7C7C8",
        marginRight: 10,
    },
    views:{
        color: "#C7C7C8",
        alignItems: 'center',
        justifyContent: 'center',
    }
})

export default CreatorCard;
