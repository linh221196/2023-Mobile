import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState, useContext } from 'react';
import { useTheme } from '../../../ThemeContext';
import { colors } from '../../../config/theme';


export default function App() {
  const { theme } = useTheme();
    const themeColors = colors[theme];

  return (
    <View  className=" justify-center items-center" style={{flex:1, backgroundColor: themeColors.primary }}>
            <Text className='font-bold ml-2 text-lg text-gray-200'  >Home Screen</Text>
            {/* rest of your component */}
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