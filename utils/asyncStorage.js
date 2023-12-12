import AsyncStorage from '@react-native-async-storage/async-storage';


const setItem = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value)
    } catch (error) {
      console.log('Error storing value: ', error)
    }
  }

const getItem = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null) {
        return value
      }
    } catch(error) {
        console.log('Error retrieving value: ', error)
    }
  }

  const removeItem = async () => {
    try {
      await AsyncStorage.removeItem(key)
    } catch(error) {
        console.log('Error deleting value: ', error)
    }
  }
  

  
  