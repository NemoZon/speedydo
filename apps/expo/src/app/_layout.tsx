import { darkTheme, theme } from '@/src/shared/config/theme/theme';
import { Box } from '@/src/shared/ui/box/Box';
import { ThemeProvider } from '@shopify/restyle';
import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider theme={colorScheme === 'dark' ? darkTheme : theme}>
      <Box backgroundColor="secondary" flex={1}>
        <Slot />
      </Box>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
