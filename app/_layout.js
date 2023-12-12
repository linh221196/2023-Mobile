import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Stack } from 'expo-router'
import {getItem} from '../utils/asyncStorage'

const WelcomePage = () => {

  const [showOnboard, setShowOnboard]= useState('null')
  useEffect(()=>{
    checkOnboarding()
  },[])

  const checkOnboarding = async () =>{
    let onBoarded = await getItem('onBoarded')
    if (onBoarded ==1){
      setShowOnboard(false)
    }else{
      setShowOnboard(true)
    }
  }

  if(showOnboard == null){
    return null
  }

  if(showOnboard){
    return (
      <Stack initialRouteName='OnboardingScreen' screenOptions={{headerShown:false}}>
          <Stack.Screen name = 'WelcomeScreen' options={{headerShown:false}}/>
          <Stack.Screen name = 'OnboardingScreen' options={{headerShown:false}}/>
  
      </Stack>
    )
  }
    else {
      return (
        <Stack initialRouteName='WelcomeScreen' screenOptions={{headerShown:false}}>
            <Stack.Screen name = 'WelcomeScreen' options={{headerShown:false}}/>
            <Stack.Screen name = 'OnboardingScreen' options={{headerShown:false}}/>
    
        </Stack>
      )
  }

  
}

export default WelcomePage