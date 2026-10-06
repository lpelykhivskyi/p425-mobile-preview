import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ThemeToggle } from '@/components/theme-toggle';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing, WebTabBarHeight } from '@/constants/theme';

export function Screen({
  children,
  tabBar = true,
}: {
  children: React.ReactNode;
  /** false for screens outside the tab bar (they have their own header) */
  tabBar?: boolean;
}) {
  const insets = useSafeAreaInsets();

  return (
    <ThemedView style={styles.root}>
      {/* native tab bar can't hold a button, so the toggle floats top-right */}
      {tabBar && Platform.OS !== 'web' && (
        <View style={[styles.toggle, { top: insets.top + Spacing.two }]}>
          <ThemeToggle />
        </View>
      )}
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={[
          styles.content,
          {
            // web tab bar is absolutely positioned at the top, so reserve its height
            paddingTop: !tabBar
              ? Spacing.four
              : Platform.OS === 'web'
                ? WebTabBarHeight
                : insets.top + Spacing.four,
            paddingBottom: (tabBar ? BottomTabInset : 0) + Spacing.six,
          },
        ]}>
        {children}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  toggle: { position: 'absolute', right: Spacing.three, zIndex: 1 },
  content: {
    width: '100%',
    maxWidth: MaxContentWidth,
    alignSelf: 'center',
    paddingHorizontal: Spacing.four,
    gap: Spacing.three,
  },
});
