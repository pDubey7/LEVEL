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
        <Badge label="Classes & Slots" variant="warning" />
        <Text style={[typography.bodySmall, { color: colors.TextSecondary, marginTop: spacing.sm }]}>
          Book gym slots, view class schedules, and see live equipment availability here.
        </Text>
      </Card>
    </Screen>
  );
}
