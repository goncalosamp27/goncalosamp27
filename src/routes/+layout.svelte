<script lang="ts">
  import { currentTheme, themes } from '$lib/stores/theme';
  import '../app.css';
  import { onMount } from 'svelte';

  onMount(() => {
    const applyTheme = (themeName: keyof typeof themes) => {
      const theme = themes[themeName] ?? themes.day;
      
      for (const [key, value] of Object.entries(theme)) {
        document.documentElement.style.setProperty(key, value);
      }
    };

    applyTheme('day');
    currentTheme.subscribe(applyTheme);
  });
</script>
<slot/>
