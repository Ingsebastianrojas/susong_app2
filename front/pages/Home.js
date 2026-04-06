import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  Image 
} from 'react-native';
import { Card, TextInput } from 'react-native-paper';

export default function Home({ theme, setScreen, setCategory }) {
  const [direccion, setDireccion] = useState('');

  return (
    <ScrollView 
      style={[styles.container, theme.container]}
      contentContainerStyle={styles.content}
    >

      {/* HEADER DIRECCIÓN */}
      <Card style={styles.header}>
        <Card.Content>
          <Text style={styles.smallText}> Entregar en</Text>
          <Text style={styles.address}>
            {direccion || 'Ingresa tu dirección'}
          </Text>
        </Card.Content>
      </Card>

      {/* BUSCADOR */}
      <TextInput
        label="Buscar dirección..."
        value={direccion}
        onChangeText={setDireccion}
        style={styles.input}
      />

      {/* CATEGORÍAS */}
      <Text style={[styles.sectionTitle, theme.text]}>
        Categorías
      </Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categories}
      >

        <TouchableOpacity 
          style={styles.category}
          onPress={() => {
            setCategory('combos');
            setScreen('menu');
          }}
        >
          <Text style={styles.iconImage}></Text>
          <Image 
            source={{ uri: 'https://i.pinimg.com/736x/b0/c4/f2/b0c4f2bf9de44f7aa23d2ff3d7c274dd.jpg' }}
            style={styles.iconImage}
          />
          <Text>Combos</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.category}
          onPress={() => {
            setCategory('papas');
            setScreen('menu');
          }}
        >
          <Text style={styles.iconImage}></Text>
          <Image 
            source={{ uri: 'https://i.pinimg.com/736x/fb/69/4f/fb694f79e50fd6cf9dc1d4ccd850dd22.jpg' }}
            style={styles.iconImage}/>
          <Text>Papas</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.category}
          onPress={() => {
            setCategory('bebidas');
            setScreen('menu');
          }}
        >
          <Text style={styles.iconImage}></Text>
          <Image 
            source={{ uri: 'https://i.pinimg.com/736x/d5/f1/f4/d5f1f44f3837e13f9d4cad033fb9e57f.jpg' }}
            style={styles.iconImage}/>
          <Text>Bebidas</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.category}
          onPress={() => {
            setCategory('promos');
            setScreen('menu');
          }}
        >
          <Text style={styles.iconImage}></Text>
          <Image 
            source={{ uri: 'https://i.pinimg.com/736x/7f/63/d5/7f63d5fec17b9625bd71db2d0d6a4d04.jpg' }}
            style={styles.iconImage}/>
          <Text>Promos</Text>
        </TouchableOpacity>

      </ScrollView>

      {/* CARRUSEL DE PUBLICIDAD */}
      <Text style={[styles.sectionTitle, theme.text]}>
         Promociones
      </Text>

      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.slider}
      >

        <TouchableOpacity onPress={() => setScreen('menu')}>
          <Image 
            source={{ uri: 'https://i.pinimg.com/1200x/2a/e2/cc/2ae2cca2df5c972d3e3928de84e1bc0e.jpg' }}
            style={styles.image}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setScreen('menu')}>
          <Image 
            source={{ uri: 'https://i.pinimg.com/1200x/5b/7c/f5/5b7cf559f5fc7a049855f564abe5f198.jpg' }}
            style={styles.image}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setScreen('menu')}>
          <Image 
            source={{ uri: 'https://i.pinimg.com/1200x/46/1d/3e/461d3ee341b6d0796b9c6bb072a6c3f1.jpg' }}
            style={styles.image}
          />
        </TouchableOpacity>

      </ScrollView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },

  content: {
    paddingTop: 30,
    paddingBottom: 20,
  },

  /* HEADER */
  header: {
    marginBottom: 15,
    borderRadius: 10,
    elevation: 3,
  },
  smallText: {
    fontSize: 12,
    color: 'gray',
  },
  address: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  /* INPUT */
  input: {
    marginBottom: 20,
  },

  /* CATEGORÍAS */
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  categories: {
    marginBottom: 20,
  },
  category: {
  alignItems: 'center',
  justifyContent: 'center',
  marginRight: 15,
  paddingVertical: 8,
  paddingHorizontal: 10,
  borderRadius: 10,
  backgroundColor: '#eee',

  },
  emoji: {
    fontSize: 30,
  },

  /* SLIDER */
  slider: {
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
iconImage: {
  width: 40,
  height: 40,
  marginBottom: 5,
  borderRadius: 20, 
}
});