import { StyleSheet, Image, Button, Alert } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function HomeScreen({ navigation }: RootTabScreenProps<'HomeScreen'>) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Tab One Hello</Text> */}
      <Greeting name='Patient 1' />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.texts}>My doctor</Text>

      <View style={styles.info}>
        <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
          }}
          style={{ width: 200, height: 200 }}
        />
        <Text>Juana Banana</Text>
        <Text>808 Commonwealth Avenue, Boston</Text>
        <Text>617 123 4567</Text>
      </View>
      <Button
        title="Chat"
        onPress={() => Alert.alert('Function disabled')}
      />


    </View>
  );
}

const Greeting = (props: any) => {
  return (
    <View style={styles.greeting}>
      <Text style={styles.greetingTitle}>Hello {props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 15,
    height: 1,
    width: '80%',
  },
  greeting: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 40
  },
  greetingTitle: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  texts: {
    fontSize: 30,
    top: 30,
    alignSelf: 'stretch',
    paddingLeft: 30,
    marginBottom: 50
  },
  info: {
    alignSelf: 'center'
  }

});