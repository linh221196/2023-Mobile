import { Image,Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import { useNavigation } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const OnboardingScreen = () => {

    const handleDone = async () => {
        try {
            await AsyncStorage.setItem('onBoarded', '1');
            navigation.navigate('WelcomeScreen');
        } catch (e) {
            // saving error
            console.error("Error saving onboarding status", e);
        }
    };
    const navigation = useNavigation()
    
    const doneButton =({...props})=>{
        return(
            <View >
                <Pressable style={styles.doneButton} onPress={handleDone}>
                    <Text className='font-bold' >Get Started</Text>
                </Pressable>
            </View>
        )
    }
  return (
    <View style={styles.container}>
        <Onboarding
            onDone={handleDone}
            onSkip={handleDone}
            bottomBarHighlight={false}
            DoneButtonComponent={doneButton}
            containerStyles={{paddingHorizontal:15}}
            pages={[
                {
                backgroundColor: '#a7f3d0',
                image:  <Image source={require('../assets/calendar-timer.png')} style={{width:350,height:350}}/>,
                    title: 'Alarm and App Push',
                    subtitle: 'Never forget your schedules',
                },

                {
                    backgroundColor: '#fef3c7',
                    image: <Image source={require('../assets/amazon-seller-app.jpg')} style={{width:350,height:350, borderRadius:80}}  />,
                    title: 'Convenience and More',
                    subtitle: 'Auto create schedule with our Camera Scanner',
                },
                {
                    backgroundColor: '#a78bfa',
                    image: <Image source={require('../assets/welcome.png')} style={{width:350,height:350}}/>,
                    title: 'Achieve Higher Goals',
                    subtitle: 'Get your work done without interruption',
                },


            ]}
        />
    </View>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    lottie:{
        width: 300,
        height:400
    },
    doneButton:{
        padding:15,
        backgroundColor:'white',
        borderTopLeftRadius: 15,
        borderBottomLeftRadius: 15,
        font:'bold'
        
    }
})