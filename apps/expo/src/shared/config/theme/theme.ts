import { createTheme } from '@shopify/restyle';
import colors from './colors';
import spacing from './spacing';
import textVariants from './typography';

export const theme = createTheme({
  colors: colors,
  spacing: spacing,
  textVariants: textVariants,
});

export const darkTheme = createTheme({
  ...theme,
  colors: {
    ...theme.colors,
    background: theme.colors.black,
    text: theme.colors.white,
  },
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
export type ThemeSpacing = keyof Theme['spacing'];
export type ThemeTextVariants = keyof Theme['textVariants'];
