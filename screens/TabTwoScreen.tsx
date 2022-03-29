import { StyleSheet, Image, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
        }}
        style={{ width: 200, height: 200 }}
      />
      <Text style={styles.title}>Patient 1</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.labels}>Female </Text>
      <Text style={styles.labels}>01/01/2000</Text>
      <TouchableOpacity style={styles.box}>
        <Text style={styles.labels}>Medical Info </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.box}>
        <Text style={styles.labels}>Assigned Devices</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  separator: {
    marginTop: 10,
    marginBottom: 20,
    height: 1,
    width: '80%',
  },
  labels: {
    padding: 5,
    color: 'black',
    fontSize: 18
  },
  box: {
    alignItems: 'center',
    width: '80%',
    backgroundColor: 'gainsboro',
    padding: 20,
    marginTop: 30,
    borderRadius: 15
  }
});
