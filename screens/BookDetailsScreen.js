import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Spacer } from "../components/Spacer";

export const BookDetailsScreen = ({ route }) => {
  const { item } = route.params;

  return <View style={styles.home}>
    <View style={styles.page}>
      <View style={styles.header}>
        <Text style={styles.title}>{item.attributes.title}</Text>
        <View style={styles.person}>
          <Image resizeMode='contain' style={styles.avatar}
                 source={{ uri: item.attributes.authors.data[0].attributes.avatar }} />
          <Spacer />
          <Text style={styles.author}>~ {item.attributes.authors.data[0].attributes.name} ~</Text>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.divider}>
        <View style={styles.details}>
          <View style={styles.shadow}>
            <Image source={{ uri: item.attributes.cover }} style={styles.cover} />
          </View>
          <Text style={styles.textCenter}>{item.attributes.description}</Text>
        </View>
      </ScrollView>
    </View>
  </View>
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 44,
    fontFamily: 'WishShore',
    color: '#F15757'
  },
  textCenter: {
    textAlign: 'center'
  },
  author: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#484848'
  },
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5E9DD',
    padding: 30,
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  page: {
    flexDirection: 'column',
    height: '90%',
    padding: 30,
    borderWidth: 2,
    borderStyle: 'solid',
    borderColor: ' #484848',
    borderRadius: 24,
  },
  header: {
    alignItems: 'center',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  details: {
    alignItems: 'center',
  },
  cover: {
    width: 200,
    height: 300,
    borderRadius: 10,
  },
  shadow: {
    marginVertical: 10,
    width: 200,
    height: 300,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10
  },
  avatar: {
    width: 32,
    height: 32,
    borderWidth: 1,
    borderRadius: 50
  },
  person: {
    flexDirection: 'row',
    alignItems: 'center'
  },
});
