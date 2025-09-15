import { writable } from 'svelte/store';

export const themes = {
  day: { // default light mode
    '--sky-bg': '#489EFF',
    '--sky-grad': '#FFC28C',
    '--hover': '#FFDDBF',
    '--bg-one': '#489EFF',
    '--bg-two': '#2F5792',
    '--bg-three': '#1A3656',
  },
  night: { // dark mode
    '--sky-bg': '#061E30',
    '--sky-grad': '#365772',
    '--hover': '#68ADB9',
    '--bg-one': '#3D75A3',
    '--bg-two': '#194467',
    '--bg-three': '#132336'
  }
};

export type ThemeName = keyof typeof themes;
export const currentTheme = writable<ThemeName>('day');