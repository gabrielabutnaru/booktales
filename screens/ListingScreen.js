import React, { useEffect, useState } from "react";
import { Text, ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import { BookTile } from "../components/BookTile";
import { Spacer } from "../components/Spacer";
import { Header } from "react-native/Libraries/NewAppScreen";

export const ListingScreen = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getBooks = async () => {
    try {
      const response = await fetch('http://10.0.2.2:1337/api/books?populate=*');
      const json = await response.json();
      setData(json.data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <View style={styles.center}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <View style={styles.header}>
            <Text style={styles.text}>Books</Text>
          </View>
          <Spacer />
          <FlatList
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => <BookTile item={item} />}
            ItemSeparatorComponent={Spacer}
          /></>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    backgroundColor: '#F5E9DD',
    paddingVertical: 30,
    paddingHorizontal: 18,
  },
  header: {
    justifyContent: 'center',
    paddingLeft:10,
    height:50,
    borderBottomWidth:2,
    borderBottomColor:'gray'
  },
  text: {
    fontSize: 34,
    fontFamily:'Bebas',
    color: '#E04646',
  }
});