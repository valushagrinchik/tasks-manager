import { SplashScreen, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';

SplashScreen.preventAutoHideAsync()

export default function HomeScreen() {
  const router = useRouter();

  useEffect(() => {
    const prepare = async () => {

      try {
        await new Promise(resolve => setTimeout(resolve, 100));
        // Navigate to the tasks page after splash screen
        router.replace('/tasks'); 
      } catch (err) {
        console.error(err);
      } finally {
        await SplashScreen.hideAsync();
      }
    };

    prepare();
  }, []);

  
  return <View/>
}

   
 