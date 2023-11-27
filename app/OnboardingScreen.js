import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Onboarding from 'react-native-onboarding-swiper';

const OnboardingScreen = () => {
  return (
    <View style={styles.container}>
        <Onboarding
            pages={[
                {
                backgroundColor: '#fff',
                image: (
                    <Text>OnboardingScreen</Text>
                ),
                title: 'Convenience and More',
                subtitle: 'Auto create schedule with our Camera Scanner',
                },
                {
                    backgroundColor: '#fff',
                    image: (
                        <Text>OnboardingScreen</Text>
                    ),
                    title: 'Alarm and App Push',
                    subtitle: 'Never forget your schedules',
                },
                {
                    backgroundColor: '#fff',
                    image: (
                        <Text>OnboardingScreen</Text>
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
    }
})