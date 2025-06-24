<script lang="ts"> 
    import { currentTheme } from '$lib/stores/theme';
    import { fly, fade } from 'svelte/transition';
    import { onMount } from 'svelte';

    let open = false;
    onMount(() => {
        open = true;
    });

    let showThemes = false;

    function toogleModeMenu () {
        showThemes = !showThemes;
    }

    function switchTo(theme: 'ocean' | 'candy') {
        currentTheme.set(theme);
    }

</script>

<section id ="hero" class="min-h-screen flex flex-col" style="background: linear-gradient(var(--sky-bg) 0%, var(--sky-bg) 40%, var(--sky-grad) 100%); color: var(--white)">

{#if open}
<header class="w-full px-15 py-10 relative flex items-center justify-between" in:fade={{ duration: 1500 }}>
    <div class="w-12 h-12 text-[var(--white)] hover:text-[var(--hover)] transition-colors duration-300 cursor-pointer">
        <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
            <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M31.9646 0L39.674 13.353L54.5671 9.36241L50.5765 24.2554L63.9292 31.9645L50.5765 39.6737L54.5672 54.5671L39.6739 50.5764L31.9647 63.9292L24.2554 50.5763L9.36203 54.567L13.3527 39.6737L0 31.9646L13.3529 24.2553L9.36229 9.36217L24.2554 13.3528L31.9646 0ZM31.8661 50.3147C41.946 50.3147 50.1174 42.1433 50.1174 32.0633C50.1174 21.9833 41.946 13.8119 31.8661 13.8119C21.7861 13.8119 13.6147 21.9833 13.6147 32.0633C13.6147 42.1433 21.7861 50.3147 31.8661 50.3147Z"/>
            <circle cx="32" cy="32" r="14" fill="currentColor"/>
        </svg>
    </div>

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

    
    

</header>

<div class="flex-1 flex items-center justify-center ">
    <h1 class="text-8xl -mt-32 font-bold title" in:fly={{ y: -50, duration: 2500, opacity: 0 }}>
        Goncalo's World
    </h1>
</div>
{/if}

</section>

<!-- Theme menu -->
    <div class="relative">
    <!-- Container com borda -->
    <div class={`relative flex flex-col items-center px-2 py-2 rounded-xl z-50 transition-all duration-300 
                ${showThemes ? 'border-2 border-[var(--hover)]' : ''}`}>
        
        <!-- Botão principal -->
        <button
        type="button"
        class="w-12 h-12 text-[var(--white)] hover:text-[var(--hover)] transition-colors duration-300 cursor-pointer"
        on:click={toogleModeMenu}
        aria-label="theme-menu"
        >
        <svg viewBox="0 0 64 64" class="w-full h-full">
            <path fill="currentColor" d="..." />
            <circle cx="32" cy="32" r="14" fill="currentColor" />
        </svg>
        </button>

        <!-- Botões dos temas, fora do fluxo -->
        {#if showThemes}
        <div class="absolute top-full mt-2 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 z-50 bg-[var(--bg-three)] rounded-xl p-2 border-2 border-[var(--hover)]">
            <button on:click={() => switchTo('ocean')} aria-label="Ocean" title="Ocean" class="w-10 h-10">
            <svg viewBox="0 0 64 64" class="w-full h-full">
                <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M31.9646 0L39.674 13.353L54.5671 9.36241L50.5765 24.2554L63.9292 31.9645L50.5765 39.6737L54.5672 54.5671L39.6739 50.5764L31.9647 63.9292L24.2554 50.5763L9.36203 54.567L13.3527 39.6737L0 31.9646L13.3529 24.2553L9.36229 9.36217L24.2554 13.3528L31.9646 0ZM31.8661 50.3147C41.946 50.3147 50.1174 42.1433 50.1174 32.0633C50.1174 21.9833 41.946 13.8119 31.8661 13.8119C21.7861 13.8119 13.6147 21.9833 13.6147 32.0633C13.6147 42.1433 21.7861 50.3147 31.8661 50.3147Z"/>
                <circle cx="32" cy="32" r="14" fill="currentColor" />
            </svg>
            </button>
            <button on:click={() => switchTo('candy')} aria-label="Candy" title="Candy" class="w-10 h-10">
            <svg viewBox="0 0 64 64" class="w-full h-full">
                <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M31.9646 0L39.674 13.353L54.5671 9.36241L50.5765 24.2554L63.9292 31.9645L50.5765 39.6737L54.5672 54.5671L39.6739 50.5764L31.9647 63.9292L24.2554 50.5763L9.36203 54.567L13.3527 39.6737L0 31.9646L13.3529 24.2553L9.36229 9.36217L24.2554 13.3528L31.9646 0ZM31.8661 50.3147C41.946 50.3147 50.1174 42.1433 50.1174 32.0633C50.1174 21.9833 41.946 13.8119 31.8661 13.8119C21.7861 13.8119 13.6147 21.9833 13.6147 32.0633C13.6147 42.1433 21.7861 50.3147 31.8661 50.3147Z"/>
                <circle cx="32" cy="32" r="14" fill="currentColor" />
            </svg>
            </button>
        </div>
        {/if}
    </div>
    </div>