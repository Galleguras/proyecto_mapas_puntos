import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

export default ({ title, ...rest }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{title}</Text>
      <TextInput style={styles.textInp} {...rest}></TextInput>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    
    height: 70,
    width:210
  },
  text:{
    flex:1
  },
  textInp:{
    flex:1
  }
});
