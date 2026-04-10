import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import { Button } from '../../components';
import { colors, spacing, typography } from '../../theme';

const { height } = Dimensions.get('window');

export default function AuthScreen() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />
      <View style={styles.container}>
        {/* Top spacer */}
        <View style={{ flex: 1 }} />

        {/* Wordmark */}
        <View style={styles.wordmarkWrap}>
          <Text style={styles.wordmarkLevel}>LEVEL</Text>
          <Text style={styles.wordmarkLabs}>
            LABS
            <Text style={styles.wordmarkDot}>.</Text>
          </Text>
          <Text style={styles.tagline}>Your gym. Unlocked.</Text>
        </View>

        {/* Bottom section */}
        <View style={styles.bottom}>
          <Button
            variant="primary"
            label="Get Started"
            onPress={() => {
              // TODO: navigate to onboarding / login
            }}
          />
          <Text style={styles.hint}>
            Gym management for India — built for owners &amp; members
          </Text>
        </View>

        <View style={{ height: spacing['2xl'] }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.Background,
  },
  container: {
    flex: 1,
    paddingHorizontal: spacing['2xl'],
    alignItems: 'center',
  },
  wordmarkWrap: {
    alignItems: 'center',
  },
  wordmarkLevel: {
    fontFamily: 'Syne_700Bold',
    fontSize: 52,
    fontWeight: '700',
    color: colors.TextPrimary,
    letterSpacing: 8,
  },
  wordmarkLabs: {
    fontFamily: 'Syne_800ExtraBold',
    fontSize: 52,
    fontWeight: '800',
    color: colors.Primary,
    letterSpacing: 8,
    lineHeight: 58,
  },
  wordmarkDot: {
    color: colors.Accent,
  },
  tagline: {
    ...typography.body,
    color: colors.TextSecondary,
    marginTop: spacing.lg,
    letterSpacing: 0.5,
  },
  bottom: {
    width: '100%',
    marginTop: height * 0.12,
    gap: spacing.lg,
    alignItems: 'center',
  },
  hint: {
    ...typography.caption,
    color: colors.TextSecondary,
    textAlign: 'center',
    paddingHorizontal: spacing.xl,
  },
});
