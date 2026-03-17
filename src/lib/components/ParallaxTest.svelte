<script lang="ts">
  import { onMount } from 'svelte';

  let scrollY = 0;

  function handleScroll() {
    scrollY = window.scrollY;
    console.log('scroll', scrollY);
  }

  onMount(() => {
    console.log('mounted');
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });
</script>

<div class="fixed top-30 left-10 z-50 bg-black text-white p-4">
  scrollY: {scrollY}
</div>