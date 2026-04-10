import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Screen, StatCard, Card, Badge } from '../../components';
import { colors, spacing, typography } from '../../theme';

export default function DashboardScreen() {
  return (
    <Screen title="Dashboard">
      {/* Greeting */}
      <Text style={styles.greeting}>Good morning, Owner</Text>
      <Text style={[typography.body, { color: colors.TextSecondary, marginBottom: spacing['2xl'] }]}>
        Here's what's happening at your gym today.
      </Text>

      {/* Stats row */}
      <View style={styles.statsRow}>
        <StatCard
          value="128"
          label="Total Members"
          subtitle="Active this month"
          meterPercent={72}
          accentColor={colors.Primary}
        />
        <View style={{ width: spacing.sm }} />
        <StatCard
          value="₹84k"
          label="Revenue"
          subtitle="This month"
          meterPercent={58}
          accentColor={colors.Accent}
        />
      </View>

      <View style={{ height: spacing.lg }} />

      {/* Recent activity placeholder */}
      <Card accentColor={colors.Yellow}>
        <View style={styles.cardRow}>
          <Text style={[typography.label, { color: colors.TextPrimary, flex: 1 }]}>
            Recent Activity
          </Text>
          <Badge label="Live" variant="success" />
        </View>
        <Text style={[typography.bodySmall, { color: colors.TextSecondary, marginTop: spacing.sm }]}>
          Activity feed will appear here once members check in.
        </Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  greeting: {
    ...typography.heading2,
    color: colors.TextPrimary,
  },
  statsRow: {
    flexDirection: 'row',
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
