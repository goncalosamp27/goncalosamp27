<script lang="ts">
    import '$lib/components/themes/ocean/clouds/clouds.css';
    import { fly } from 'svelte/transition';
    import { onMount } from 'svelte';

    import Cloud1 from '$lib/components/themes/ocean/clouds/svgs/Cloud1.svelte';
    import Cloud2 from '$lib/components/themes/ocean/clouds/svgs/Cloud2.svelte';
    import Cloud3 from '$lib/components/themes/ocean/clouds/svgs/Cloud3.svelte';
    import Cloud4 from '$lib/components/themes/ocean/clouds/svgs/Cloud4.svelte';

    const cloudSvgs = [Cloud1, Cloud2, Cloud3, Cloud4];

    export let scrollY = 0;
    export let theme = 'day';

    let screenWidth = 0;

    type BaseCloud = {
        top: number;
        left: number;
        size: number;
    };

    type Cloud = {
        top: number;
        left: number;
        size: number;
        component: typeof Cloud1;
    };

    let clouds: Cloud[] = [];

    function randomItem<T>(items: T[]): T {
        return items[Math.floor(Math.random() * items.length)];
    }

    function randomBetween(min: number, max: number) {
        return Math.random() * (max - min) + min;
    }

    function getScreenType(width: number) {
        if (width < 640) return 'small';
        if (width < 1024) return 'medium';
        return 'large';
    }

    function distanceBetween(a: BaseCloud, b: BaseCloud) {
        const dx = a.left - b.left;
        const dy = a.top - b.top;

        return Math.sqrt(dx * dx + dy * dy);
    }

    function isTooClose(cloud: BaseCloud, existingClouds: BaseCloud[], minDistance: number) {
        return existingClouds.some((existingCloud) => {
            return distanceBetween(cloud, existingCloud) < minDistance;
        });
    }

    function getBaseClouds(width: number): BaseCloud[] {
        if (width < 640) {
            return [
                {
                    top: randomBetween(8, 18),
                    left: randomBetween(-10, 4),
                    size: randomBetween(210, 270)
                },
                {
                    top: randomBetween(26, 38),
                    left: randomBetween(58, 72),
                    size: randomBetween(200, 260)
                }
            ];
        }

        if (width < 1024) {
            return [
                {
                    top: randomBetween(16, 28),
                    left: randomBetween(-6, 6),
                    size: randomBetween(280, 360)
                },
                {
                    top: randomBetween(16, 28),
                    left: randomBetween(72, 84),
                    size: randomBetween(280, 360)
                },
                {
                    top: randomBetween(4, 12),
                    left: randomBetween(32, 48),
                    size: randomBetween(250, 330)
                }
            ];
        }

        return [
            {
                top: randomBetween(18, 28),
                left: randomBetween(-4, 6),
                size: randomBetween(330, 430)
            },
            {
                top: randomBetween(18, 28),
                left: randomBetween(78, 88),
                size: randomBetween(330, 430)
            },
            {
                top: randomBetween(4, 14),
                left: randomBetween(18, 32),
                size: randomBetween(310, 400)
            },
            {
                top: randomBetween(4, 14),
                left: randomBetween(56, 70),
                size: randomBetween(310, 400)
            }
        ];
    }

    function generateClouds(width: number) {
        let baseClouds = getBaseClouds(width);

        const minDistance = width < 640 ? 22 : width < 1024 ? 24 : 28;
        let attempts = 0;

        while (attempts < 20) {
            const validClouds: BaseCloud[] = [];

            for (const cloud of baseClouds) {
                if (!isTooClose(cloud, validClouds, minDistance)) {
                    validClouds.push(cloud);
                }
            }

            if (validClouds.length === baseClouds.length) {
                break;
            }

            baseClouds = getBaseClouds(width);
            attempts++;
        }

        clouds = baseClouds.map((cloud) => ({
            top: cloud.top,
            left: cloud.left,
            size: cloud.size,
            component: randomItem(cloudSvgs)
        }));
    }

    let mouseX = 0;
    let mouseY = 0;

    function handleMouseMove(event: MouseEvent) {
        mouseX = event.clientX / window.innerWidth - 0.5;
        mouseY = event.clientY / window.innerHeight - 0.5;
    }

    onMount(() => {
        screenWidth = window.innerWidth;
        generateClouds(screenWidth);

        const handleResize = () => {
            const newWidth = window.innerWidth;

            const oldType = getScreenType(screenWidth);
            const newType = getScreenType(newWidth);

            screenWidth = newWidth;

            if (oldType !== newType) {
                generateClouds(newWidth);
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });
</script>

<svelte:window on:mousemove={handleMouseMove} />

<div class="absolute inset-0 z-[2] pointer-events-none">
    {#each clouds as cloud, i}
        {@const CloudSvg = cloud.component}
        {@const parallaxX = mouseX * (12 + i * 4)}
        {@const parallaxY = mouseY * (8 + i * 3)}
        {@const cloudSide = cloud.left < 50 ? -1 : 1}
        {@const scrollDrop = Math.min(scrollY * 1.4, 1000)}
        {@const scrollOutDrift = Math.min(scrollY * 1.5, 1000) * cloudSide}

        <div
            in:fly={{
                y: 40,
                duration: 900,
                delay: 500 + i * 180
            }}
            class={`absolute drop-shadow-lg ${theme === 'night' ? 'text-white/10' : 'text-white/60'}`}
            style={`
                top: ${cloud.top}vh;
                left: ${cloud.left}vw;
                width: ${cloud.size}px;
                height: ${cloud.size * 0.65}px;
                transform:
                    translate(
                        ${parallaxX + scrollOutDrift}px,
                        ${parallaxY + scrollDrop}px
                    );
                transform-origin: center;
                will-change: transform;
            `}
        >
            <div
                class="w-full h-full"
                style={`
                    animation: cloud-sway-${i % 2} ${10 + i * 2}s ease-in-out infinite alternate;
                `}
            >
                <div
                    class="w-full h-full"
                    style={`
                        animation: cloud-float ${4 + i * 0.5}s ease-in-out infinite alternate;
                        animation-delay: ${i * 0.3}s;
                    `}
                >
                    <svelte:component this={CloudSvg} />
                </div>
            </div>
        </div>
    {/each}
</div>