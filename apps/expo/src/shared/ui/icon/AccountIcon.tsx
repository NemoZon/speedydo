import MaterialDesignIcons from '@react-native-vector-icons/material-design-icons';
import { useTheme } from '@shopify/restyle';
import React from 'react';
import { Theme } from '../../config/theme/theme';
import { IconProps } from './IconType';

const AccountIcon = ({ color = 'onPrimary', size = 20, isOutline = false }: IconProps) => {
  const theme = useTheme<Theme>();
  const iconColor = theme.colors[color];

  return (
    <MaterialDesignIcons
      name={`account-circle${isOutline ? '-outline' : ''}`}
      color={iconColor}
      size={size}
    />
  );
};

export default AccountIcon;
