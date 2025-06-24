<script lang="ts"> 
    import { currentTheme, type ThemeName } from '$lib/stores/theme';
    import { fly, fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    let open = false;
    let showThemes = false;

    onMount(() => { open = true; });
    $: currentTheme.subscribe(value => $currentTheme = value);
    function toggleModeMenu () { showThemes = !showThemes; }
    function switchTo(theme: ThemeName) { currentTheme.set(theme); }

</script>

<section 
    id ="hero"
    class="min-h-screen flex flex-col"
    style="background: linear-gradient(var(--sky-bg) 0%, var(--sky-bg) 40%, var(--sky-grad) 100%); color: var(--white)"
>

{#if open}
<header class="w-full px-15 py-10 relative flex items-center justify-between" in:fade={{ duration: 1500 }}>
    <button on:click={() => location.href = '/'} class="w-12 h-12 text-[var(--white)] hover:text-[var(--hover)] transition-colors duration-300 cursor-pointer" aria-label = "logo">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
            <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M31.9646 0L39.674 13.353L54.5671 9.36241L50.5765 24.2554L63.9292 31.9645L50.5765 39.6737L54.5672 54.5671L39.6739 50.5764L31.9647 63.9292L24.2554 50.5763L9.36203 54.567L13.3527 39.6737L0 31.9646L13.3529 24.2553L9.36229 9.36217L24.2554 13.3528L31.9646 0ZM31.8661 50.3147C41.946 50.3147 50.1174 42.1433 50.1174 32.0633C50.1174 21.9833 41.946 13.8119 31.8661 13.8119C21.7861 13.8119 13.6147 21.9833 13.6147 32.0633C13.6147 42.1433 21.7861 50.3147 31.8661 50.3147Z"/>
            <circle cx="32" cy="32" r="14" fill="currentColor"/>
        </svg>
    </button>

    <nav class="flex justify-center space-x-35 text-2xl font-regular">
        <a href="#about-me"
            class="min-w-[10ch] text-center rounded-full px-4 py-2 
                    border-2 border-transparent
                    transition-all duration-500
                    hover:border-[var(--hover)] 
                    hover:text-[var(--hover)]">
            About Me
        </a>
        <a href="#projects"
            class="min-w-[10ch] text-center rounded-full px-4 py-2 
                    border-2 border-transparent
                    transition-all duration-500
                    hover:border-[var(--hover)] 
                    hover:text-[var(--hover)]">
            Projects
        </a>
        <a href="#contact"
            class="min-w-[10ch] text-center rounded-full px-4 py-2 
                    border-2 border-transparent
                    transition-all duration-500
                    hover:border-[var(--hover)] 
                    hover:text-[var(--hover)]">
            Contact
        </a>
    </nav>

    <!-- Theme Menu -->
    <div class="relative">
        <button type="button" class="w-12 h-12 text-[var(--white)] hover:text-[var(--hover)] transition-colors duration-300 cursor-pointer" on:click={toggleModeMenu} aria-label="theme-menu">
             {#if $currentTheme === 'ocean'}<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"> <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M31.9646 0L39.674 13.353L54.5671 9.36241L50.5765 24.2554L63.9292 31.9645L50.5765 39.6737L54.5672 54.5671L39.6739 50.5764L31.9647 63.9292L24.2554 50.5763L9.36203 54.567L13.3527 39.6737L0 31.9646L13.3529 24.2553L9.36229 9.36217L24.2554 13.3528L31.9646 0ZM31.8661 50.3147C41.946 50.3147 50.1174 42.1433 50.1174 32.0633C50.1174 21.9833 41.946 13.8119 31.8661 13.8119C21.7861 13.8119 13.6147 21.9833 13.6147 32.0633C13.6147 42.1433 21.7861 50.3147 31.8661 50.3147Z"/><circle cx="32" cy="32" r="14" fill="currentColor" /></svg>
             {/if}
             {#if $currentTheme === 'candy'}candy svg
             {/if}
        </button>

        {#if showThemes}
            <div class="absolute left-1/2 -top-[0.88rem] -translate-x-1/2 flex flex-col items-center space-y-8 border-2 border-[var(--hover)] rounded-xl px-3 py-3 z-50" in:fade={{ duration: 300 }}>
                <button type="button" class="w-12 h-12 text-[var(--hover)] hover:text-[var(--hover)] transition-colors duration-300 cursor-pointer" on:click={toggleModeMenu} aria-label="theme-menu">
                    {#if $currentTheme === 'ocean'}<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"> <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M31.9646 0L39.674 13.353L54.5671 9.36241L50.5765 24.2554L63.9292 31.9645L50.5765 39.6737L54.5672 54.5671L39.6739 50.5764L31.9647 63.9292L24.2554 50.5763L9.36203 54.567L13.3527 39.6737L0 31.9646L13.3529 24.2553L9.36229 9.36217L24.2554 13.3528L31.9646 0ZM31.8661 50.3147C41.946 50.3147 50.1174 42.1433 50.1174 32.0633C50.1174 21.9833 41.946 13.8119 31.8661 13.8119C21.7861 13.8119 13.6147 21.9833 13.6147 32.0633C13.6147 42.1433 21.7861 50.3147 31.8661 50.3147Z"/><circle cx="32" cy="32" r="14" fill="currentColor" /></svg>
                    {/if}
                    {#if $currentTheme === 'candy'}candy svg
                    {/if}
                </button>
                
                {#if $currentTheme !== 'ocean'}
                <button on:click={() => switchTo('ocean')} aria-label="Ocean" title="Ocean" class="w-12 h-12">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"> <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M31.9646 0L39.674 13.353L54.5671 9.36241L50.5765 24.2554L63.9292 31.9645L50.5765 39.6737L54.5672 54.5671L39.6739 50.5764L31.9647 63.9292L24.2554 50.5763L9.36203 54.567L13.3527 39.6737L0 31.9646L13.3529 24.2553L9.36229 9.36217L24.2554 13.3528L31.9646 0ZM31.8661 50.3147C41.946 50.3147 50.1174 42.1433 50.1174 32.0633C50.1174 21.9833 41.946 13.8119 31.8661 13.8119C21.7861 13.8119 13.6147 21.9833 13.6147 32.0633C13.6147 42.1433 21.7861 50.3147 31.8661 50.3147Z"/><circle cx="32" cy="32" r="14" fill="currentColor" /></svg>
                </button>
                {/if}

                {#if $currentTheme !== 'candy'}
                <button on:click={() => switchTo('candy')} aria-label="Candy" title="Candy" class="w-12 h-12">
                    candy svg
                </button>
                {/if}
            </div>
        {/if}
    </div>

</header>

<div class="flex-1 flex items-center justify-center ">
    <h1 class="text-8xl -mt-32 font-bold title" in:fly={{ y: -50, duration: 2500, opacity: 0 }}>
        Gonçalo's World
    </h1>
</div>
{/if}

</section>
