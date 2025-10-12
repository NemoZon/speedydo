import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useTheme } from '@shopify/restyle';
import React from 'react';
import { Theme } from '../../config/theme/theme';
import { IconProps } from './IconType';

const HeartIcon = ({ color = 'onPrimary', size = 20 }: IconProps) => {
  const theme = useTheme<Theme>();
  const iconColor = theme.colors[color];

  return <MaterialDesignIcons name={'heart'} color={iconColor} size={size} />;
};

export default HeartIcon;
