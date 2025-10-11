import { useTheme } from '@shopify/restyle';
import React, { useEffect, useState } from 'react';
import { TextInput as RNTextInput, StyleSheet, TextStyle } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
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
  autoComplete?: 'email' | 'new-password' | 'off' | 'name' | 'username' | 'password';
}

const AnimatedBox = Animated.createAnimatedComponent(Box);

const LABEL_FLOAT_TOP = 5;
const LABEL_REST_TOP = 15;

const LABEL_FLOAT_LEFT = 0;
const LABEL_REST_LEFT = 15;

const TextInput = ({
  value,
  label,
  onChangeText,
  type = 'text',
  isDisabled = false,
  isInvalid = false,
  isReadOnly = false,
  placeholder = '',
  startComponent,
  endComponent,
  autoComplete,
}: TextInputProps) => {
  const theme = useTheme<Theme>();
  const [isFocused, setIsFocused] = useState(false);
  const labelProgress = useSharedValue(value?.length ? 1 : 0);

  useEffect(() => {
    const shouldFloat = isFocused || Boolean(value.length);
    labelProgress.value = withTiming(shouldFloat ? 1 : 0, { duration: 180 });
  }, [isFocused, value, labelProgress]);

  const labelColor: ThemeColors = isInvalid
    ? 'invalidBorder'
    : isFocused
      ? 'onSecondary'
      : 'onSecondary50';

  const borderColor: ThemeColors = isInvalid
    ? 'invalidBorder'
    : isFocused
      ? 'onSecondary'
      : 'onSecondary50';

  let backgroundColor: ThemeColors = 'secondary';
  if (isDisabled) backgroundColor = 'disabledBg';
  else if (isReadOnly) backgroundColor = 'readOnlyBg';

  const textColor = isDisabled
    ? theme.colors.disabledText
    : isReadOnly
      ? theme.colors.readOnlyText
      : isInvalid
        ? theme.colors.invalidText
        : theme.colors.onSecondary;

  const labelContainerStyle = useAnimatedStyle(() => ({
    top: interpolate(labelProgress.value, [0, 1], [LABEL_REST_TOP, LABEL_FLOAT_TOP]),
    left: interpolate(labelProgress.value, [0, 1], [LABEL_REST_LEFT, LABEL_FLOAT_LEFT]),
  }));

  const handleFocus = () => {
    if (isDisabled || isReadOnly) {
      return;
    }
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const inputTextStyle: TextStyle = {
    color: textColor,
    flex: 1,
    paddingVertical: 0,
  };

  return (
    <Box marginBottom="m">
      <Box position="relative" paddingTop="l">
        <AnimatedBox pointerEvents="none" style={[styles.label, labelContainerStyle]}>
          <Box
            borderRadius={6}
            paddingHorizontal="s"
            backgroundColor={backgroundColor}
            justifyContent="center"
          >
            <Text color={labelColor} fontSize={12}>
              {label}
            </Text>
          </Box>
        </AnimatedBox>

        <Box
          borderRadius={8}
          borderWidth={1}
          borderColor={borderColor}
          backgroundColor={backgroundColor}
          flexDirection="row"
          alignItems="center"
          paddingHorizontal="m"
          height={56}
        >
          {startComponent && <Box marginRight="s">{startComponent}</Box>}

          <RNTextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            secureTextEntry={type === 'password'}
            editable={!isDisabled && !isReadOnly}
            autoComplete={autoComplete}
            placeholderTextColor={theme.colors.disabledText}
            style={inputTextStyle}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />

          {endComponent && <Box marginLeft="s">{endComponent}</Box>}
        </Box>
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  label: {
    zIndex: 1,
    position: 'absolute',
    left: 15,
    right: 0,
    alignItems: 'flex-start',
  },
});

export default TextInput;
