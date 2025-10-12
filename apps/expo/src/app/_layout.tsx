import { ThemeProvider } from '@shopify/restyle';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { StatusBar, useColorScheme } from 'react-native';
import { darkTheme, theme, useAppFonts } from '../shared/config';

SplashScreen.preventAutoHideAsync();
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useAppFonts();

  useEffect(() => {
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;
  return (
    <>
      <StatusBar />
      <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : theme}>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)/index" />
        </Stack>
      </ThemeProvider>
    </>
  );
}
