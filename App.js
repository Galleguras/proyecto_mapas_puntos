import React, { useState } from 'react';
import { StyleSheet, View, Button, Text } from 'react-native';
import { InputPunto, Map, Modal, Panel, List } from './components';

export default function App() {
  const [puntos, setPuntos] = useState([]);
  const [nombre, setNombre] = useState('');
  const [puntoTemp, setPuntoTemp] = useState({});
  const [visibilityFilter, setVisibilityFilter] = useState('new_punto');
  const [visibility, setVisibility] = useState(false);
  const [pointsFilter, setPointsFilter] = useState(true);

  const togglePointFilter = () => setPointsFilter(!pointsFilter);

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityFilter('new_punto');
    setPuntoTemp(nativeEvent.coordinate);
    setVisibility(true);
  };

  const handleChangeText = (text) => {
    setNombre(text);
  };

  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre };
    setPuntos(puntos.concat(newPunto));
    setVisibility(false);
    setNombre('');
  };

  const handleLista = () => {
    setVisibilityFilter('all_puntos');
    setVisibility(true);
  };
  return (
    <View style={styles.container}>
      <Map
        onLongPress={handleLongPress}
        puntos={puntos}
        pointsFilter={pointsFilter}
      />
      <Panel
        onPressLeft={handleLista}
        textLeft={'Lista'}
        togglePointFilter={togglePointFilter}
      />
      <Modal visibility={visibility}>
        {visibilityFilter === 'new_punto' ? (
          <View style={styles.form}>
            <InputPunto
              tittle="Nombre"
              placeholder="Nombre del Punto"
              onChangeText={handleChangeText}
            ></InputPunto>
            <Button title="Aceptar" onPress={handleSubmit} />
          </View>
        ) : (
          <List
            puntos={puntos}
            closeModal={() => {
              setVisibility(false);
            }}
          ></List>
        )}
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    justifyContent: 'flex-start',
    paddingTop: 43,
  },
  form: {
    padding: 20,
  },
});
