<script lang="ts"> 
    import { currentTheme, type ThemeName } from '$lib/stores/theme';
    import { fly, fade, slide } from 'svelte/transition';
    import { onMount } from 'svelte';

    let open = false;
    let showThemes = false;

    onMount(() => { open = true; });
    
    function toggleModeMenu () { showThemes = !showThemes; }
    function switchTo(theme: ThemeName) { 
        currentTheme.set(theme); 
        oceanReady = false;
        setTimeout(() => {oceanReady = true;});
    }

    // OCEAN THEME -> "responsive" wave generator //
        const waveWidth = 132;
        let screenWidth = 0;
        let oceanReady = false;

        onMount(() => {
            const update = () => {
                screenWidth = window.innerWidth;
                numWaves = Math.ceil(screenWidth / waveWidth) + 2;
                setTimeout(() => {
                    oceanReady = true;
                }, 10);
            };

            update();
            window.addEventListener("resize", update);
            return () => window.removeEventListener("resize", update);
        });
        
        $: numWaves = Math.ceil(screenWidth / waveWidth) + 2;
        $: viewBoxWidth = (numWaves + 1) * 132;
</script>

<section id ="hero" class="h-screen flex flex-col overflow-hidden" style="background: linear-gradient(var(--sky-bg) 0%, var(--sky-bg) 40%, var(--sky-grad) 100%); color: var(--white)">
{#if open}
{#key $currentTheme} <!-- rebuilds block when $currentTheme changes -->
<header class="w-full md:px-12 py-8 fixed top-0 left-0 flex items-center justify-between" in:fade={{ duration: 1500 }}>
    <button on:click={() => location.href = '/'} class="w-12 h-12 text-[var(--white)] hover:text-[var(--hover)] transition-colors duration-300 cursor-pointer" aria-label = "logo">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
            <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M31.9646 0L39.674 13.353L54.5671 9.36241L50.5765 24.2554L63.9292 31.9645L50.5765 39.6737L54.5672 54.5671L39.6739 50.5764L31.9647 63.9292L24.2554 50.5763L9.36203 54.567L13.3527 39.6737L0 31.9646L13.3529 24.2553L9.36229 9.36217L24.2554 13.3528L31.9646 0ZM31.8661 50.3147C41.946 50.3147 50.1174 42.1433 50.1174 32.0633C50.1174 21.9833 41.946 13.8119 31.8661 13.8119C21.7861 13.8119 13.6147 21.9833 13.6147 32.0633C13.6147 42.1433 21.7861 50.3147 31.8661 50.3147Z"/>
            <circle cx="32" cy="32" r="14" fill="currentColor"/>
        </svg>
    </button>

    <nav class="flex justify-center space-x-4 md:space-x-10 text-2xl font-regular">
        <a href="#about-me"
            class="min-w-[10ch] text-center rounded-full px-4 py-2 
                    border-2 border-transparent
                    transition-all duration-500
                    hover:border-[var(--hover)] 
                    hover:text-[var(--hover)]
                    hover:bg-[var(--bg-three)]/20">
            About
        </a>
        <a href="#projects"
            class="min-w-[10ch] text-center rounded-full px-4 py-2 
                    border-2 border-transparent
                    transition-all duration-500
                    hover:border-[var(--hover)] 
                    hover:text-[var(--hover)]
                    hover:bg-[var(--bg-three)]/20">
            Projects
        </a>
        <a href="#contact"
            class="min-w-[10ch] text-center rounded-full px-4 py-2 
                    border-2 border-transparent
                    transition-all duration-500
                    hover:border-[var(--hover)] 
                    hover:text-[var(--hover)]
                    hover:bg-[var(--bg-three)]/20">
            Contact
        </a>
    </nav>

    <!-- Theme Menu -->
    <div class="relative">
        <button type="button" class="z-1 relative w-12 h-12 text-[var(--white)] hover:text-[var(--hover)] transition-colors duration-300 cursor-pointer" on:click={toggleModeMenu} aria-label="theme-menu">
            <!-- add more theme svgs here -->
            {#if $currentTheme === 'day'}<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"> <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M31.9646 0L39.674 13.353L54.5671 9.36241L50.5765 24.2554L63.9292 31.9645L50.5765 39.6737L54.5672 54.5671L39.6739 50.5764L31.9647 63.9292L24.2554 50.5763L9.36203 54.567L13.3527 39.6737L0 31.9646L13.3529 24.2553L9.36229 9.36217L24.2554 13.3528L31.9646 0ZM31.8661 50.3147C41.946 50.3147 50.1174 42.1433 50.1174 32.0633C50.1174 21.9833 41.946 13.8119 31.8661 13.8119C21.7861 13.8119 13.6147 21.9833 13.6147 32.0633C13.6147 42.1433 21.7861 50.3147 31.8661 50.3147Z"/><circle cx="32" cy="32" r="14" fill="currentColor" /></svg>
            {/if}
            {#if $currentTheme === 'night'}<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.1554 33.0684C48.4193 42.1233 40.8387 49.2429 31.5945 49.2429C25.1883 49.2427 19.5812 45.8228 16.497 40.7098C21.0899 40.5453 26.5949 39.8222 32.4231 38.5132C38.9124 37.0556 44.7307 35.1157 49.1554 33.0684Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/><path d="M31.5945 14C37.8417 14 43.329 17.2517 46.458 22.1544C46.4001 22.1552 46.3421 22.1545 46.2839 22.1555C46.3522 22.1692 46.4197 22.1838 46.4865 22.1982C47.5351 23.852 48.3158 25.6922 48.7676 27.6582C45.8823 30.3614 39.2054 33.2785 31.1314 35.092C24.6613 36.5453 18.699 36.9729 14.6485 36.4641C14.2096 34.9254 13.9746 33.3005 13.9746 31.6209C13.9747 21.8893 21.8634 14.0003 31.5945 14Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/><path d="M50.5548 24.2676C58.2497 23.9058 63.4519 24.8486 63.9595 27.1085C64.8404 31.0309 51.2458 37.4242 33.5951 41.3884C15.9443 45.3526 0.921425 45.3865 0.0404969 41.4641C-0.414451 39.4384 2.99229 36.7556 8.82375 34.0868C7.19968 35.322 6.38533 36.4972 6.61092 37.5017C7.34503 40.7703 18.8042 40.9801 32.2057 37.9703C45.6072 34.9605 55.8761 29.8707 55.142 26.6021C54.8766 25.4204 53.2089 24.6421 50.5548 24.2676Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/></svg>
            {/if}
        </button>

        {#if showThemes}
            <div class="z-0 absolute left-1/2 -top-[0.88rem] -translate-x-1/2 flex flex-col items-center space-y-8 border-2 border-[var(--hover)] rounded-xl px-3 py-3 bg-[var(--bg-three)]/20"
                in:slide={{ duration: 300 }}
                out:slide={{ duration: 200 }}>
                <button type="button" class="w-12 h-12 text-[var(--hover)] hover:text-[var(--hover)] transition-colors duration-300 cursor-pointer" on:click={toggleModeMenu} aria-label="theme-menu">
                    <!-- add more theme svgs here, class should be invisible tho -->
                    {#if $currentTheme === 'day'}<svg viewBox="0 0 64 64" class="invisible w-full h-full"></svg>{/if} 
                    {#if $currentTheme === 'night'}<svg viewBox="0 0 64 64" class="invisible w-full h-full"></svg>{/if}
                </button>
                
                {#if $currentTheme !== 'day'}
                <button on:click={() => switchTo('day')} aria-label="Day" title="Day" class="w-12 h-12">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full hover:text-[var(--hover)] cursor-pointer"> <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M31.9646 0L39.674 13.353L54.5671 9.36241L50.5765 24.2554L63.9292 31.9645L50.5765 39.6737L54.5672 54.5671L39.6739 50.5764L31.9647 63.9292L24.2554 50.5763L9.36203 54.567L13.3527 39.6737L0 31.9646L13.3529 24.2553L9.36229 9.36217L24.2554 13.3528L31.9646 0ZM31.8661 50.3147C41.946 50.3147 50.1174 42.1433 50.1174 32.0633C50.1174 21.9833 41.946 13.8119 31.8661 13.8119C21.7861 13.8119 13.6147 21.9833 13.6147 32.0633C13.6147 42.1433 21.7861 50.3147 31.8661 50.3147Z"/><circle cx="32" cy="32" r="14" fill="currentColor" /></svg>
                </button>
                {/if}

                {#if $currentTheme !== 'night'}
                <button on:click={() => switchTo('night')} aria-label="Night" title="Night" class="w-12 h-12 hover:text-[var(--hover)] cursor-pointer">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.1554 33.0684C48.4193 42.1233 40.8387 49.2429 31.5945 49.2429C25.1883 49.2427 19.5812 45.8228 16.497 40.7098C21.0899 40.5453 26.5949 39.8222 32.4231 38.5132C38.9124 37.0556 44.7307 35.1157 49.1554 33.0684Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/><path d="M31.5945 14C37.8417 14 43.329 17.2517 46.458 22.1544C46.4001 22.1552 46.3421 22.1545 46.2839 22.1555C46.3522 22.1692 46.4197 22.1838 46.4865 22.1982C47.5351 23.852 48.3158 25.6922 48.7676 27.6582C45.8823 30.3614 39.2054 33.2785 31.1314 35.092C24.6613 36.5453 18.699 36.9729 14.6485 36.4641C14.2096 34.9254 13.9746 33.3005 13.9746 31.6209C13.9747 21.8893 21.8634 14.0003 31.5945 14Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/><path d="M50.5548 24.2676C58.2497 23.9058 63.4519 24.8486 63.9595 27.1085C64.8404 31.0309 51.2458 37.4242 33.5951 41.3884C15.9443 45.3526 0.921425 45.3865 0.0404969 41.4641C-0.414451 39.4384 2.99229 36.7556 8.82375 34.0868C7.19968 35.322 6.38533 36.4972 6.61092 37.5017C7.34503 40.7703 18.8042 40.9801 32.2057 37.9703C45.6072 34.9605 55.8761 29.8707 55.142 26.6021C54.8766 25.4204 53.2089 24.6421 50.5548 24.2676Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/></svg>
                </button>
                {/if}
            </div>
        {/if}
    </div>
</header>

<div class="flex-1 flex items-center justify-center">
    <h1 class="text-8xl mt-32 font-bold title text-center " in:fly={{ y: -50, duration: 2500}}>
        Gonçalo's World
    </h1>
</div>


<!-- OCEAN theme -> animated waves -->
    {#if ($currentTheme === 'day' || $currentTheme === 'night') && oceanReady}
        <div class="relative h-[200px] aspect-[1980/160]">
            <div in:fly={{ y: 500, duration: 500, delay: 800 }}>
                <div class="absolute top-0 h-full animate-wave-horizontal-right z-0 left-1/2 -translate-x-1/2">
                    <svg class="h-[191px] -ml-[132px]  text-[var(--bg-one)] animate-wave-vertical-up" viewBox={`0 0 ${viewBoxWidth} 191`} preserveAspectRatio="none">
                    {#each Array(numWaves) as _, i} <path stroke="currentColor" stroke-width="3" vector-effect="non-scaling-stroke" d={`M${i * 132 + 132} 334.357H${i * 132}V0C${i * 132 + 13.0986} 15.278 ${i * 132 + 37.7486} 25.5732 ${i * 132 + 66} 25.5732C${i * 132 + 94.2514} 25.5732 ${i * 132 + 118.901} 15.278 ${i * 132 + 132} 0V334.357Z`} fill="currentColor"
                    /> {/each}
                    </svg>
                </div>
            </div>

            <div in:fly={{ y: 500, duration: 500, delay: 400 }}>
                <div class="absolute top-[40px] h-full animate-wave-horizontal-left z-10 left-1/2 -translate-x-1/2">
                    <svg class="-mr-[132px] h-[191px] text-[var(--bg-two)] animate-wave-vertical-down" viewBox={`0 0 ${viewBoxWidth} 191`} preserveAspectRatio="none">
                    {#each Array(numWaves + 1) as _, i} <path stroke="currentColor" stroke-width="3" vector-effect="non-scaling-stroke" d={`M${i * 132 + 66} 334.357H${i * 132 - 66}V0 C${i * 132 - 66 + 13.0986} 15.278 ${i * 132 - 66 + 37.7486} 25.5732 ${i * 132 - 66 + 66} 25.5732 C${i * 132 - 66 + 94.2514} 25.5732 ${i * 132 - 66 + 118.901} 15.278 ${i * 132 - 66 + 132} 0 V334.357Z`} fill="currentColor"/> {/each}
                    </svg>
                </div>
            </div>

            <div in:fly={{ y: 500, duration: 500, delay: 0 }}>
                <div class="absolute top-[120px] h-full animate-wave-horizontal-right z-20 left-1/2 -translate-x-1/2">
                    <svg class="-ml-[132px] h-[191px] text-[var(--bg-three)] animate-wave-vertical-up" viewBox={`0 0 ${viewBoxWidth} 191`} preserveAspectRatio="none">
                    {#each Array(numWaves) as _, i} <path stroke="currentColor" stroke-width="3" vector-effect="non-scaling-stroke" d={`M${i * 132 + 132} 334.357H${i * 132}V0C${i * 132 + 13.0986} 15.278 ${i * 132 + 37.7486} 25.5732 ${i * 132 + 66} 25.5732C${i * 132 + 94.2514} 25.5732 ${i * 132 + 118.901} 15.278 ${i * 132 + 132} 0V334.357Z`} fill="currentColor"/> {/each}
                    </svg>
                </div>
            </div>
        </div>
    {/if}
{/key}
{/if}
</section>

<style>
  @keyframes wave-horizontal-right {0% {transform: translateX(0);} 100% {transform: translateX(132px);}}
  @keyframes wave-horizontal-left {0% {transform: translateX(0);} 100% {transform: translateX(-132px);}}
  @keyframes wave-vertical-up {0%, 100% {transform: translateY(0);} 50% {transform: translateY(-30px);}}
  @keyframes wave-vertical-down {0%, 100% {transform: translateY(0);} 50% {transform: translateY(10px);}}
  .animate-wave-horizontal-right {animation: wave-horizontal-right 3s linear infinite;}
  .animate-wave-horizontal-left {animation: wave-horizontal-left 3s linear infinite;}
  .animate-wave-vertical-up {animation: wave-vertical-up 3s ease-in-out infinite;}
  .animate-wave-vertical-down {animation: wave-vertical-down 3s ease-in-out infinite;}
</style>