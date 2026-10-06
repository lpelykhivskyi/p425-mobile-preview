import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme];

  return (
    <NativeTabs
      backgroundColor={colors.background}
      indicatorColor={colors.backgroundElement}
      labelStyle={{ selected: { color: colors.text } }}>
      <NativeTabs.Trigger name="index">
        <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="house.fill" md="home" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="login">
        <NativeTabs.Trigger.Label>Login</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="person.fill" md="login" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="register">
        <NativeTabs.Trigger.Label>Register</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="person.badge.plus" md="person_add" />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="about">
        <NativeTabs.Trigger.Label>About</NativeTabs.Trigger.Label>
        <NativeTabs.Trigger.Icon sf="info.circle.fill" md="info" />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
