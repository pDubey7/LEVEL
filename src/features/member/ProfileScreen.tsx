import React from 'react';
import { Text } from 'react-native';
import { Screen, Card, Badge } from '../../components';
import { colors, spacing, typography } from '../../theme';
import { useAuthStore } from '../../store/useAuthStore';

export default function ProfileScreen() {
  const { user } = useAuthStore();

  return (
    <Screen title="Profile">
      <Text style={[typography.heading3, { color: colors.TextPrimary, marginBottom: spacing.lg }]}>
        My Profile
      </Text>
      <Card accentColor={colors.Accent}>
        <Badge label="Member" variant="primary" />
        <Text style={[typography.label, { color: colors.TextSecondary, marginTop: spacing.md }]}>
          Email
        </Text>
        <Text style={[typography.body, { color: colors.TextPrimary, marginTop: 2 }]}>
          {user?.email ?? 'Not signed in'}
        </Text>
      </Card>
    </Screen>
  );
}
