import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome Screen</Text>
      <StatusBar style="auto" />
      <View  style={styles.buttonContainer}>
        <Link href={'HomePage' } asChild>    
                <Pressable>
                    <Text>Login</Text>
                </Pressable>
        </Link>  
        <Link href={'SignUp' } asChild>    
                <Pressable>
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
  }
});