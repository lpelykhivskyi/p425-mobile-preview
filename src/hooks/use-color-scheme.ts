import { useThemePreference } from '@/hooks/theme-preference';

export function useColorScheme() {
  return useThemePreference().scheme;
}
