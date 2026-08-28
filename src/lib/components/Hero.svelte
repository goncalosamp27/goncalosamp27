<script lang="ts"> 
    import Header from './layout/Header.svelte';
    import { currentTheme } from '$lib/stores/theme';
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import OceanHero from './themes/ocean/OceanHero.svelte';

    let mounted = false;

    // Parallax
    const MAX_PARALLAX_SCROLL = 1000;
    let scrollY = 0;
    let rafId: number | null = null;
    let pendingScrollY = 0;

    function flushScroll() {
        rafId = null;

        if (Math.abs(pendingScrollY - scrollY) >= 1) {
            scrollY = pendingScrollY;
        }
    }

    function handleScroll() {
        // Once the hero is off-screen, every parallax value is effectively final.
        // Keeping this value bounded prevents reactive updates through the whole page.
        pendingScrollY = Math.min(window.scrollY, MAX_PARALLAX_SCROLL);

        if (rafId !== null) {
            return;
        }

        rafId = requestAnimationFrame(flushScroll);
    }

    onMount(() => {
        mounted = true;

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);

            if (rafId !== null) {
                cancelAnimationFrame(rafId);
            }
        };
    });
</script>

<section
  id="hero"
  class="relative overflow-hidden"
  style="height: 100vh; height: 100svh; background: linear-gradient(var(--sky-bg) 0%, var(--sky-grad) 50%); color: var(--white)"
>

    <Header/>

    {#key $currentTheme}
        {#if mounted}
            <div
            class="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none"
            style={`transform: ${
                $currentTheme === 'day' || $currentTheme === 'night'
                ? `translateY(${Math.min(scrollY, 500)}px)`
                : 'translateY(0px)'
            }; will-change: transform;`}
            >
            <div class="flex flex-col items-center text-center">
                <h1
                class="text-7xl md:text-8xl font-bold title"
                in:fly|global={{ y: -50, duration: 2500 }}
                >
                Gonçalo Sampaio
                </h1>

                <span
                class="mt-4 text-4xl md:text-5xl font-semibold title "
                in:fly|global={{ y: 50, duration: 2500, delay: 500}}
                >
                Software Engineer
                </span>
            </div>
            </div>
        {/if}
    {/key}

    <!-- OCEAN theme -> animated waves -->
    {#if ($currentTheme === 'day' || $currentTheme === 'night')}
        <OceanHero {scrollY} theme={$currentTheme}/>
    {/if}
</section>
