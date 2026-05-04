<script lang="ts">
    import { scale } from 'svelte/transition';
    import '$lib/components/themes/ocean/sunmoon/sunmoon.css';

    export let scrollY = 0;
    export let theme = 'day';
</script>

<div class="absolute left-1/2 bottom-[10px] -translate-x-1/2 z-0">
    <div
        class="absolute left-1/2 bottom-[50px]"
        style={`
            transform:
                translateX(-50%)
                translateY(${Math.min(scrollY * 1, 350)}px)
                scale(${Math.max(1 - scrollY * 0.0008, 0.8)});
            will-change: transform;
        `}
    >
        <div 
            in:scale={{
                start: 0.3,
                duration: 2000,
                delay: 650,
                opacity: 0
            }}
            class="
                w-[260px] h-[260px]
                sm:w-[360px] sm:h-[360px]
                md:w-[480px] md:h-[480px]
                lg:w-[600px] lg:h-[600px]
                rounded-full
            "
            class:bg-[#F2B06F]={theme === 'day'}
            class:bg-[#BEBEBE]={theme === 'night'}
            class:sun-pulse={theme === 'day'}
            class:moon-pulse={theme === 'night'}
        ></div>
    </div>
</div>