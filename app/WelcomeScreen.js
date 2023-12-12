import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
      <StatusBar style="auto" />
      <View  style={styles.buttonContainer}>
        <Pressable style={styles.button}>
                <Text >Sign in with Google</Text>
        </Pressable>
        <Link href={'/(tabs)/home' } asChild>    
                <Pressable style={styles.button}>
                    <Text>Login</Text>
                </Pressable>
        </Link>  
        <Link href={'SignUp' } asChild>    
                <Pressable style={styles.button}>
                    <Text>Sign Up</Text>
                </Pressable>
        </Link>
       </View>   
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
  buttonContainer:{
    marginTop:10,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    margin: 5,
    borderRadius: 10,
    backgroundColor: 'sky-blue'
  },
  
});