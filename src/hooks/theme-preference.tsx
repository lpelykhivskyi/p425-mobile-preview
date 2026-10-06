import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { Appearance, useColorScheme as useSystemColorScheme } from 'react-native';

type Scheme = 'light' | 'dark';

type ThemePreference = {
  scheme: Scheme;
  toggle: () => void;
};

const ThemePreferenceContext = createContext<ThemePreference | null>(null);

/** Holds the user's manual light/dark choice. `null` = follow the system. */
export function ThemePreferenceProvider({ children }: { children: React.ReactNode }) {
  const system = useSystemColorScheme() === 'dark' ? 'dark' : 'light';
  const [override, setOverride] = useState<Scheme | null>(null);
  const scheme = override ?? system;

  // Native only: make the OS-level UI (native tab bar, keyboard, alerts) follow the choice.
  useEffect(() => {
    Appearance.setColorScheme?.(override ?? 'unspecified');
  }, [override]);

  const toggle = useCallback(() => setOverride(scheme === 'dark' ? 'light' : 'dark'), [scheme]);
  const value = useMemo(() => ({ scheme, toggle }), [scheme, toggle]);

  return <ThemePreferenceContext value={value}>{children}</ThemePreferenceContext>;
}

export function useThemePreference() {
  const ctx = useContext(ThemePreferenceContext);
  if (!ctx) throw new Error('useThemePreference must be used inside ThemePreferenceProvider');
  return ctx;
}
