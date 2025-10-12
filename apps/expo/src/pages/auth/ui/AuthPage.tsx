import { Box, SafeAreaBox } from '@/src/shared/ui';
import { AuthForm } from '@/src/widgets/auth';
import React from 'react';

const AuthPage = () => {
  return (
    <SafeAreaBox flex={1} backgroundColor="primary" paddingHorizontal="l">
      <Box flex={1} justifyContent="center">
        <AuthForm />
      </Box>
    </SafeAreaBox>
  );
};

export default AuthPage;
