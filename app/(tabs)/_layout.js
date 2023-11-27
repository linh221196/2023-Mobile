import {Tabs} from 'expo-router'

export default function TabsLayout(){
    return (
        <Tabs>
            <Tabs.Screen name ='home' options={{tabBarLabel:'Home', }}/>
            <Tabs.Screen name ='setting' options={{tabBarLabel:'Setting', }}/>
        </Tabs>
    )
}