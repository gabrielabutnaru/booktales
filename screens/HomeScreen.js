import React from "react";
import { Image, TouchableOpacity, Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = () => {
  const navigation = useNavigation();

  const navigateToListingScreen = () => {
    navigation.navigate("ListingScreen");
  }

  return (
    <View style={styles.landing}>
      <Image style={styles.image}
             source={{ uri: 'https://t4.ftcdn.net/jpg/05/66/41/13/360_F_566411348_ZCFi5vHGQl8Q5cptTLXOO3PDFtD41Cpx.jpg' }} />
      <View style={styles.bottom}>
        <Text style={styles.title}>BOOK TALES</Text>
        <TouchableOpacity style={styles.button}
                          onPress={navigateToListingScreen}>
          <Text style={styles.buttonText}> VISIT BOOK LIST </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontFamily: 'Obrige',
    color: '#E04646',
    marginTop: 50,
  },
  landing: {
    flex: 1,
    backgroundColor: '#F5E9DD',
    alignItems: 'center',
    justifyContent: 'center'
  },
  bottom: {
    alignItems: 'center',
    marginBottom: 20,
    verticalAlign: 'bottom',
  },
  image: {
    width: '80%',
    height: 300,
    borderRadius: 1000,
    borderColor: '#736D67',
    borderWidth: 2,
  },
  button: {
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor:'#F15757',
    width: 150,
    height: 40,
    borderRadius: 14,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
  ,
  buttonText: {
    color: 'white',
    fontWeight:'bold'
  }
});
