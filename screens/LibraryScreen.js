import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
// import Booksdata from "./../data/books.json";
import axios from "axios";
import { Input, Button, ListItem } from "react-native-elements";
import { useSafeAreaFrame } from "react-native-safe-area-context";

function LibraryScreen({ navigation, route }) {
  // const [booksList, setBooksList] = useState({ Booksdata });
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${search}`)
      .then((res) => setUsers(res.data));
  }, [search]);


  // Test
  // renderItem = ({ item }) => (
  //   <ListItem
  //     title={
  //       <View>
  //         <Text>{item.volumeInfo.title}</Text>
  //       </View>
  //     }
  //     bottomDivider
  //   />
  // );

  return (
    <View style={styles.container}>
      <Input
        placeholder="Search book"
        onChangeText={(text) => {
          setInput(text);
        }}
      />
      <Button
        title="Search"
        onPress={() => {
          setSearch(input);
        }}
      />
      {console.log(users.items)}

{/* Test */}
      {/* {console.log(users.items)}
        {search !== '' ? users.items.map((book) => (
        <ListItem
          // leftAvatar={{ source: { uri: book.image } }}
          title={book.volumeInfo.title}
          bottomDivider
          onPress={() => {
            navigation.navigate("book", {
              title: book.volumeInfo.title,
              // image: book.image,
            });
          }}
        />
      )) : ''} */}

      {/* <View>
        <FlatList
          data={users.item}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      </View> */}

      {/* {users.items.map((book) => (
        <ListItem
          // leftAvatar={{ source: { uri: book.image } }}
          title={book.volumeInfo.title}
          bottomDivider
          onPress={() => {
            navigation.navigate("book", {
              title: book.volumeInfo.title,
              // image: book.image,
            });
          }}
        />
      ))} */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LibraryScreen;
