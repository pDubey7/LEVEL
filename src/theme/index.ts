import { TextStyle } from 'react-native';

export const colors = {
  Primary: '#7900BF',
  Accent: '#FF4FB9',
  Yellow: '#FFE600',
  Background: '#0A0A0A',
  Surface: '#141414',
  Surface2: '#1E1E1E',
  Border: '#2A2A2A',
  TextPrimary: '#F0F0F0',
  TextSecondary: '#888888',
  Success: '#22C55E',
  Warning: '#F59E0B',
  Error: '#EF4444',
} as const;

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 32,
  '4xl': 48,
  '5xl': 64,
} as const;

export const radius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  '2xl': 24,
  '3xl': 32,
} as const;

export const typography: Record<string, TextStyle> = {
  heading1: {
    fontFamily: 'Syne_800ExtraBold',
    fontSize: 32,
    fontWeight: '800',
    lineHeight: 40,
  },
  heading2: {
    fontFamily: 'Syne_700Bold',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 30,
  },
  heading3: {
    fontFamily: 'Syne_700Bold',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 26,
  },
  body: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
  },
  bodySmall: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  label: {
    fontFamily: 'DMSans_500Medium',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  caption: {
    fontFamily: 'DMSans_400Regular',
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16,
  },
};

export const theme = {
  colors,
  spacing,
  radius,
  typography,
} as const;

export type Theme = typeof theme;
export type Colors = typeof colors;
export type Spacing = typeof spacing;
export type Radius = typeof radius;
