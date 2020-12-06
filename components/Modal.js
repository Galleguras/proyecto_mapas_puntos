import React from 'react';
import { StyleSheet, Dimensions, Modal, Text, View } from 'react-native';

export default ({ children, visibility }) => {
  return (
    <View style={styles.container}>
      <Modal animationType="slide" transparent={true} visible={visibility}>
        <View style={styles.center}>
          <View style={styles.modalView}>{children}</View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    backgroundColor: 'white',
    minWidth: Dimensions.get('window').width - 150,
    borderRadius: 4,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  center: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
