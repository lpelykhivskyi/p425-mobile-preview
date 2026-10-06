import { StyleSheet, View } from 'react-native';

import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

const STACK = [
  ['Expo SDK 57', 'Toolchain and native modules'],
  ['React Native', 'UI components rendered natively'],
  ['TypeScript', 'Typed props and routes'],
  ['Expo Router', 'File-based navigation'],
] as const;

const STATS = [
  ['4', 'Tabs'],
  ['1', 'Stack screen'],
  ['100%', 'TypeScript'],
] as const;

export default function AboutScreen() {
  return (
    <Screen>
      {/* 1. Text styles: ThemedText `type` picks a preset */}
      <ThemedText type="subtitle">About</ThemedText>
      <ThemedText themeColor="textSecondary">
        Demo app for students, built with Expo and Expo Router. Every block below shows one styling
        idea.
      </ThemedText>

      {/* 2. Row layout: flexDirection + flex: 1 shares width equally */}
      <View style={styles.row}>
        {STATS.map(([value, label]) => (
          <ThemedView key={label} type="backgroundElement" style={styles.stat}>
            <ThemedText type="subtitle" style={styles.statValue}>
              {value}
            </ThemedText>
            <ThemedText type="small" themeColor="textSecondary">
              {label}
            </ThemedText>
          </ThemedView>
        ))}
      </View>

      {/* 3. Card: padding, borderRadius, gap between children */}
      <ThemedView type="backgroundElement" style={styles.card}>
        <ThemedText type="smallBold">Tech stack</ThemedText>
        {STACK.map(([name, description]) => (
          <View key={name} style={styles.stackItem}>
            <View style={styles.dot} />
            <View style={styles.stackText}>
              <ThemedText type="smallBold">{name}</ThemedText>
              <ThemedText type="small" themeColor="textSecondary">
                {description}
              </ThemedText>
            </View>
          </View>
        ))}
      </ThemedView>

      {/* 4. Border + accent color: a "callout" block */}
      <ThemedView style={styles.callout}>
        <ThemedText type="smallBold">💡 Tip</ThemedText>
        <ThemedText type="small">
          One file in <ThemedText type="code">src/app</ThemedText> = one screen.
        </ThemedText>
      </ThemedView>

      {/* 5. Shadow: iOS uses shadow*, Android uses elevation */}
      <ThemedView style={styles.shadowCard}>
        <ThemedText type="smallBold">Shadow card</ThemedText>
        <ThemedText type="small" themeColor="textSecondary">
          Same card with a shadow instead of a background tint.
        </ThemedText>
      </ThemedView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: Spacing.two,
  },
  stat: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: Spacing.three,
    borderRadius: Spacing.three,
  },
  statValue: {
    fontSize: 28,
    lineHeight: 36,
  },
  card: {
    padding: Spacing.three,
    borderRadius: Spacing.three,
    gap: Spacing.three,
  },
  stackItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.two,
  },
  stackText: { flex: 1 },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#208AEF',
  },
  callout: {
    padding: Spacing.three,
    borderRadius: Spacing.three,
    borderLeftWidth: 4,
    borderLeftColor: '#208AEF',
    gap: Spacing.one,
  },
  shadowCard: {
    padding: Spacing.three,
    borderRadius: Spacing.three,
    gap: Spacing.one,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
});
