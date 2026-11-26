import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const BLACK = '#050505';
const YELLOW = '#FFD60A';

export default function App() {
  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <Text style={styles.kanji}>夢</Text>
      <Text style={styles.name}>yume</Text>
      <Text style={styles.slogan}>Music beyond reality.</Text>
      <Text style={styles.version}>Versão de teste da esteira de build</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: BLACK,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  kanji: { color: YELLOW, fontSize: 96, marginBottom: 8 },
  name: { color: '#FFFFFF', fontSize: 28, letterSpacing: 4 },
  slogan: { color: 'rgba(255,255,255,0.6)', fontSize: 14, marginTop: 8 },
  version: { color: 'rgba(255,255,255,0.35)', fontSize: 12, marginTop: 48 },
});
