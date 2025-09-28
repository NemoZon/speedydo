import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';
import { ThemeProvider } from '@shopify/restyle';

import TextInput from './TextInput';
import { theme } from '../../config/theme/theme';

const renderInput = (props: Partial<React.ComponentProps<typeof TextInput>> = {}) => {
  const defaultProps = {
    label: 'Email',
    value: '',
    placeholder: 'Enter email',
    onChangeText: jest.fn(),
  } satisfies React.ComponentProps<typeof TextInput>;

  const mergedProps = { ...defaultProps, ...props };

  return render(
    <ThemeProvider theme={theme}>
      <TextInput {...mergedProps} />
    </ThemeProvider>,
  );
};

describe('TextInput', () => {
  it('renders the provided label and placeholder', () => {
    const { getByText, getByPlaceholderText } = renderInput();

    expect(getByText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Enter email')).toBeTruthy();
  });

  it('calls onChangeText when the value changes', () => {
    const onChangeText = jest.fn();
    const { getByPlaceholderText } = renderInput({ onChangeText });

    fireEvent.changeText(getByPlaceholderText('Enter email'), 'new value');

    expect(onChangeText).toHaveBeenCalledWith('new value');
  });

  it('enables secure text entry for password fields', () => {
    const { getByPlaceholderText } = renderInput({ type: 'password' });
    const input = getByPlaceholderText('Enter email');

    expect(input.props.secureTextEntry).toBe(true);
  });

  it('disables editing when isDisabled is true', () => {
    const { getByPlaceholderText } = renderInput({ isDisabled: true });
    const input = getByPlaceholderText('Enter email');

    expect(input.props.editable).toBe(false);
  });
});
