import React from 'react';
import { Text } from 'react-native';
import { Screen, Card, Badge } from '../../components';
import { colors, spacing, typography } from '../../theme';

export default function SpaceScreen() {
  return (
    <Screen title="Space">
      <Text style={[typography.heading3, { color: colors.TextPrimary, marginBottom: spacing.lg }]}>
        Gym Space
      </Text>
      <Card accentColor={colors.Yellow}>
        <Badge label="Coming soon" variant="warning" />
        <Text style={[typography.bodySmall, { color: colors.TextSecondary, marginTop: spacing.sm }]}>
          Equipment tracking, class schedules, and slot booking will be managed here.
        </Text>
      </Card>
    </Screen>
  );
}
