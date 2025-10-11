import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useTheme } from '@shopify/restyle';
import React from 'react';
import { Theme, ThemeColors } from '../../config/theme/theme';

type EyeOffIconProps = {
  color?: ThemeColors;
  size?: number;
};

const EyeOffIcon = ({ color = 'onSecondary', size = 20 }: EyeOffIconProps) => {
  const theme = useTheme<Theme>();
  const iconColor = theme.colors[color];

  return <MaterialDesignIcons name="eye-off-outline" color={iconColor} size={size} />;
};

export default EyeOffIcon;
