import React from 'react';
import { Text } from 'react-native';
import { Screen, Card } from '../../components';
import { colors, spacing, typography } from '../../theme';
import { useAuthStore } from '../../store/useAuthStore';

export default function ProfileScreen() {
  const { user, gymId } = useAuthStore();

  return (
    <Screen title="Profile">
      <Text style={[typography.heading3, { color: colors.TextPrimary, marginBottom: spacing.lg }]}>
        Owner Profile
      </Text>
      <Card>
        <Text style={[typography.label, { color: colors.TextSecondary }]}>Email</Text>
        <Text style={[typography.body, { color: colors.TextPrimary, marginTop: 2 }]}>
          {user?.email ?? 'Not signed in'}
        </Text>
      </Card>
    </Screen>
  );
}
