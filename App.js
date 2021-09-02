import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Tool } from 'react-native-feather';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const Flex = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#003060' />
      <View style={styles.header}>
        <ImageBackground
          source={{
            uri: 'https://vetstreet.brightspotcdn.com/dims4/default/02bd838/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2Fa3%2F767b00a33511e087a80050568d634f%2Ffile%2FSphynx-4-645mk062211.jpg',
          }}
          resizeMode='cover'
          imageStyle={styles.catImageStyle}
          style={styles.catImage}
        >
          <Text style={styles.textOnCat}>hairless cat</Text>
          <Tool
            stroke='black'
            fill='#fff'
            width={32}
            height={32}
            style={styles.toolIconStyle}
          />
        </ImageBackground>
      </View>
      <View style={styles.lowerContainer}>
        <View style={styles.leftie}>
          <ImageBackground
            source={{
              uri: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
            }}
            resizeMode='cover'
            imageStyle={styles.catImageStyleSmall}
            style={styles.catImageSmall}
          ></ImageBackground>
        </View>
        <View style={styles.rightie}>
          <Text style={styles.titleStyle}>Title</Text>
          <Text style={styles.textStyle}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            porta leo sed mi malesuada malesuada. Morbi gravida lacinia lacus,
            et viverra mi cursus nec.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    flexBasis: 300,
    backgroundColor: 'black',
  },
  lowerContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
  },
  leftie: {
    flex: 1,
    backgroundColor: '#003060',
  },
  rightie: {
    flex: 1,
    backgroundColor: '#003060',
  },
  textOnCat: {
    width: 200,
    height: 50,
    fontSize: 20,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    top: '80%',
    left: '10%',
    position: 'absolute',
  },
  catImage: {
    flex: 1,
  },
  catImageStyle: {
    borderBottomRightRadius: 50,
  },
  catImageSmall: {
    flex: 1,
  },
  catImageStyleSmall: {
    margin: 20,
    borderBottomLeftRadius: 50,
  },
  textStyle: {
    fontSize: 20,
    color: 'white',
    lineHeight: 30,
    flex: 1,
  },
  titleStyle: {
    color: 'white',
    fontSize: 25,
    marginTop: 10,
    marginBottom: 10,
  },
  toolIconStyle: {
    position: 'absolute',
    top: '20%',
    right: '10%',
  },
});

export default Flex;
