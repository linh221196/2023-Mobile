import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const WelcomePage = () => {
  return (
    <Stack initialRouteName='OnboardingScreen'>
        <Stack.Screen name = 'WelcomeScreen' options={{headerShown:false}}/>
        <Stack.Screen name = 'OnboardingScreen' options={{headerShown:false}}/>

    </Stack>
  )
}

export default WelcomePage