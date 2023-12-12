import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View ,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function WelcomeScreen() {
  return (
    <SafeAreaView className='flex-1 bg-cyan-600'>
        <View className='flex-1 flex justify-around my-4'>


          <Text className='text-white font-bold text-4xl text-center'>
            Let's Get Started
          </Text>

          <View className='flex-row justify-center' >
              <Image source={require('../assets/login.png')} style={{width:300,height:300}}/>
          </View>

          <View  className='space-y-4'>
            
              <Link href={'/LoginScreen' } asChild >    
                    <Pressable className='ml-12 py-3 bg-yellow-300 rounded-xl w-3/4 '>
                        <Text className='text-gray-900 font-bold text-center'>Login</Text>
                    </Pressable>
              </Link>  

              <Link href={'/SignUp' } asChild>    
                      <Pressable className='ml-12 py-3 bg-white rounded-xl w-3/4 ' >
                          <Text className='font-bold text-center'>Sign Up</Text>
                      </Pressable>
              </Link>

              <Link href={'/(tabs)/home' } asChild>    
                      <Pressable className='ml-12 py-3 bg-white rounded-xl w-3/4 ' >
                          <Text className='font-bold text-center'>Anonymous Sign In</Text>
                      </Pressable>
              </Link>

              
           </View>   
          </View>
    </SafeAreaView>
    
  );
}

