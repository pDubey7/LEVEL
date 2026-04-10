import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ViewStyle,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, spacing, typography } from '../theme';

interface ScreenProps {
  children: React.ReactNode;
  title?: string;
  backgroundColor?: string;
  scrollable?: boolean;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
}

export function Screen({
  children,
  title,
  backgroundColor = colors.Background,
  scrollable = true,
  style,
  contentStyle,
}: ScreenProps) {
  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }, style]}>
      <StatusBar barStyle="light-content" backgroundColor={backgroundColor} />
      {title ? (
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
      ) : null}
      {scrollable ? (
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={[styles.content, contentStyle]}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {children}
        </ScrollView>
      ) : (
        <View style={[styles.content, contentStyle]}>{children}</View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.Background,
  },
  header: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.Border,
  },
  headerTitle: {
    ...typography.heading3,
    color: colors.TextPrimary,
  },
  scroll: {
    flex: 1,
  },
  content: {
    padding: spacing.lg,
    flexGrow: 1,
  },
});
