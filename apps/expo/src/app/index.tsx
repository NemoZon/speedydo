import { Box } from '@/src/shared/ui/box/Box';
import { SafeAreaBox } from '@/src/shared/ui/box/SafeAreaBox';
import TextInput from '@/src/shared/ui/input/TextInput';
import { useState } from 'react';

export default function HomeScreen() {
  const [value, setValue] = useState('');
  return (
    <SafeAreaBox flex={1} paddingHorizontal="l">
      <Box backgroundColor="secondary" flex={1}>
        <TextInput label="test" value={value} onChangeText={(t) => setValue(t)} />
      </Box>
    </SafeAreaBox>
  );
}
