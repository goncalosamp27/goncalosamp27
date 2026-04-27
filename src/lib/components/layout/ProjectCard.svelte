<script lang="ts">
  export let title: string;
  export let description: string;
  export let href: string;
  export let tags: string[] = [];
</script>

<a
  class="group flex h-48 w-full flex-col rounded-2xl border-2 border-[var(--contrast)]
         bg-black/20 p-6 shadow-lg overflow-hidden
         transition-transform duration-300 ease-out will-change-transform
         hover:-translate-y-2
         hover:shadow-black/30"
  target=_blank
  href={href}
>
  <header class="flex items-start justify-between gap-3">
    <h3 class="text-xl text-white font-semibold leading-snug line-clamp-2">
      {#if href}
        <span
          
          class="underline decoration-transparent underline-offset-4 transition-colors duration-200
                group-hover:decoration-[var(--contrast)]"
        >
          {title}
    </span>
      {:else}
        {title}
      {/if}
    </h3>
  </header>

  <div class="flex-1 min-h-0">
    <p class="mt-2 text-sm text-white/80 line-clamp-3">
      {description}
    </p>
  </div>

  {#if tags.length}
    <ul class="mt-3 flex flex-wrap gap-2">
      {#each tags as t (t)}
        <li class="font-semibold text-sm rounded-sm text-[var(--background)] bg-[var(--hover)] px-2 py-1">{t}</li>
      {/each}
    </ul>
  {/if}
</a>

