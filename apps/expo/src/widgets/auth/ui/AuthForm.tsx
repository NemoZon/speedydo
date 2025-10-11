import { SignInForm, SignUpForm } from '@/src/features/auth';
import type { SignInValues } from '@/src/features/auth/ui/SignInForm';
import type { SignUpValues } from '@/src/features/auth/ui/SignUpForm';
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

const AuthForm: React.FC<AuthFormProps> = ({
  initialMode = 'signIn',
  signInTitle,
  signUpTitle,
  onSignIn,
  onSignUp,
  onForgotPassword,
}) => {
  const [mode, setMode] = useState<AuthMode>(initialMode);

  const showSignIn = mode === 'signIn';

  const switchToSignIn = useCallback(() => setMode('signIn'), []);
  const switchToSignUp = useCallback(() => setMode('signUp'), []);

  if (showSignIn) {
    return (
      <SignInForm
        title={signInTitle}
        onSubmit={onSignIn}
        onForgotPassword={onForgotPassword}
        onSwitchToSignUp={switchToSignUp}
      />
    );
  }

  return <SignUpForm title={signUpTitle} onSubmit={onSignUp} onSwitchToSignIn={switchToSignIn} />;
};

export default AuthForm;
