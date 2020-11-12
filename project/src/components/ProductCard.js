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

const ProductCard = ({ product, index }) => {
    return (
        <View style = { styles.container }>
            <View style = { styles.gradeContainer }>
                <Text style = { styles.grade }>{`${index}`}</Text>
                <Text style = {{ fontSize: 18, color: "#C7C7C8"}}>{`-`}</Text>
            </View>
            <View style = { styles.imageContainer }>
                <Image style = { styles.image } source = {{uri: `${product.img}`}} />
            </View>
            <View style = { styles.titleContainer }>
                <Text style ={ styles.title }>{`${product.title.length > 13 ? `${product.title.slice(0, 13)}...` : product.title}`}</Text>
                <View style = { styles.tagContainer }>
                    <Text style = { styles.company }>{`${product.company} `}</Text>
                    <Text style = { styles.likes }>
                        <View style={{ marginRight: 5 }}>
                            <Ionicons name="heart-outline" color={"#C7C7C8"} size={15} />
                        </View>
                        {`${product.likes}`}
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
        alignItems: "flex-start",
    },
    likes:{
        color: "#C7C7C8",
        
    },
    company:{
        color: "#C7C7C8",
        marginRight: 10
    }
})

export default ProductCard;
