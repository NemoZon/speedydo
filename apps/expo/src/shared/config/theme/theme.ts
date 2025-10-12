import { createTheme } from '@shopify/restyle';
import colors from './colors';
import spacing from './spacing';
import textVariants from './typography';

export const theme = createTheme({
  colors,
  spacing,
  textVariants,
});

export const darkTheme = createTheme({
  ...theme,
  colors: theme.colors,
});

export type Theme = typeof theme;
export type ThemeColors = keyof Theme['colors'];
export type ThemeSpacing = keyof Theme['spacing'];
export type ThemeTextVariants = Exclude<keyof Theme['textVariants'], 'defaults'>;
