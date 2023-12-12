import { View, Text } from 'react-native'
import React from 'react'
import { Redirect } from 'expo-router'
import WelcomePage from './_layout'


const index = () => {
  return (
    <WelcomePage>
      <Redirect href={'OnboardingScreen'}></Redirect>
    </WelcomePage>
    
  )
}

export default index