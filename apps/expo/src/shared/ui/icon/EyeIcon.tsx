import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useTheme } from '@shopify/restyle';
import React from 'react';
import { Theme, ThemeColors } from '../../config/theme/theme';

type EyeIconProps = {
  color?: ThemeColors;
  size?: number;
};

const EyeIcon = ({ color = 'onPrimary', size = 20 }: EyeIconProps) => {
  const theme = useTheme<Theme>();
  const iconColor = theme.colors[color];

  return <MaterialDesignIcons name="eye-outline" color={iconColor} size={size} />;
};

export default EyeIcon;
