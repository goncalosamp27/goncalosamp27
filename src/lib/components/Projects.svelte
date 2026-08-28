<script lang="ts">
    import ProjectCard from '$lib/components/layout/ProjectCard.svelte';
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    let show = false;
    onMount(() => show = true);

    const projects = [
        {
          title: 'AssetGuard',
          description:
            'Android app for planning and carrying out route-based security inspections, with maps and location-based checkpoint validation.',
          href: 'https://github.com/goncalosamp27/AssetGuard',
          tags: ['Kotlin', 'Jetpack Compose', 'Firebase']
        },

        {
          title: 'MatchBy',
          description:
            'Web platform for discovering, and organising local sports matches with sports preferences & location based match search.',
          href: 'https://github.com/goncalosamp27/MatchBy',
          tags: ['Blazor', 'C#', '.NET', 'PostgreSQL']
        },

        {
          title: 'HomeMaestro',
          description:
            'Smart home automation system for managing IoT devices and configurable automation workflows.',
          href: 'https://github.com/goncalosamp27/HomeMaestro',
          tags: ['Java', 'Spring Boot', 'TypeScript']
        },
        {
          title: 'ProductScore',
          description:
            'Cross-platform mobile app for scanning food products and presenting nutrition and food-safety information.',
          href: 'https://github.com/goncalosamp27/ProductScore',
          tags: ['Flutter', 'Dart', 'Supabase']
        },

        { title: 'SyncIt!', 
          description: 'Web Application designed for Music and Dance enthusiasts to create, promote, manage or attend events.', 
          href: 'https://github.com/goncalosamp27/SyncIt', 
          tags: ['Laravel','JavaScript','pgSQL','CSS'] },

        { title: 'Smoking Prediction', 
          description: 'Exploratory analysis and several machine learning models that predict whether an individual is a smoker based on biosignals.', 
          href: 'https://github.com/goncalosamp27/IA-FEUP/tree/main/Project2', 
          tags: ['Python','Jupyter Notebook']},

        { title: 'Forest on fire', 
          description: 'Fun and interactive 3D WEBGL scene where you can pilot a firefighter helicopter to stop a forest fire.', 
          href: 'https://github.com/goncalosamp27/CG-FEUP/tree/main/project', 
          tags: ['WebGL','JavaScript','GLSL']},

        { title: 'TreeR', 
          description: 'Mobile social media app promoting sustainability where users can share reduce, reuse and recycle actions.', 
          href: 'https://github.com/goncalosamp27/ES-FEUP', 
          tags: ['Flutter','Firebase'] },
        
        { title: 'PowerBlockDude', 
          description: 'Block Dude adaptation with superpowers, enemies, and multiple levels using OOP, tests, and mutation testing.', 
          href: 'https://github.com/goncalosamp27/LDTS-FEUP', 
          tags: ['Java'] },
        
        { title: 'Jelly Field', 
          description: 'Simple board game you can play yourself or let multiple AI agents play.', 
          href: 'https://github.com/goncalosamp27/IA-FEUP/tree/main/Project1', 
          tags: ['Python','Pygame'] },

        { title: 'File Transfer', 
          description: 'File transfer protocol implemented with link and application layers, featuring noise and disconnection handling.', 
          href: 'https://github.com/goncalosamp27/RC-FEUP', 
          tags: ['C'] },

        { title: 'AquaPipe', 
          description: 'Two-player board game with AI opponents across multiple difficulty levels.', 
          href: 'https://github.com/goncalosamp27/PFL-FEUP-aquapipe', 
          tags: ['Prolog'] },
        
        { title: 'Clothing Shop', 
          description: 'Clothing marketplace where you can either sell your items or buy from other users.', 
          href: 'https://github.com/goncalosamp27/LTW-FEUP', 
          tags: ['HTML','PHP','JavaScript','SQL'] }
    ];

    const PAGE_SIZE = 5;
    let page = 0;

    $: totalPages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));
    $: start = page * PAGE_SIZE;
    $: visible = projects.slice(start, start + PAGE_SIZE);

    const go = (i : number) => page = i;
</script>

<section id="projects" class="pt-32 flex items-center justify-center" style="background-color: var(--background)">
  {#if show}
    
    <div class="w-full max-w-6xl px-4 md:px-6"in:fly={{ y: -30, duration: 1500}}>
      <h2 class="text-3xl md:text-3xl font-bold text-center mb-10" style="color: var(--hover)">
        Selected Projects
      </h2>

      {#key page} 
        <div class="flex flex-wrap gap-7 mt-3 justify-center" in:fly={{ y: -30, duration: 1500}}>
          {#each visible as p (p.title)}
            <div class="w-full sm:w-[21rem] md:w-[21rem]">
              <ProjectCard {...p} />
            </div>
          {/each}
        </div>

        {#if totalPages > 1}
          <nav class="mt-6 flex items-center justify-center gap-2" aria-label="Pagination">
            {#each Array.from({ length: totalPages }) as _, i}
              <button
                class="min-w-9 px-3 py-2 rounded-lg border text-sm transition
                      [color:var(--hover)]
                      hover:bg-[var(--hover)]/10
                      data-[active=true]:bg-[var(--hover)]
                      data-[active=true]:border-[var(--hover)]
                      data-[active=true]:[color:[var(--background)]]"
                data-active={page === i}
                aria-current={page === i ? 'page' : undefined}
                on:click={() => go(i)}
              >
                {i + 1}
              </button>
            {/each}
          </nav>
        {/if}
      {/key}
  </div>
  {/if}
</section>