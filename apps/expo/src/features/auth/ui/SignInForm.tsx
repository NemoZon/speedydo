import { Box, Button, Text, TextInput } from '@/src/shared/ui';
import EyeIcon from '@/src/shared/ui/icon/EyeIcon';
import EyeOffIcon from '@/src/shared/ui/icon/EyeOffIcon';
import React, { useState } from 'react';
import { Pressable } from 'react-native';

export interface SignInValues {
  email: string;
  password: string;
}

interface SignInFormProps {
  title?: string;
  onSubmit?: (values: SignInValues) => void;
  onForgotPassword?: (email: string) => void;
  onSwitchToSignUp?: () => void;
}

const SignInForm: React.FC<SignInFormProps> = ({
  title,
  onSubmit,
  onForgotPassword,
  onSwitchToSignUp,
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const handleSubmit = () => onSubmit?.({ email, password });
  const handleForgotPassword = () => onForgotPassword?.(email);

  return (
    <Box backgroundColor="secondary" padding="l" borderRadius={16}>
      <Box marginBottom="m">
        <Text variant="header">{title ?? 'Войдите в свой аккаунт'}</Text>
        <Text variant="body">Введите почту и пароль, чтобы авторизоваться.</Text>
      </Box>

      <Box marginBottom="m">
        <TextInput
          label="Почта"
          value={email}
          onChangeText={setEmail}
          placeholder="email@example.com"
          isInvalid={email.length > 0 && !email.includes('@')}
        />

        <TextInput
          label="Пароль"
          value={password}
          onChangeText={setPassword}
          type={isPasswordVisible ? 'text' : 'password'}
          placeholder="Введите пароль"
          endComponent={
            <Pressable onPress={() => setPasswordVisible((prev) => !prev)}>
              <Text variant="label">
                {isPasswordVisible ? (
                  <EyeOffIcon color="onSecondary50" />
                ) : (
                  <EyeIcon color="onSecondary50" />
                )}
              </Text>
            </Pressable>
          }
        />
      </Box>

      <Box flexDirection="row" justifyContent="flex-end" marginBottom="s">
        <Button
          appearance="text"
          text="Забыли пароль?"
          fontWeight="400"
          onPress={handleForgotPassword}
          textVariant="label"
        />
      </Box>

      <Button appearance="rounded" text="Войти" onPress={handleSubmit} />

      <Button
        appearance="text"
        text="Еще не зарегистрированы? Регистрация"
        onPress={onSwitchToSignUp}
        textVariant="label"
        marginVertical="m"
        fontWeight="400"
        alignItems="flex-start"
      />
    </Box>
  );
};

export default SignInForm;
