import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';
import Lottie from 'lottie-react-native'
import { useNavigation } from 'expo-router';

const OnboardingScreen = () => {
    const navigation = useNavigation()
    const handleDone =()=>{
        navigation.navigate('WelcomeScreen')
    }
    const doneButton =({...props})=>{
        return(
            <View >
                <Pressable style={styles.doneButton} onPress={handleDone}>
                    <Text style={{color:'#6f42f7', fontWeight: 'bold'}}>Get Started</Text>
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
                image: (
                    <View style={styles.lottie}>
                        <Lottie source={require('../assets/animations/Girl.json')} autoPlay loop/>
                    </View>
                ),
                    title: 'Alarm and App Push',
                    subtitle: 'Never forget your schedules',
                },

                {
                    backgroundColor: '#fef3c7',
                    image: (
                        <View style={styles.lottie}>
                        <Lottie source={require('../assets/animations/Scanner.json')} autoPlay loop/>
                        </View>
                    ),
                    
                    title: 'Convenience and More',
                    subtitle: 'Auto create schedule with our Camera Scanner',
                },
                {
                    backgroundColor: '#a78bfa',
                    image: (
                        <View style={styles.lottie}>
                        <Lottie source={require('../assets/animations/CalendarGuy.json')} autoPlay loop/>
                        </View>
                    ),
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
        borderBottomLeftRadius: 15
        
    }
})