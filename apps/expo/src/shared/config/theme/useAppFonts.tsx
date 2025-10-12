import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from '@expo-google-fonts/inter';

const fontImports = {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} as const;

export type AppFont = keyof typeof fontImports;

export const fonts: Record<AppFont, AppFont> = Object.freeze(
  Object.fromEntries(
    (Object.keys(fontImports) as AppFont[]).map((fontName) => [fontName, fontName]),
  ) as Record<AppFont, AppFont>,
);

const useAppFonts = () => useFonts(fontImports);

export default useAppFonts;
