import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Pedidos from './pages/pedidos';
import Config from './pages/Config';
import Menu from './pages/Menu';

export default function App() {
  const [screen, setScreen] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [category, setCategory] = useState(null); // 

  const theme = darkMode ? darkTheme : lightTheme;

  const renderScreen = () => {
    switch (screen) {
      case 'home':
        return (
          <Home 
            theme={theme} 
            setScreen={setScreen} 
            setCategory={setCategory}   
          />
        );

      case 'menu':
        return <Menu theme={theme} category={category} />;

      case 'pedidos':
        return <Pedidos theme={theme} />;

      case 'config':
        return <Config theme={theme} />;

      default:
        return null;
    }
  };

  return (
    <PaperProvider>
      <View style={[styles.container, theme.container]}contentContainerStyle={styles.content}>
        

        {/* CONTENIDO */}
        <View style={styles.content}>
          {renderScreen()}
        </View>

        {/* BOTÓN DARK MODE */}
        <TouchableOpacity
          style={styles.darkButton}
          onPress={() => setDarkMode(!darkMode)}
        >
          <Text style={theme.text}>
            {darkMode ? ' Claro' : ' Oscuro'}
          </Text>
        </TouchableOpacity>

        {/* NAVBAR */}
        <Navbar setScreen={setScreen} theme={theme} />

      </View>
    </PaperProvider>
  );
}

/* TEMAS */
const lightTheme = {
  container: { backgroundColor: '#fff' },
  navbar: { backgroundColor: '#ddd' },
  text: { color: '#000', fontSize: 16 },
};

const darkTheme = {
  container: { backgroundColor: '#121212' },
  navbar: { backgroundColor: '#1e1e1e' },
  text: { color: '#fff', fontSize: 16 },
};

/* ESTILOS */
const styles = StyleSheet.create({
  container: { flex: 1 },
  content: {
    padding: 40,
    paddingBottom: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  darkButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#ccc',
  },
});