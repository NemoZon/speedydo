import { useTheme } from '@shopify/restyle';
import { TextInput as RNTextInput } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { Theme, ThemeColors } from '../../config/theme/theme';
import { Box } from '../box/Box';
import Text from '../text/Text';

interface TextInputProps {
  value: string;
  label: string;
  type?: 'password' | 'text';
  onChangeText?: (text: string) => void;
  isDisabled?: boolean;
  isInvalid?: boolean;
  isReadOnly?: boolean;
  placeholder?: string;
  startComponent?: React.ReactNode;
  endComponent?: React.ReactNode;
}

const AnimatedText = Animated.createAnimatedComponent(Text);

const TextInput = ({
  value,
  label,
  onChangeText,
  type = 'text',
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  placeholder = 'hbh',
  startComponent,
  endComponent,
}: TextInputProps) => {
  const theme = useTheme<Theme>();
  const fontSize = useSharedValue(12);

  const handleFocus = () => {
    fontSize.value = withTiming(14, { duration: 200 });
  };

  const handleBlur = () => {
    fontSize.value = withTiming(12, { duration: 200 });
  };

  const animatedStyle = useAnimatedStyle(() => ({
    fontSize: fontSize.value,
  }));

  // Определяем цвет бордера
  const borderColor: ThemeColors = isInvalid ? 'invalidBorder' : 'onSecondary50';

  let backgroundColor: ThemeColors = 'secondary';
  if (isDisabled) backgroundColor = 'disabledBg';
  else if (isReadOnly) backgroundColor = 'readOnlyBg';
  else if (isInvalid) backgroundColor = 'invalidBg';

  // Цвет текста
  const textColor = isDisabled
    ? theme.colors.disabledText
    : isReadOnly
      ? theme.colors.readOnlyText
      : isInvalid
        ? theme.colors.invalidText
        : theme.colors.onSecondary;

  return (
    <Box>
      <Box height={18} justifyContent="center">
        <AnimatedText color="onSecondary" style={animatedStyle}>
          {label}
        </AnimatedText>
      </Box>

      <Box
        borderRadius={5}
        borderWidth={1}
        borderColor={borderColor}
        backgroundColor={backgroundColor}
        flexDirection="row"
        alignItems="center"
        paddingHorizontal="m"
        height={40}
      >
        {startComponent}
        <RNTextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={type === 'password'}
          editable={!isDisabled && !isReadOnly}
          placeholderTextColor={theme.colors.disabledText}
          style={{
            color: textColor,
            flex: 1,
          }}
          selectTextOnFocus={false}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        {endComponent}
      </Box>
    </Box>
  );
};

export default TextInput;
