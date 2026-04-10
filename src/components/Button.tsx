import React, { useRef } from 'react';
import {
  Animated,
  Pressable,
  Text,
  ActivityIndicator,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { colors, spacing, radius, typography } from '../theme';

type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'ghost';

interface ButtonProps {
  variant?: ButtonVariant;
  label: string;
  onPress: () => void;
  disabled?: boolean;
  loading?: boolean;
  style?: ViewStyle;
}

const variantStyles: Record<ButtonVariant, { container: ViewStyle; text: TextStyle }> = {
  primary: {
    container: {
      backgroundColor: colors.Primary,
      borderWidth: 0,
      shadowColor: '#000000',
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 1,
      shadowRadius: 0,
      elevation: 4,
    },
    text: { color: '#FFFFFF' },
  },
  secondary: {
    container: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: colors.Border,
      shadowColor: '#000000',
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 1,
      shadowRadius: 0,
      elevation: 4,
    },
    text: { color: colors.TextPrimary },
  },
  accent: {
    container: {
      backgroundColor: colors.Accent,
      borderWidth: 0,
      shadowColor: '#000000',
      shadowOffset: { width: 3, height: 3 },
      shadowOpacity: 1,
      shadowRadius: 0,
      elevation: 4,
    },
    text: { color: '#FFFFFF' },
  },
  ghost: {
    container: {
      backgroundColor: 'transparent',
      borderWidth: 0,
    },
    text: { color: colors.TextPrimary },
  },
};

export function Button({
  variant = 'primary',
  label,
  onPress,
  disabled = false,
  loading = false,
  style,
}: ButtonProps) {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.96,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      useNativeDriver: true,
      speed: 50,
      bounciness: 4,
    }).start();
  };

  const vs = variantStyles[variant];

  return (
    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
      <Pressable
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        disabled={disabled || loading}
        style={[
          styles.base,
          vs.container,
          (disabled || loading) && styles.disabled,
          style,
        ]}
      >
        {loading ? (
          <ActivityIndicator
            color={variant === 'secondary' || variant === 'ghost' ? colors.TextPrimary : '#FFF'}
            size="small"
          />
        ) : (
          <Text style={[styles.label, vs.text]}>{label}</Text>
        )}
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing['2xl'],
    borderRadius: radius.lg,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 52,
  },
  label: {
    ...typography.label,
    fontSize: 16,
    letterSpacing: 0.3,
  } as TextStyle,
  disabled: {
    opacity: 0.45,
  },
});
