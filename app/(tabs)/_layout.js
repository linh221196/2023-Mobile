import {Tabs} from 'expo-router'
import { Image,Text } from 'react-native'
import React, { useState,useEffect } from 'react';
import { useTheme } from '../../ThemeContext';
import { colors } from '../../config/theme';



export default function TabsLayout({ children }){
    const { theme } = useTheme();
    const themeColors = colors[theme];
    
    return (

            <Tabs options={{headerShown:false}} 
                screenOptions={({route})=>({
                    tabBarIcon:({focused}) =>{
                    
                        if(route.name ==='home'){
                           return (<Image source={require('../../assets/icons/home.png')} style={{width:20, height:20}}/>)
                        }else if (route.name === 'setting'){
                            return (<Image source={require('../../assets/icons/setting.png')} style={{width:20, height:20}}/>)
                        }
                    },
                    tabBarStyle: { backgroundColor: themeColors.primary },
                    tabBarActiveTintColor: themeColors.accent,
                    tabBarInactiveTintColor: themeColors.tertiary,
                    
                })}>
            <Tabs.Screen name ='home' 
                options={{tabBarLabel: ({ focused, color }) => (
                    <Text className='font-bold text-lg text-gray-200' style={{ fontSize: focused ? 14 : 12}}>
                        Home
                    </Text>),
                     headerShown: false, }}/>
            <Tabs.Screen name ='setting'
                 options={{tabBarLabel: ({ focused, color }) => (
                    <Text className='font-bold text-lg text-gray-200' style={{ fontSize: focused ? 14 : 12}}>
                        Setting
                    </Text>),
                 headerShown: false }}/>
        </Tabs>
      

    )
}