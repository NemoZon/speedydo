import Text from '../text/Text';
import { Pressable, PressableProps } from 'react-native';
import { createBox } from '@shopify/restyle';
import { Theme } from '../../config/theme/theme';

export const ThemedButton = createBox<Theme, PressableProps>(Pressable);

const Button = () => {
  return (
    <ThemedButton
      padding="s"
      borderRadius={10}
      borderBottomWidth={4}
      borderLeftWidth={1}
      borderRightWidth={1}
      style={({ pressed }) => ({
        borderColor: pressed ? '#005f0689' : '#005f06',
      })}
      alignItems="center"
      onPress={() => console.log('hello')}
    >
      <Text fontWeight="600">Hello</Text>
    </ThemedButton>
  );
};

export default Button;
