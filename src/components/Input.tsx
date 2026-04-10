import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
} from 'react-native';
import { colors, spacing, radius, typography } from '../theme';

interface InputProps extends Omit<TextInputProps, 'style'> {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
  icon?: React.ReactNode;
  secureTextEntry?: boolean;
  containerStyle?: ViewStyle;
}

export function Input({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  icon,
  secureTextEntry = false,
  containerStyle,
  ...rest
}: InputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <View style={[styles.container, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}
      <View
        style={[
          styles.inputRow,
          focused && styles.focused,
          error ? styles.errorBorder : undefined,
        ]}
      >
        {icon ? <View style={styles.iconWrap}>{icon}</View> : null}
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.TextSecondary}
          secureTextEntry={secureTextEntry}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={[styles.input, icon ? { paddingLeft: 0 } : undefined]}
          cursorColor={colors.Primary}
          selectionColor={`${colors.Primary}55`}
          {...rest}
        />
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: spacing.lg,
  },
  label: {
    ...typography.label,
    color: colors.TextSecondary,
    marginBottom: spacing.xs,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.Surface2,
    borderWidth: 1,
    borderColor: colors.Border,
    borderRadius: radius.lg,
    paddingHorizontal: spacing.lg,
    minHeight: 52,
  },
  focused: {
    borderColor: colors.Primary,
  },
  errorBorder: {
    borderColor: colors.Error,
  },
  iconWrap: {
    marginRight: spacing.sm,
  },
  input: {
    flex: 1,
    fontFamily: 'DMSans_400Regular',
    fontSize: 16,
    color: colors.TextPrimary,
    paddingVertical: spacing.md,
  },
  error: {
    ...typography.caption,
    color: colors.Error,
    marginTop: spacing.xs,
  },
});
