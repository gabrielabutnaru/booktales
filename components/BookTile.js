import { Image, StyleSheet, Text, TouchableOpacity, View, ViewBase } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Spacer } from "./Spacer";

export const BookTile = ({ item }) => {
  const navigation = useNavigation();

  const navigateToBookDetailsScreen = () => {
    navigation.navigate('BookDetailsScreen', { item });
  };

  return <TouchableOpacity style={styles.box} onPress={navigateToBookDetailsScreen}>
    <Image resizeMode='contain' style={styles.image}
           source={{ uri: item.attributes.cover }} />
    <Spacer />
    <View style={styles.arrange}>
      <Text style={styles.text}>{item.attributes.title}</Text>
      <Text style={[styles.text, styles.pink]}>~{item.attributes.authors.data[0].attributes.name}</Text>
      <View style={styles.rating}>
        <Image source={require('../assets/star.png')} />
        <Text>  {item.attributes.rating}</Text>
      </View>
    </View>
  </TouchableOpacity>
}

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'gray'
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    flexWrap: 'wrap',
    flexShrink: 1,
    width: 250
  },
  image: {
    marginRight: 4,
    width: 90,
    height: 130,
    borderRadius: 8
  },
  arrange: {
    flexDirection: 'column',
    justifyContent: "center"
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  pink: {
    color: '#E04646'
  }
});