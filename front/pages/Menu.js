import { View, Text, StyleSheet } from 'react-native';

export default function Menu({ theme }) {
  return (
    <View style={styles.container}>
      <Text style={theme.text}> Aquí irá el menú</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});