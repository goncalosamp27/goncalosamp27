<script lang="ts">
  import ExperienceCard from '$lib/components/layout/ExperienceCard.svelte';
  import { onMount } from 'svelte';
  import { fly } from 'svelte/transition';

  let show = false;

  onMount(() => {
    show = true;
  });

  const experiences = [
    {
      organisation: 'NIAEFEUP',
      role: 'UI/UX Design, Visual Communication & Events Member',
      period: 'Oct 2024 - Jul 2026',
      description:
        'Contributed to the UI/UX design of the NIAEFEUP website and UNI project, creating interface components, colour palettes and interactive prototypes in Figma while collaborating with development teams.'
    },

    {
      organisation: 'SINF 2025',
      role: 'Co-Lead, Image & Communication Department',
      period: 'May 2025 - Oct 2025',
      description:
        "Played a key role in defining the event's visual direction and identity, creating reusable visual assets and contributing to the UI/UX direction of the official website alongside the development team."
    },

    {
      organisation: 'ENEI',
      role: 'Visual Communication & UI/UX Team Member',
      period: 'Dec 2024 - Apr 2025',
      description:
        "Contributed to the event's visual communication and website UI/UX, working with communication and development teams on interface structure, content organisation and visual consistency."
    }
  ];
</script>

<section
  id="experience"
  class="pt-32 pb-20 flex items-center justify-center"
  style="background-color: var(--background)"
>
  {#if show}
    <div
      class="w-full max-w-6xl px-4 md:px-6"
      in:fly={{ y: -30, duration: 1500 }}
    >
      <h2
        class="text-3xl md:text-3xl font-bold text-center mb-10"
        style="color: var(--hover)"
      >
        Experience
      </h2>

      <div
        class="flex flex-wrap gap-7 mt-3 justify-center"
        in:fly={{ y: -30, duration: 1500 }}
      >
        {#each experiences as experience (experience.organisation)}
          <div class="w-full sm:w-[21rem] md:w-[21rem]">
            <ExperienceCard {...experience} />
          </div>
        {/each}
      </div>
    </div>
  {/if}
</section>