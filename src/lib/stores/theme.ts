import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export const themes = {
  day: {
    '--sky-bg': '#489EFF',
    '--sky-grad': '#FFC28C',
    '--hover': '#FFDDBF',
    '--background': '#1A3656',
    '--title': '#1A3656',
    '--contrast': '#89ceb7',
    '--wave': '#489EFF',
    '--wave-two': '#2F5792',
  },

  night: {
    '--sky-bg': '#061E30',
    '--sky-grad': '#365772',
    '--hover': '#b3fff2',
    '--background': '#132336',
    '--title': '#132336',
    '--contrast': '#68ADB9',
    '--wave': '#3D75A3',
    '--wave-two': '#194467',
  },

  space: {
    '--sky-bg': '#3C2A3E',
    '--sky-grad': '#10101b',
    '--hover': '#9eff9a',
    '--background': '#10101b',
    '--title': '#3C2A3E',
    '--contrast': '#be6dc7',
  }
};

export type ThemeName = keyof typeof themes;

const storedTheme: ThemeName =
  browser && localStorage.getItem('theme')
    ? (localStorage.getItem('theme') as ThemeName)
    : 'day';

export const currentTheme = writable<ThemeName>(storedTheme);

if (browser) {
  currentTheme.subscribe((theme) => {
    localStorage.setItem('theme', theme);
  });
}