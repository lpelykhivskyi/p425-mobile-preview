import { useRouter } from 'expo-router';
import { useState } from 'react';

import { Button } from '@/components/button';
import { Field } from '@/components/field';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';

export default function RegisterScreen() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen>
      <ThemedText type="subtitle">Register</ThemedText>
      <Field label="Name" value={name} onChangeText={setName} placeholder="Your name" />
      <Field
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="you@example.com"
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <Field
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="••••••••"
        secureTextEntry
      />
      <Button title="Create account" onPress={() => router.replace('/')} />
      <ThemedText type="linkPrimary" onPress={() => router.replace('/login')}>
        Already have an account? Log in
      </ThemedText>
    </Screen>
  );
}
