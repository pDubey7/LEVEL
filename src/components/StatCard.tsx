import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors, spacing, radius, typography } from '../theme';

interface StatCardProps {
  value: string;
  label: string;
  subtitle?: string;
  meterPercent?: number;
  accentColor?: string;
}

export function StatCard({
  value,
  label,
  subtitle,
  meterPercent,
  accentColor = colors.Primary,
}: StatCardProps) {
  const clampedPercent = meterPercent != null
    ? Math.min(100, Math.max(0, meterPercent))
    : undefined;

  return (
    <View style={[styles.card, { borderLeftColor: accentColor }]}>
      <Text style={[styles.value, { color: accentColor }]}>{value}</Text>
      <Text style={styles.label}>{label}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      {clampedPercent != null ? (
        <View style={styles.meterTrack}>
          <View
            style={[
              styles.meterFill,
              {
                width: `${clampedPercent}%`,
                backgroundColor: accentColor,
              },
            ]}
          />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.Surface,
    borderWidth: 1,
    borderColor: colors.Border,
    borderRadius: radius.lg,
    borderLeftWidth: 3,
    padding: spacing.lg,
    flex: 1,
  },
  value: {
    fontFamily: 'Syne_800ExtraBold',
    fontSize: 36,
    lineHeight: 42,
    fontWeight: '800',
    color: colors.TextPrimary,
  },
  label: {
    ...typography.label,
    color: colors.TextSecondary,
    marginTop: spacing.xs,
  },
  subtitle: {
    ...typography.caption,
    color: colors.TextSecondary,
    marginTop: 2,
  },
  meterTrack: {
    marginTop: spacing.sm,
    height: 4,
    backgroundColor: colors.Surface2,
    borderRadius: radius.sm,
    overflow: 'hidden',
  },
  meterFill: {
    height: 4,
    borderRadius: radius.sm,
  },
});
