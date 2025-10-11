import { Box, SafeAreaBox } from '../shared/ui';
import { AuthForm } from '../widgets/auth';

export default function HomeScreen() {
  return (
    <SafeAreaBox flex={1} backgroundColor="primary" paddingHorizontal="l">
      <Box flex={1} justifyContent="center">
        <AuthForm />
      </Box>
    </SafeAreaBox>
  );
}
