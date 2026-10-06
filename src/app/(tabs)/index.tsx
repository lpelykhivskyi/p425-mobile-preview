import { useRouter } from 'expo-router';

import { Button } from '@/components/button';
import { Screen } from '@/components/screen';
import { ThemedText } from '@/components/themed-text';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <Screen>
      <ThemedText type="title">Welcome 👋</ThemedText>
      <ThemedText themeColor="textSecondary">
        Example mobile app with four screens: Home, Login, Register and About.
      </ThemedText>
      <Button title="Log in" onPress={() => router.push('/login')} />
      <Button title="Create account" onPress={() => router.push('/register')} />
      <ThemedText type="linkPrimary" onPress={() => router.push('/contact')}>
        Contact us →
      </ThemedText>
    </Screen>
  );
}
