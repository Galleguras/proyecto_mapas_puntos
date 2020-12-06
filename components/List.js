import React from 'react';
import {
  FlatList,
  Text,
  View,
  Button,
  Dimensions,
  StyleSheet,
} from 'react-native';

export default ({ puntos,closeModal }) => {
  console.log(puntos);
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={puntos.map((x) => x.name)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
      </View>
      <View style={styles.button}>
        <Button title="Cerrar" onPress={closeModal}></Button>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  list: {
    height: Dimensions.get('window').height - 350,
    width: Dimensions.get('window').width - 150,
  },
item:{
    padding: 20,
    borderBottomWidth:1,
    borderColor:'#ccc',
    height:40,
    justifyContent:'center'
},
button:{
    padding:15
}
});
