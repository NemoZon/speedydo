import { createBox } from '@shopify/restyle';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import { Theme } from '../../config/theme/theme';

export const SafeAreaBox = createBox<Theme, SafeAreaViewProps>(SafeAreaView);
