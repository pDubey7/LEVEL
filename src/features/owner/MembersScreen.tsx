import React from 'react';
import { Text } from 'react-native';
import { Screen, Card, Badge } from '../../components';
import { colors, spacing, typography } from '../../theme';

export default function MembersScreen() {
  return (
    <Screen title="Members">
      <Text style={[typography.heading3, { color: colors.TextPrimary, marginBottom: spacing.lg }]}>
        All Members
      </Text>
      <Card>
        <Badge label="Coming soon" variant="primary" />
        <Text style={[typography.bodySmall, { color: colors.TextSecondary, marginTop: spacing.sm }]}>
          Member list with QR check-in, plan status, and billing will be available here.
        </Text>
      </Card>
    </Screen>
  );
}
