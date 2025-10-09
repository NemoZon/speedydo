import { createBox, useTheme } from '@shopify/restyle';
import {
  GestureResponderEvent,
  Pressable,
  PressableProps,
  PressableStateCallbackType,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { Theme } from '../../config/theme/theme';
import Text from '../text/Text';

export const ThemedButton = createBox<Theme, PressableProps>(Pressable);

type ButtonVariant = 'default' | 'invalid' | 'success';

interface ButtonProps {
  onPress?: (e: GestureResponderEvent) => void | null;
  text?: string;
  variant?: ButtonVariant;
}

const variantColorMap: Record<
  ButtonVariant,
  {
    base: {
      backgroundColor: keyof Theme['colors'];
      borderColor: keyof Theme['colors'];
    };
    pressed: {
      backgroundColor: keyof Theme['colors'];
      borderColor: keyof Theme['colors'];
    };
  }
> = {
  default: {
    base: {
      backgroundColor: 'primary',
      borderColor: 'black',
    },
    pressed: {
      backgroundColor: 'primary',
      borderColor: 'black30',
    },
  },
  invalid: {
    base: {
      backgroundColor: 'red',
      borderColor: 'redDark',
    },
    pressed: {
      backgroundColor: 'red30',
      borderColor: 'redDark30',
    },
  },
  success: {
    base: {
      backgroundColor: 'greenLight',
      borderColor: 'greenDark',
    },
    pressed: {
      backgroundColor: 'greenLight30',
      borderColor: 'greenDark30',
    },
  },
};

const Button = ({ onPress, text, variant = 'default' }: ButtonProps) => {
  const theme = useTheme<Theme>();
  const colors = variantColorMap[variant];

  const dynamicStyles = ({ pressed }: PressableStateCallbackType): StyleProp<ViewStyle> => ({
    borderColor: pressed
      ? theme.colors[colors.pressed.borderColor]
      : theme.colors[colors.base.borderColor],
    backgroundColor: pressed
      ? theme.colors[colors.pressed.backgroundColor]
      : theme.colors[colors.base.backgroundColor],
  });

  return (
    <ThemedButton
      padding="s"
      borderRadius={10}
      borderBottomWidth={4}
      borderLeftWidth={1}
      borderRightWidth={1}
      style={dynamicStyles}
      alignItems="center"
      onPress={onPress}
    >
      <Text fontWeight="600">{text}</Text>
    </ThemedButton>
  );
};

export default Button;
