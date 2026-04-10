import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../theme';

type BadgeVariant = 'success' | 'warning' | 'error' | 'neutral' | 'primary';

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
}

const variantColors: Record<BadgeVariant, { bg: string; text: string }> = {
  success: { bg: `${colors.Success}22`, text: colors.Success },
  warning: { bg: `${colors.Warning}22`, text: colors.Warning },
  error: { bg: `${colors.Error}22`, text: colors.Error },
  neutral: { bg: colors.Surface2, text: colors.TextSecondary },
  primary: { bg: `${colors.Primary}22`, text: colors.Primary },
};

export function Badge({ label, variant = 'neutral' }: BadgeProps) {
  const { bg, text } = variantColors[variant];

  return (
    <View style={[styles.pill, { backgroundColor: bg }]}>
      <Text style={[styles.label, { color: text }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 6,
    paddingVertical: 3,
    borderRadius: 99,
    alignSelf: 'flex-start',
  },
  label: {
    fontSize: 11,
    fontFamily: 'DMSans_500Medium',
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
