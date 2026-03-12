<script lang="ts">
    import ProjectCard from '$lib/components/ProjectCard.svelte';
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    let show = false;
    onMount(() => show = true);

    const projects = [
        { title: 'Forest on fire', 
          description: 'Fun and interactive 3D WEBGL scene where you can pilot a firefighter helicopter to stop a forest fire.', 
          href: 'https://github.com/goncalosamp27/CG-FEUP/tree/main/project', 
          tags: ['WebGL','JavaScript','GLSL']},

        { title: 'SyncIt!', 
          description: 'Web Application designed for Music and Dance enthusiasts to create, promote, manage or attend events.', 
          href: 'https://github.com/goncalosamp27/LBAW-FEUP', 
          tags: ['Laravel','JavaScript','pgSQL','CSS'] },

        { title: 'Smoking Prediction', 
          description: 'Exploratory analysis and several machine learning models that predict whether an individual is a smoker based on biosignals.', 
          href: 'https://github.com/goncalosamp27/IA-FEUP/tree/main/Project2', 
          tags: ['Python','Jupyter Notebook']},

        { title: 'Projeto FEUP Submissions', 
          description: 'Web platform where Projeto FEUP students upload files to be evaluated, manage groups, and indicate participant contributions.', 
          href: 'https://github.com/goncalosamp27/Projeto-Integrador-2425', 
          tags: ['node.js','next.js','React','pgSQL'] },

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
          tags: ['HTML','PHP','JavaScript','SQL'] },

        { title: 'Personal website',
          description: 'Single-Page personal portfolio with a clean, cartoon-style UI.', 
          href: 'https://github.com/goncalosamp27/goncalosamp27', 
          tags: ['Svelte','Tailwind CSS','TypeScript'] },
    ];

    const PAGE_SIZE = 6;
    let page = 0;

    $: totalPages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));
    $: start = page * PAGE_SIZE;
    $: visible = projects.slice(start, start + PAGE_SIZE);

    const go = (i : number) => page = i;
</script>

<section id="projects" class="min-h-screen flex items-center justify-center overflow-hidden" style="background-color: var(--bg-three)">
  {#if show}
    
    <div class="w-full max-w-6xl px-4 md:px-6 mt-20"in:fly={{ y: -30, duration: 1500}}>
      <h2 class="text-3xl md:text-3xl font-bold text-center mb-10"
          style="color: var(--hover)">
        Projects I've built / contributed to:
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
          <nav class="mt-6 flex items-center justify-center gap-2 mt-7" aria-label="Pagination">
            {#each Array.from({ length: totalPages }) as _, i}
              <button
                class="min-w-9 px-3 py-2 rounded-lg border text-sm transition
                      [color:var(--hover)]
                      hover:bg-[var(--bg-two)]
                      data-[active=true]:bg-[var(--hover)]
                      data-[active=true]:border-[var(--hover)]
                      data-[active=true]:[color:[var(--bg-three)]]"
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