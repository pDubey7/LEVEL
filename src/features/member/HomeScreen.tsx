import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Screen, StatCard, Card, Badge } from '../../components';
import { colors, spacing, typography } from '../../theme';

export default function HomeScreen() {
  return (
    <Screen title="Home">
      <Text style={[typography.heading3, { color: colors.TextPrimary }]}>
        Welcome back!
      </Text>
      <Text style={[typography.bodySmall, { color: colors.TextSecondary, marginBottom: spacing['2xl'] }]}>
        Your fitness journey continues.
      </Text>

      <View style={styles.statsRow}>
        <StatCard
          value="14"
          label="Days Streak"
          meterPercent={47}
          accentColor={colors.Accent}
        />
        <View style={{ width: spacing.sm }} />
        <StatCard
          value="6"
          label="Visits This Month"
          meterPercent={30}
          accentColor={colors.Primary}
        />
      </View>

      <View style={{ height: spacing.lg }} />

      <Card accentColor={colors.Success}>
        <Badge label="Active Membership" variant="success" />
        <Text style={[typography.bodySmall, { color: colors.TextSecondary, marginTop: spacing.sm }]}>
          Your membership is active. Visit your gym and scan your QR code at the entrance.
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
