import React from 'react';
import { Text } from 'react-native';
import { Screen, Card, Badge } from '../../components';
import { colors, spacing, typography } from '../../theme';

export default function PaymentsScreen() {
  return (
    <Screen title="Payments">
      <Text style={[typography.heading3, { color: colors.TextPrimary, marginBottom: spacing.lg }]}>
        Payments
      </Text>
      <Card accentColor={colors.Primary}>
        <Badge label="Razorpay + Solana Pay" variant="primary" />
        <Text style={[typography.bodySmall, { color: colors.TextSecondary, marginTop: spacing.sm }]}>
          Payment history, UPI collections, and Solana Pay transactions will be displayed here.
        </Text>
      </Card>
    </Screen>
  );
}
