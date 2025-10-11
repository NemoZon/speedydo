import { createBox } from '@shopify/restyle';
import { PressableProps, Pressable as RNPressable } from 'react-native';
import { Theme } from '../../config/theme/theme';
export const Pressable = createBox<Theme, PressableProps>(RNPressable);
