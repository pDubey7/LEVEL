import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Screen, Card, StatCard, Badge } from '../../components';
import { colors, spacing, typography } from '../../theme';

export default function FitnessScreen() {
  return (
    <Screen title="Fitness">
      <Text style={[typography.heading3, { color: colors.TextPrimary, marginBottom: spacing.lg }]}>
        Activity
      </Text>

      <View style={styles.statsRow}>
        <StatCard
          value="4,218"
          label="Steps Today"
          meterPercent={42}
          accentColor={colors.Yellow}
        />
        <View style={{ width: spacing.sm }} />
        <StatCard
          value="312"
          label="Calories"
          meterPercent={31}
          accentColor={colors.Accent}
        />
      </View>

      <View style={{ height: spacing.lg }} />

      <Card accentColor={colors.Primary}>
        <Badge label="Pedometer" variant="primary" />
        <Text style={[typography.bodySmall, { color: colors.TextSecondary, marginTop: spacing.sm }]}>
          Step tracking powered by your device's motion sensor. Grant permission to enable real-time fitness data.
        </Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  statsRow: {
    flexDirection: 'row',
  },
});
