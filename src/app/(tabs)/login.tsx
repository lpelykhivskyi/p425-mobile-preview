import { useRouter } from 'expo-router';
import { useState } from 'react';

import { Button } from '@/components/button';
import { Field } from '@/components/field';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Screen>
      <ThemedText type="subtitle">Login</ThemedText>
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
      <Button title="Log in" onPress={() => router.replace('/')} />
      <ThemedText type="linkPrimary" onPress={() => router.replace('/register')}>
        No account? Register
      </ThemedText>
    </Screen>
  );
}
