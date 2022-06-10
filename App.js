import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Witaj!</Text>
        <Text style={styles.text}></Text>
        <Button
          style={styles.buttonContainer}
          onPress={() => {
            navigation.navigate('Profile');
          }}
          title="Profil"
          color="#841584"
        />
        <StatusBar style="auto" />
      </View>
  );
}

const ProfileScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('./user.png')} style={{width: 120, height: 120}} />
      <Text></Text>
      <Text style={styles.text}>Oto twój profil!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  buttonContainer: {
    margin: 20,
  },
});
