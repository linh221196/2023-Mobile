import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View,Image,Button } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useContext, useEffect } from 'react';
import { useTheme } from '../../../ThemeContext';
import { colors } from '../../../config/theme';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '../../../config/firebaseConfig'; // Assuming this is your Firebase auth instance
import { router } from 'expo-router';



export default function App() {
  const { theme, toggleTheme } = useTheme();
  const themeColors = colors[theme];
  const [isDarkMode, setIsDarkMode] = useState(theme === 'dark');

  const handleSignOut = async () => {
    try {
      await signOut(firebaseAuth);
      // Optionally, navigate to the login screen or show a message
      console.log('User signed out successfully');
      router.replace('/WelcomeScreen');
    } catch (error) {
      console.error('Error signing out: ', error);
    }
  };
  

  useEffect(() => {
    setIsDarkMode(theme === 'dark');
}, [theme]);

const toggleSwitch = () => {
  toggleTheme();
  setIsDarkMode(previousState => !previousState);
};


  return (
    <View className=" justify-center items-center"style={{flex:1, backgroundColor: themeColors.primary }} >
      <SafeAreaView>
        {/* Dark Mode */}
        <View className='flex flex-row mb-3 justify-center items-center'>
          <Image source={require('../../../assets/icons/white-border-moon.png')} style={{height:30, width:30}}/>
          <Text className='font-bold ml-2 text-lg text-gray-200' >Dark Mode</Text>
          <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isDarkMode ? "#f5dd4b" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isDarkMode}
            />

        </View>
        {/* Log Out */}
        <Pressable className='flex flex-row mb-3' onPress={handleSignOut}>
          <Image source={require('../../../assets/icons/logout-white.png')} style={{height:30, width:30}}/>
          <Text className='font-bold ml-2 text-lg text-gray-200'>Log Out</Text>
        </Pressable>


      </SafeAreaView>

        
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
});