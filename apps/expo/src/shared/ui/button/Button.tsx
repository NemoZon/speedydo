import { useTheme } from '@shopify/restyle';
import React, { useCallback, useMemo } from 'react';
import {
  FlexAlignType,
  GestureResponderEvent,
  PressableStateCallbackType,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { Theme, ThemeSpacing, ThemeTextVariants } from '../../config/theme/theme';
import Text from '../text/Text';
import { Pressable } from './Pressable';

type Tone = 'default' | 'invalid' | 'success';
type Appearance = 'default' | 'rounded' | 'outlined' | 'text';

interface ButtonProps {
  onPress?: (e: GestureResponderEvent) => void;
  children?: React.ReactNode;
  text?: string;
  tone?: Tone;
  appearance?: Appearance;
  textVariant?: ThemeTextVariants;
  fontWeight?: TextStyle['fontWeight'];
  alignItems?: FlexAlignType;
  marginVertical?: ThemeSpacing;
  disabled?: boolean;
  isLoading?: boolean;
  hitSlop?: number | { top: number; bottom: number; left: number; right: number };
  testID?: string;
}

const variantTokens: Record<
  Tone,
  {
    baseBg: keyof Theme['colors'];
    pressBg: keyof Theme['colors'];
    baseBorder: keyof Theme['colors'];
    pressBorder: keyof Theme['colors'];
    text: keyof Theme['colors'];
  }
> = {
  default: {
    baseBg: 'black',
    pressBg: 'black30',
    baseBorder: 'black',
    pressBorder: 'black30',
    text: 'white',
  },
  invalid: {
    baseBg: 'red',
    pressBg: 'red30',
    baseBorder: 'redDark',
    pressBorder: 'redDark',
    text: 'white',
  },
  success: {
    baseBg: 'greenLight',
    pressBg: 'greenLight30',
    baseBorder: 'greenDark',
    pressBorder: 'greenDark',
    text: 'white',
  },
};

const appearances: Record<
  Appearance,
  {
    bg: boolean;
    underline?: boolean;
    border: { top: number; right: number; bottom: number; left: number };
    padding?: ThemeSpacing;
    radius: number;
  }
> = {
  default: { bg: true, border: { top: 0, right: 1, bottom: 4, left: 1 }, padding: 's', radius: 10 },
  rounded: {
    bg: true,
    border: { top: 0, right: 0, bottom: 0, left: 0 },
    padding: 's',
    radius: 10,
  },
  outlined: {
    bg: false,
    border: { top: 1, right: 1, bottom: 1, left: 1 },
    padding: 's',
    radius: 10,
  },
  text: { bg: false, underline: true, border: { top: 0, right: 0, bottom: 0, left: 0 }, radius: 0 },
};

const Button: React.FC<ButtonProps> = ({
  onPress,
  children,
  text,
  tone = 'default',
  appearance = 'rounded',
  fontWeight = '600',
  textVariant,
  alignItems = 'center',
  marginVertical,
  disabled = false,
  isLoading = false,
  hitSlop,
  testID,
}) => {
  const theme = useTheme<Theme>();
  const tokens = variantTokens[tone];
  const look = appearances[appearance];

  const baseColors = useMemo(() => {
    const bg = look.bg ? theme.colors[tokens.baseBg] : 'transparent';
    const border = theme.colors[tokens.baseBorder];
    const pressedBg = look.bg ? theme.colors[tokens.pressBg] : 'transparent';
    const pressedBorder = theme.colors[tokens.pressBorder];
    return { bg, border, pressedBg, pressedBorder };
  }, [look.bg, theme.colors, tokens]);

  const dynamicStyles = useCallback(
    ({ pressed }: PressableStateCallbackType): StyleProp<ViewStyle> => ({
      backgroundColor: pressed ? baseColors.pressedBg : baseColors.bg,
      borderColor: pressed ? baseColors.pressedBorder : baseColors.border,
      opacity: disabled || isLoading ? 0.6 : 1,
    }),
    [baseColors, disabled, isLoading],
  );

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityState={{ disabled: disabled || isLoading }}
      hitSlop={hitSlop}
      testID={testID}
      padding={look.padding}
      borderRadius={look.radius}
      borderBottomWidth={look.border.bottom}
      borderTopWidth={look.border.top}
      borderLeftWidth={look.border.left}
      borderRightWidth={look.border.right}
      style={dynamicStyles}
      alignItems={alignItems}
      marginVertical={marginVertical}
      onPress={disabled || isLoading ? undefined : onPress}
    >
      {({ pressed }) => (
        <Text
          opacity={pressed ? 0.85 : 1}
          variant={textVariant}
          textDecorationLine={look.underline ? 'underline' : undefined}
          fontWeight={fontWeight}
          color={tokens.text}
        >
          {children ?? text}
        </Text>
      )}
    </Pressable>
  );
};

export default Button;
