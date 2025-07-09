import { Button, Pressable, StyleSheet, Text, useTVEventHandler, View } from 'react-native';

const logger = () => console.log("log log")

export default function App() {
  useTVEventHandler(logger)

  return (
    <View style={styles.container}>
      {/* uncomment below for logger to work */}
      {/* <Pressable style={{backgroundColor: "lightblue", padding: 8}}>
        <Text dynamicTypeRamp="title1">Pressable</Text>
      </Pressable> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
