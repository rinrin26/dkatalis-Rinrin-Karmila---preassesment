import {AsyncStorage} from 'react-native';
Data = async () => {
    try {
      const value = await AsyncStorage.getItem('example');
      if (value !== null) {
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  };