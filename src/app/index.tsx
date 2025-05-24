import { useRouter } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
    
SplashScreen.preventAutoHideAsync()
  
export default function HomeScreen() {
  const router = useRouter()

  useEffect(() => {
    const prepare = async () => {
      router.push('/tasks')
      await SplashScreen.hideAsync()
    }
    
    prepare()
  }, [])  

  return <></>
}

   