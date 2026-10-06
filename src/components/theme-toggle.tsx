import { Pressable, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { useThemePreference } from '@/hooks/theme-preference';

export function ThemeToggle() {
  const { scheme, toggle } = useThemePreference();

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={scheme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      onPress={toggle}
      style={({ pressed }) => pressed && styles.pressed}>
      <ThemedView type="backgroundSelected" style={styles.button}>
        <ThemedText type="small">{scheme === 'dark' ? '☀️' : '🌙'}</ThemedText>
      </ThemedView>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: Spacing.one,
    paddingHorizontal: Spacing.two,
    borderRadius: Spacing.three,
  },
  pressed: { opacity: 0.7 },
});
