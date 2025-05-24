
import { myTheme } from '@/shared/theme';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry, ModalService } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Stack } from 'expo-router';
import 'react-native-get-random-values';

ModalService.setShouldUseTopInsets = true //applies StatusBar additional offset

export default function Layout() {
  return <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={myTheme}>
      <Stack screenOptions={{ headerShown: false, contentStyle: {
        padding: 20,
        paddingTop: 40,
        paddingBottom: 40
      } }}/>
    </ApplicationProvider>
  </>
}
