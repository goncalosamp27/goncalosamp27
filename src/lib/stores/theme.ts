import { writable } from 'svelte/store';

export const themes = {
  day: {
    '--sky-bg': '#489EFF',
    '--sky-grad': '#FFC28C',
    '--hover': '#FFDDBF',
    '--bg-one': '#4397F5',
    '--bg-two': '#2F5792',
    '--bg-three': '#1A3656',
  },
  night: { // for testing
    '--sky-bg': '#FF6EC7',
    '--sky-grad': '#FFD93D',
    '--hover': '#FF9CEE',
    '--bg-one': '#FFB3BA',
    '--bg-two': '#FFDAC1',
    '--bg-three': '#E2F0CB'
  }
};

export type ThemeName = keyof typeof themes;
export const currentTheme = writable<ThemeName>('day');