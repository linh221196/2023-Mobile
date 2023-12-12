import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Stack } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeProvider } from '../ThemeContext';
import { User, onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from '../config/firebaseConfig';


const TopLayout = ({ children }) => {

  const [showOnboard, setShowOnboard] = useState(null);


  

  useEffect(() => {
    const checkOnboarding = async () => {
      let onBoarded = await AsyncStorage.getItem('onBoarded');
      console.log('Onboarded status:', onBoarded); // Add this line for debugging
      setShowOnboard(onBoarded === '1');

    };

    checkOnboarding();
  }, []);

  // Render the stack navigator based on the onboarding status
  const renderNavigator = () => {
    return (
      <Stack initialRouteName={showOnboard ? 'WelcomeScreen' : 'OnboardingScreen'} screenOptions={{ headerShown: false }}>
        <Stack.Screen name='WelcomeScreen' asChild options={{ headerShown: false }} />
        <Stack.Screen name='OnboardingScreen' asChild options={{ headerShown: false }} />
        <Stack.Screen name='SignUp' options={{ headerShown: false }} />
        <Stack.Screen name='LoginScreen' options={{ headerShown: false }} />
      

      </Stack>
    );
  };

  return (
    <ThemeProvider>
      {showOnboard !== null && renderNavigator()}
      {children}
    </ThemeProvider>
  );
};

export default TopLayout;
