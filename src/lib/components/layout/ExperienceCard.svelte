<script lang="ts">
  export let organisation: string;
  export let role: string;
  export let period: string;
  export let description: string;
</script>

<article
  class="group flex h-full min-h-56 w-full flex-col rounded-2xl border-2 border-[var(--contrast)]
         bg-black/20 p-6 shadow-lg
         transition-transform duration-300 ease-out will-change-transform
         hover:-translate-y-2
         hover:shadow-black/30"
>
  <header>
    <h3 class="text-xl text-white font-semibold leading-snug">
      {organisation}
    </h3>

    <p class="mt-1 text-sm font-semibold text-[var(--hover)] leading-snug">
      {role}
    </p>
  </header>

  <div class="flex-1">
    <p class="mt-3 text-sm text-white/80 leading-relaxed text-justify">
      {description}
    </p>
  </div>

  <div class="mt-4">
    <span
      class="inline-block rounded-sm bg-[var(--hover)]
             px-2 py-1 text-sm font-semibold text-[var(--background)]"
    >
      {period}
    </span>
  </div>
</article>