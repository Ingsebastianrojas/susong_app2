import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Pedidos({ theme }) {
  return (
    <View style={styles.container}>
      <Text style={theme.text}> Aquí verás tus pedidos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});