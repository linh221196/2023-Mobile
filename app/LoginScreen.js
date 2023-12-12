import { View, Text,Pressable, Image, KeyboardAvoidingView,} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {ArrowLeftIcon} from 'react-native-heroicons/solid'
import {Link, router} from 'expo-router'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { firebaseAuth} from '../config/firebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'


const LoginScreen = () => {
  const[email, setEmail]=useState('')
  const[pw, setPw]=useState('')
  const [loading, setLoading] = useState(false)
  const  auth = firebaseAuth


  const handleLogin = async()=>{
    setLoading(true)
    try{
      const response = await signInWithEmailAndPassword(auth, email,pw)
      console.log(response)
      alert('Sign In Successed!')
      router.replace('/(tabs)/home');

    } catch (error){
      console.log(error)
      alert('Failed' + error.message)
    }finally{
      setLoading(false)
    }
  }

  return (
    <View className='flex-1 bg-cyan-600'>
      <SafeAreaView className='flex'>
        <View className='flex-row justify-start mt-5'>
        <Link href={'./' } asChild >    
                    <Pressable className='ml-4 p-2 bg-yellow-300 rounded-tr-2xl rounded-bl-2xl '>
                       <ArrowLeftIcon size ='20' color='black'/>
                    </Pressable>
        </Link> 
        </View>
        <View className='flex-row justify-center m-5'>
          <Image source={require('../assets/signup.png')} style={{width:300, height:200}}/>
        </View>
      </SafeAreaView>

      {/* /* form view*/ }
      <KeyboardAvoidingView className='flex-1 bg-white px-8 pt-8 rounded-tl-3xl rounded-tr-3xl p-3 '>
         <ScrollView>
         <View className='form space-y-2'> 
            <Text className='text-gray-700 ml-1'>Email Address</Text>
            <TextInput placeholder='Example: hongkildong@naver.com'
            className='bg-gray-100 p-2 rounded-xl scroll-mb-3 '
            autoCapitalize='none'
            value={email}
            onChangeText={text => setEmail(text)}
            />

            <Text className='text-gray-700 ml-1'>Password</Text>
            <TextInput secureTextEntry
            className='bg-gray-100 p-2 rounded-xl mb-5'
            placeholder='Enter Password'
            autoCapitalize='none'
             value={pw}
            onChangeText={text => setPw(text)}
            />

            {}

        
            <Pressable className='ml-12 py-3 bg-yellow-300 rounded-xl w-3/4'
              onPress={()=>handleLogin()}>
              <Text className='text-gray-900 font-bold text-center'>Sign In</Text>
            </Pressable>
          </View>
         </ScrollView>

      </KeyboardAvoidingView>
      
         
        
          
      
    </View>

   
  )
}

export default LoginScreen