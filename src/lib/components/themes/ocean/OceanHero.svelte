<script lang="ts">
    import { fly, scale } from 'svelte/transition';
    import { onMount } from 'svelte';
    import '$lib/components/themes/ocean/oceanhero.css';
    import Clouds from '$lib/components/themes/ocean/clouds/Clouds.svelte';
    import Landscape from './landscape/Landscape.svelte';
    import SunMoon from './sunmoon/SunMoon.svelte';

    export let scrollY = 0;
    export let theme = 'day';

    const waveWidth = 132;
    let screenWidth = 0;
    let oceanReady = false;
    let numWaves = 0;
    let viewBoxWidth = 0;

    $: numWaves = Math.ceil(screenWidth / waveWidth) + 2;
    $: viewBoxWidth = (numWaves + 1) * waveWidth;

    onMount(() => {
        const update = () => {
            screenWidth = window.innerWidth;
            oceanReady = false;

            setTimeout(() => {
                oceanReady = true;
            }, 10);
        };

        update();
        window.addEventListener('resize', update);

        return () => window.removeEventListener('resize', update);
    });
</script>

{#if oceanReady}
<div class="relative w-full h-full overflow-hidden">
    <Clouds {theme} {scrollY} />
    <Landscape {theme} {scrollY} />
    <SunMoon {theme} {scrollY} />
    <div class="absolute bottom-0 left-0 w-full pointer-events-none">
        <div class="relative w-full h-[200px]">
            <div
                in:fly={{ y: 500, duration: 500, delay: 400 }}
                style={`transform: translateY(${Math.min(scrollY * 0.3, 500)}px); will-change: transform;`}
                class="relative z-[1]"
            >
                <div class="absolute top-0 h-full left-1/2 -translate-x-1/2">
                    <div class="animate-wave-horizontal-right">
                        <svg
                            class="h-[191px] -ml-[132px] text-[var(--wave)] animate-wave-vertical-up"
                            viewBox={`0 0 ${viewBoxWidth} 191`}
                            preserveAspectRatio="none"
                        >
                            {#each Array(numWaves) as _, i}
                                <path
                                    stroke="currentColor"
                                    stroke-width="3"
                                    vector-effect="non-scaling-stroke"
                                    d={`M${i * 132 + 132} 334.357H${i * 132}V0C${i * 132 + 13.0986} 15.278 ${i * 132 + 37.7486} 25.5732 ${i * 132 + 66} 25.5732C${i * 132 + 94.2514} 25.5732 ${i * 132 + 118.901} 15.278 ${i * 132 + 132} 0V334.357Z`}
                                    fill="currentColor"
                                />
                            {/each}
                        </svg>
                    </div>
                </div>
            </div>
            
            <div
                in:fly={{ y: 500, duration: 500 }}
                style={`transform: translateY(${Math.min(scrollY * 0.08, 700)}px); will-change: transform;`}
                class="relative z-[3]"
            >   
                <div class="absolute top-[70px] h-full left-1/2 -translate-x-1/2">
                    <div class="animate-wave-horizontal-left">
                        <svg
                            class="-mr-[132px] h-[191px] text-[var(--wave-two)] animate-wave-vertical-down"
                            viewBox={`0 0 ${viewBoxWidth} 191`}
                            preserveAspectRatio="none"
                        >
                            {#each Array(numWaves + 1) as _, i}
                                <path
                                    stroke="currentColor"
                                    stroke-width="3"
                                    vector-effect="non-scaling-stroke"
                                    d={`M${i * 132 + 66} 334.357H${i * 132 - 66}V0 C${i * 132 - 66 + 13.0986} 15.278 ${i * 132 - 66 + 37.7486} 25.5732 ${i * 132 - 66 + 66} 25.5732 C${i * 132 - 66 + 94.2514} 25.5732 ${i * 132 - 66 + 118.901} 15.278 ${i * 132 - 66 + 132} 0 V334.357Z`}
                                    fill="currentColor"
                                />
                            {/each}
                        </svg>
                    </div>
                </div>
            </div>
            
            <div class="relative z-[5]">
                <div class="absolute top-[150px] h-full left-1/2 -translate-x-1/2">
                    <div class="animate-wave-horizontal-right">
                        <svg
                            class="-ml-[132px] h-[191px] text-[var(--background)] animate-wave-vertical-up"
                            viewBox={`0 0 ${viewBoxWidth} 191`}
                            preserveAspectRatio="none"
                        >
                            {#each Array(numWaves) as _, i}
                                <path
                                    stroke="currentColor"
                                    stroke-width="3"
                                    vector-effect="non-scaling-stroke"
                                    d={`M${i * 132 + 132} 334.357H${i * 132}V0C${i * 132 + 13.0986} 15.278 ${i * 132 + 37.7486} 25.5732 ${i * 132 + 66} 25.5732C${i * 132 + 94.2514} 25.5732 ${i * 132 + 118.901} 15.278 ${i * 132 + 132} 0V334.357Z`}
                                    fill="currentColor"
                                />
                            {/each}
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
{/if}
