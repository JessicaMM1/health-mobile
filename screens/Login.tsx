import { Button, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, View } from '../components/Themed';
import { FontAwesome } from '@expo/vector-icons';

export default function LoginScreen() {

    return (
        <View style={styles.container}>
            {/* <Text>Hello !</Text>
            <Text>Hello !</Text> */}

            <TouchableOpacity style={styles.button}>
                <FontAwesome
                    name="google"
                    size={25}
                    color='white'
                    style={{ marginRight: 10 }}
                />
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>Log In</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: '45%',
        flexDirection: 'row',
        backgroundColor: 'lightskyblue',
        borderRadius: 40,
        padding: 20,
        justifyContent: 'center',
        marginTop: 30

    }


});