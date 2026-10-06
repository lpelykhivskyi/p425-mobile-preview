import { Linking, Pressable, StyleSheet, View } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';

import { Button } from '@/components/button';
import { Field } from '@/components/field';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

const CONTACTS = [
  ['✉️', 'Email', 'hello@example.com', 'mailto:hello@example.com'],
  ['📞', 'Phone', '+380 00 000 0000', 'tel:+380000000000'],
  ['📍', 'Address', 'Kyiv, Ukraine', undefined],
] as const;

const TOPICS = ['Question', 'Feedback', 'Bug'] as const;

export default function ContactScreen() {
  const router = useRouter();
  const [topic, setTopic] = useState<(typeof TOPICS)[number]>('Question');
  const [message, setMessage] = useState('');

  return (
    <Screen tabBar={false}>
      <ThemedText type="subtitle">Contact us</ThemedText>
      <ThemedText themeColor="textSecondary">
        Pick a way to reach us or send a message below.
      </ThemedText>

      {/* List of rows inside one card, with separators */}
      <ThemedView type="backgroundElement" style={styles.card}>
        {CONTACTS.map(([icon, label, value, url], i) => (
          <Pressable
            key={label}
            disabled={!url}
            onPress={() => url && Linking.openURL(url)}
            style={({ pressed }) => [
              styles.contactRow,
              i > 0 && styles.separator,
              pressed && styles.pressed,
            ]}>
            <ThemedText style={styles.icon}>{icon}</ThemedText>
            <View style={styles.contactText}>
              <ThemedText type="small" themeColor="textSecondary">
                {label}
              </ThemedText>
              <ThemedText type="smallBold">{value}</ThemedText>
            </View>
          </Pressable>
        ))}
      </ThemedView>

      {/* Chips: selected state changes the style */}
      <ThemedText type="smallBold">Topic</ThemedText>
      <View style={styles.chips}>
        {TOPICS.map((t) => {
          const selected = t === topic;
          return (
            <Pressable key={t} onPress={() => setTopic(t)}>
              <ThemedView
                type={selected ? 'backgroundSelected' : 'backgroundElement'}
                style={[styles.chip, selected && styles.chipSelected]}>
                <ThemedText type="small">{t}</ThemedText>
              </ThemedView>
            </Pressable>
          );
        })}
      </View>

      <Field
        label="Message"
        value={message}
        onChangeText={setMessage}
        placeholder="Write something..."
        multiline
        style={styles.multiline}
      />
      <Button title="Send" onPress={() => router.back()} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: Spacing.three,
    overflow: 'hidden',
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.three,
    padding: Spacing.three,
  },
  separator: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#8883',
  },
  pressed: { opacity: 0.6 },
  icon: { fontSize: 24, lineHeight: 30 },
  contactText: { flex: 1 },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.two,
  },
  chip: {
    paddingVertical: Spacing.two,
    paddingHorizontal: Spacing.three,
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  chipSelected: { borderColor: '#208AEF' },
  multiline: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
});
