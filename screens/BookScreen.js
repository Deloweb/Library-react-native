import React from "react";
import {  StyleSheet, Text, View } from "react-native";
import { Image } from "react-native-elements";

function BookScreen({navigation, route}) {
  return (
    <View style={styles.container}>
      <Image style={{width: 300, height: 250}} source={{ uri: route.params.image}} />
      <Text>Ici les détails du livre {route.params.title}</Text>
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

export default BookScreen;
