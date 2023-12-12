import {Tabs} from 'expo-router'

export default function TabsLayout(){
    return (
        <Tabs options={{headerShown:false}}>
            <Tabs.Screen name ='home' options={{tabBarLabel:'Home', headerShown: false }}/>
            <Tabs.Screen name ='setting' options={{tabBarLabel:'Setting', headerShown: false }}/>
        </Tabs>
    )
}