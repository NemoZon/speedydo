import { createTheme } from '@shopify/restyle';
import colors from './colors';
import textVariants from './typography';
import spacing from './spacing';

export const theme = createTheme({
  colors: colors,
  spacing: spacing,
  textVariants: textVariants,
});

export const darkTheme = createTheme({
  ...theme,
  colors: {
    ...theme.colors,
    background: '#000',
    text: '#fff',
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
export type ThemeSpacing = keyof Theme['spacing'];
export type ThemeTextVariants = keyof Theme['textVariants'];
