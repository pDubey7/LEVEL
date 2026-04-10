import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Screen, Card, Badge } from '../../components';
import { colors, spacing, typography } from '../../theme';

export default function MyQRScreen() {
  return (
    <Screen title="My QR">
      <Text style={[typography.heading3, { color: colors.TextPrimary, marginBottom: spacing.lg }]}>
        Check-in QR
      </Text>

      {/* QR placeholder */}
      <View style={styles.qrPlaceholder}>
        <View style={styles.qrBox}>
          <Text style={styles.qrText}>QR</Text>
        </View>
        <Badge label="Tap to refresh" variant="primary" />
      </View>

      <Card style={{ marginTop: spacing.lg }}>
        <Text style={[typography.bodySmall, { color: colors.TextSecondary }]}>
          Show this QR code to your gym trainer to check in. The code refreshes every 30 seconds for security.
        </Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  qrPlaceholder: {
    alignItems: 'center',
    gap: spacing.lg,
  },
  qrBox: {
    width: 200,
    height: 200,
    backgroundColor: colors.Surface2,
    borderWidth: 1,
    borderColor: colors.Border,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrText: {
    fontFamily: 'Syne_700Bold',
    fontSize: 32,
    color: colors.TextSecondary,
  },
});
