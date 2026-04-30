<script lang="ts"> 
    import Header from './layout/Header.svelte';
    import { currentTheme } from '$lib/stores/theme';
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';
    import OceanHero from './themes/ocean/OceanHero.svelte';

    let mounted = false;

    // Parallax
    let scrollY = 0;

    function handleScroll() {
        scrollY = window.scrollY;
    }

    onMount(() => {
        mounted = true;

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    });
</script>

<section
  id="hero"
  class="relative h-screen overflow-hidden"
  style="background: linear-gradient(var(--sky-bg) 0%, var(--sky-grad) 50%); color: var(--white)"
>

    <Header/>

    {#key $currentTheme}
        {#if mounted}
            <div
                class="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none"
                style={`transform: ${
                    ($currentTheme === 'day' || $currentTheme === 'night')
                        ? `translateY(${Math.min(scrollY * 1, 500)}px)`
                        : 'translateY(0px)'
                }; will-change: transform;`}
            >
                <h1
                    class="text-7xl md:text-8xl font-bold title text-center"
                    in:fly|global={{ y: -50, duration: 2500 }}
                >
                    Gonçalo Sampaio
                </h1>
            </div>
        {/if}
    {/key}

    <!-- OCEAN theme -> animated waves -->
    {#if ($currentTheme === 'day' || $currentTheme === 'night')}
        <OceanHero {scrollY} theme={$currentTheme}/>
    {/if}
</section>