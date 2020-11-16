import React from 'react';
import {Text, View, Image, StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;

const VideoCard = ({item}) => {
  console.log('item.length_', item.index);

  

  const {index, item: {tag, thumbNailImg, title}} = item;
  return (
    <View style={styles.container}>
      <View style={styles.gradeContainer}>
        <Text style={styles.grade}>{`${index + 1}`}</Text>
        <Text style={{fontSize: 18, color: '#C7C7C8'}}>{`-`}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: `${thumbNailImg}`}} />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{`${
          title.length > 11 ? `${title.slice(0, 10)}...` : title
        }`}</Text>
        <View style={styles.tagContainer}>
          {tag.map((item, index) => (
            <Text key={index.toString()} style={styles.tag}>{`#${item} `}</Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: Width - 50,
    height: 75,
    marginTop: 7,
    marginBottom: 3,
  },
  gradeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 35,
    marginRight: 5,
  },
  grade: {
    marginBottom: 5,
    fontSize: 18,
    fontWeight: '600',
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  image: {
    width: 110,
    height: 65,
  },
  titleContainer: {
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
  },
  tagContainer: {
    flexDirection: 'row',
  },
  tag: {
    color: '#C052E5',
  },
});

export default VideoCard;
