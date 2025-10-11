import { Box, Button, EyeIcon, EyeOffIcon, Text, TextInput } from '@/src/shared/ui';
import React, { useMemo, useState } from 'react';
import { Pressable } from 'react-native';

export interface SignUpValues {
  email: string;
  password: string;
  confirmPassword: string;
}

interface SignUpFormProps {
  title?: string;
  onSubmit?: (values: SignUpValues) => void;
  onSwitchToSignIn?: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ title, onSubmit, onSwitchToSignIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isConfirmVisible, setConfirmVisible] = useState(false);

  const passwordsMismatch = useMemo(
    () => confirmPassword.length > 0 && password !== confirmPassword,
    [password, confirmPassword],
  );

  const handleSubmit = () => onSubmit?.({ email, password, confirmPassword });

  return (
    <Box backgroundColor="secondary" padding="l" borderRadius={16}>
      <Box marginBottom="m">
        <Text variant="header">{title ?? 'Создайте аккаунт'}</Text>
        <Text variant="body">Введите почту и придумайте надежный пароль для регистрации.</Text>
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
              <Text variant="label">{isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}</Text>
            </Pressable>
          }
        />

        <TextInput
          label="Подтверждение пароля"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          type={isConfirmVisible ? 'text' : 'password'}
          placeholder="Повторите пароль"
          isInvalid={passwordsMismatch}
          endComponent={
            <Pressable onPress={() => setConfirmVisible((prev) => !prev)}>
              <Text variant="label">{isConfirmVisible ? <EyeOffIcon /> : <EyeIcon />}</Text>
            </Pressable>
          }
        />
      </Box>

      <Button
        appearance="rounded"
        text="Зарегистрироваться"
        onPress={handleSubmit}
        tone={passwordsMismatch ? 'invalid' : 'default'}
      />

      <Button
        appearance="text"
        text="Уже есть аккаунт? Войти"
        onPress={onSwitchToSignIn}
        textVariant="label"
        fontWeight="400"
        marginVertical="m"
        alignItems="flex-start"
      />
    </Box>
  );
};

export default SignUpForm;
