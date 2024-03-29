import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

function HomeScreen({navigation, route}) {
    function navigateToLibrary() {
        navigation.reset({
            index: 0,
            routes: [
                {name: "library"},
            ]
        })
    }

    return(
        <View style={styles.container}>
            <Text>Logo</Text>
            <Text>Ici vous pouvez accéder à la bibliothèque</Text>
            <Button title="Start" onPress={navigateToLibrary} />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  
export default HomeScreen;