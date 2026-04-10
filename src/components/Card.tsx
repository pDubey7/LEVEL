import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { colors, radius, spacing } from '../theme';

interface CardProps {
  children: React.ReactNode;
  accentColor?: string;
  style?: ViewStyle;
}

export function Card({ children, accentColor, style }: CardProps) {
  return (
    <View
      style={[
        styles.card,
        accentColor
          ? { borderLeftWidth: 3, borderLeftColor: accentColor }
          : undefined,
        style,
      ]}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.Surface,
    borderWidth: 1,
    borderColor: colors.Border,
    borderRadius: radius.lg,
    padding: spacing.lg,
    overflow: 'hidden',
  },
});
