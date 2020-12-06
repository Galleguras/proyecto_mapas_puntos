import React from 'react';
import { StyleSheet, Button, View } from 'react-native';

export default ({ onPressLeft, textLeft,togglePointFilter }) => {
  return (
    <View style={styles.panel}>
      <Button style={styles.button} onPress={onPressLeft} title={textLeft}  />
      <Button style={styles.button} onPress={togglePointFilter}  title="Mostrar / Ocultar" />
    </View>
  );
};

const styles = StyleSheet.create({
  panel: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding:3,
    margin:3,
  },
  button:{
    flex:2,
    padding:3,
    margin:3,
    width:44
  }
});
