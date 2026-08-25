<script lang="ts">
  import Header from '$lib/components/layout/Header.svelte';
  import { currentTheme, type ThemeName } from '$lib/stores/theme';

  const messages: Record<ThemeName, { title: string; description: string }> = {
    day: {
      title: 'You got lost in the middle of the ocean.',
      description: 'The page you are looking for is nowhere on the horizon.'
    },
    night: {
      title: 'You got lost at sea after dark.',
      description: 'The page you are looking for is beyond the moonlit horizon.'
    },
    space: {
      title: 'You drifted too far into space.',
      description: 'The page you are looking for is outside our known orbit.'
    }
  };
</script>

<main class="flex min-h-screen min-h-[100svh] items-center justify-center bg-[var(--background)] px-6 py-16 text-[var(--white)]">
  <Header standalone />

  <section class="w-full max-w-xl text-center">
    <p class="text-sm font-bold uppercase tracking-[0.3em] text-[var(--contrast)]">
      Error 404
    </p>

    <h1 class="mt-6 text-4xl font-bold leading-tight sm:text-6xl">
      {messages[$currentTheme].title}
    </h1>

    <p class="mx-auto mt-5 max-w-md text-base leading-relaxed text-white/75 sm:text-lg">
      {messages[$currentTheme].description}
    </p>

    <a
      class="home-button mt-9 inline-flex rounded-full px-7 py-3.5 text-base font-bold"
      href="/goncalosamp27"
    >
      Back to home
    </a>
  </section>
</main>

<style>
  .home-button {
    color: var(--title);
    background: var(--white);
    transition: background 200ms ease, transform 200ms ease;
  }

  .home-button:hover {
    background: var(--hover);
    transform: translateY(-2px);
  }
</style>
