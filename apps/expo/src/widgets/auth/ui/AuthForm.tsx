import { SignInForm, SignUpForm } from '@/src/features/auth';
import type { SignInValues } from '@/src/features/auth/ui/SignInForm';
import type { SignUpValues } from '@/src/features/auth/ui/SignUpForm';
import { useRouter } from 'expo-router';
import React, { useCallback, useState } from 'react';

type AuthMode = 'signIn' | 'signUp';

interface AuthFormProps {
  initialMode?: AuthMode;
  signInTitle?: string;
  signUpTitle?: string;
  onSignIn?: (values: SignInValues) => void;
  onSignUp?: (values: SignUpValues) => void;
  onForgotPassword?: (email: string) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ initialMode = 'signIn' }) => {
  const router = useRouter();
  const [mode, setMode] = useState<AuthMode>(initialMode);

  const showSignIn = mode === 'signIn';

  const switchToSignIn = useCallback(() => setMode('signIn'), []);
  const switchToSignUp = useCallback(() => setMode('signUp'), []);

  if (showSignIn) {
    return (
      <SignInForm
        onSubmit={() => {
          router.replace('/(tabs)');
        }}
        onForgotPassword={() => {}}
        onSwitchToSignUp={switchToSignUp}
      />
    );
  }

  return <SignUpForm onSubmit={() => {}} onSwitchToSignIn={switchToSignIn} />;
};

export default AuthForm;
