<script lang="ts"> 
  import { currentTheme, type ThemeName } from '$lib/stores/theme';
  import { fade, slide } from 'svelte/transition';

  let showThemes = false;
  let openMobileMenu = false;

  function scrollToId(id: string) {
    const el = document.getElementById(id);
    if (!el) return;

    const headerOffset = 90;
    const y = el.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }

  function closeMobileMenu() {
    openMobileMenu = false;
  }

  function toggleMobileMenu() {
    openMobileMenu = !openMobileMenu;
    if (openMobileMenu) showThemes = false;
  }

  function toggleModeMenu() {
    showThemes = !showThemes;
    if (showThemes) openMobileMenu = false;
  }

  function switchTo(theme: ThemeName) { 
    currentTheme.set(theme);
    showThemes = false;
  }
</script>

<header class="w-full -mt-2 md:px-12 py-8 fixed top-0 left-0 flex items-center justify-between z-4 bg-gradient-to-b from-black/50 to-black/0 " in:fade={{ duration: 1500 }}>
    <a href="#hero" on:click|preventDefault={() => scrollToId('hero')} class="hidden md:block w-12 h-12 text-[var(--white)] hover:text-[var(--hover)] transition-colors duration-300 cursor-pointer" aria-label = "logo">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M42.1303 20.0125C43.4432 20.3057 44.6364 20.851 45.6752 21.534C47.6545 22.8428 49.1101 24.6969 49.9245 26.7411C50.7115 28.713 50.8676 30.806 50.6098 32.7098C50.3535 34.6101 49.716 36.3774 48.935 37.957C48.7265 38.3702 48.5525 38.7135 48.2925 39.1552C48.0405 39.5805 47.7685 39.9854 47.4767 40.3636C46.8948 41.1325 46.2476 41.8103 45.5775 42.4261C44.2068 43.6869 42.713 44.6664 41.2558 45.4287C39.0609 46.5634 36.9635 47.1755 35.2374 47.4529C31.8461 48.1485 30.8598 48.9294 30.5476 50.7458C30.4432 51.4819 30.5675 52.2313 30.9754 52.8801C31.3659 53.5058 31.9924 53.9857 32.6841 54.239C33.0158 54.3613 33.3602 54.4321 33.6823 54.4447C33.8416 54.4525 33.9932 54.4438 34.1384 54.4259C34.3195 54.4009 34.4931 54.3694 34.6579 54.3309C35.3033 54.1829 35.8155 53.9209 36.1747 53.5933C36.528 53.2742 36.7441 52.8845 36.8302 52.5265C36.9188 52.1679 36.8684 51.8407 36.7608 51.6616C36.7069 51.5695 36.6479 51.5097 36.5704 51.4647C36.5317 51.4431 36.4877 51.4239 36.4379 51.4105C36.3846 51.3985 36.3344 51.3867 36.2991 51.3815C36.2258 51.3687 36.1064 51.3859 36.0246 51.4035C35.9354 51.4223 35.8612 51.4437 35.7942 51.4681C35.6565 51.5173 35.5553 51.5716 35.4607 51.546C35.373 51.5237 35.3005 51.4112 35.3734 51.208C35.4099 51.1077 35.4916 50.9902 35.616 50.8821C35.7448 50.7738 35.8943 50.6745 36.1424 50.6046C36.2005 50.5879 36.2677 50.5776 36.3292 50.5699C36.3837 50.5611 36.4426 50.5583 36.5025 50.5555L36.5102 50.5552C36.6357 50.5514 36.7731 50.5634 36.9132 50.5964C37.1895 50.658 37.4663 50.8162 37.6619 51.0309C38.0451 51.4543 38.1669 52.0212 38.1003 52.5963C38.032 53.1687 37.7569 53.8027 37.2287 54.3654C36.6914 54.9477 35.8634 55.4288 34.9524 55.6996C34.7156 55.7712 34.4727 55.8322 34.2251 55.8827C33.9356 55.9404 33.6389 55.9744 33.3448 55.9808C32.739 55.9977 32.1427 55.9114 31.5772 55.7474C30.3782 55.3983 29.327 54.6845 28.6504 53.7241C27.9301 52.7084 27.7214 51.5385 27.8839 50.4648C28.0426 49.3765 28.5341 48.4215 29.1303 47.6202C29.5093 47.0756 30.1883 46.6795 30.8526 46.394C31.369 46.1124 32.3039 45.8566 33.543 45.5016C35.2651 45.0061 37.5934 44.2705 40.0077 42.8566C41.1564 42.1795 42.3248 41.3503 43.3526 40.355C43.856 39.8678 44.3353 39.345 44.7345 38.7915C44.9396 38.518 45.1174 38.2379 45.2778 37.955C45.4296 37.6929 45.6224 37.3001 45.7808 36.9731C46.4287 35.6016 46.9202 34.1441 47.091 32.6695C47.2608 31.1918 47.0973 29.6712 46.4922 28.2895C45.8755 26.8746 44.8038 25.6524 43.5146 24.88C42.8545 24.4819 42.1404 24.1988 41.4519 24.073C41.2771 24.0394 41.1067 24.0159 40.9362 24.002C40.7648 23.9847 40.6131 23.9853 40.3792 23.9873C39.9468 23.9913 39.5233 24.0125 39.1131 24.0625C37.4289 24.2627 36.0006 24.8639 34.972 25.7576C33.9116 26.6598 33.2792 27.8336 33.0631 28.9285C32.8359 30.0244 33.0643 31.0036 33.4429 31.5136C33.6277 31.769 33.8208 31.9342 34.0725 32.0491C34.1981 32.1065 34.3395 32.1489 34.4934 32.1832L34.732 32.2158L34.9103 32.2409C35.1361 32.262 35.4814 32.1932 35.7173 32.1347C35.973 32.0678 36.1788 32.0012 36.3679 31.9246C36.7432 31.7756 37.0218 31.6176 37.2794 31.6781C37.5136 31.7277 37.7097 32.0197 37.5328 32.569C37.3246 33.121 36.7643 33.8574 35.4773 34.3757C35.3087 34.4414 35.1268 34.4919 34.9324 34.5353C34.7643 34.5802 34.5836 34.6107 34.3957 34.6412C34.0146 34.6934 33.5889 34.7135 33.1394 34.6743C32.2233 34.6038 31.2344 34.2417 30.4754 33.656C28.8882 32.4283 28.2261 30.5695 28.3072 28.6198C28.396 26.646 29.3041 24.5156 31.1671 22.7982C32.9518 21.1193 35.5798 20.0736 38.2078 19.8383C38.8388 19.7755 39.4699 19.7611 40.0925 19.7738C40.3806 19.7803 40.752 19.7934 41.1026 19.8374C41.4499 19.8775 41.7937 19.935 42.1303 20.0125Z" fill="currentColor"/>
            <path d="M40.197 11.9777C42.1328 12.6873 42.9806 13.5194 42.8597 13.9383C42.6299 14.8816 38.7951 13.535 33.2024 15.5974C31.7192 16.1421 30.1294 16.9144 28.5876 17.9555C27.007 19.0379 25.4836 20.358 24.5032 21.99C23.3783 23.7859 22.5155 25.7864 22.2668 27.8691C22.0098 29.9337 22.3939 32.0245 23.5666 33.8205C24.6895 35.5526 26.466 36.8659 28.4141 37.5417C29.3482 37.8682 30.3155 38.0499 31.2177 38.0697C31.6638 38.084 32.0877 38.0524 32.493 37.9954C32.9989 37.9169 33.483 37.8205 33.9425 37.7048C35.7417 37.2602 37.1624 36.5026 38.1519 35.569C39.1256 34.6593 39.7115 33.5586 39.9352 32.5528C40.166 31.5452 40.0092 30.6321 39.6995 30.136C39.5441 29.881 39.3762 29.7165 39.157 29.5942C39.0478 29.5356 38.9238 29.4839 38.7837 29.4488C38.6338 29.4178 38.4928 29.3871 38.3937 29.3743C38.188 29.3418 37.8548 29.3958 37.6267 29.4489C37.3779 29.5057 37.1714 29.5691 36.985 29.6405C36.6019 29.7847 36.3213 29.9414 36.0554 29.8743C35.8089 29.816 35.6005 29.5047 35.7947 28.9328C35.8921 28.6502 36.115 28.3178 36.4579 28.0094C36.8134 27.7002 37.2269 27.4154 37.9179 27.2079C38.0797 27.1584 38.2673 27.1264 38.4389 27.102C38.5979 27.0735 38.7701 27.0632 38.945 27.052C39.2959 27.0355 39.6809 27.0626 40.0747 27.1482C40.8509 27.3074 41.6332 27.737 42.1911 28.3286C43.2837 29.495 43.6518 31.0753 43.4932 32.6877C43.3294 34.2926 42.5901 36.0796 41.139 37.6792C39.6632 39.3341 37.369 40.7195 34.8325 41.5206C34.1732 41.7323 33.4962 41.9143 32.8058 42.0676C31.9985 42.2426 31.1697 42.352 30.3468 42.3839C28.6522 42.46 26.9792 42.2468 25.3887 41.8149C22.0163 40.895 19.0402 38.9479 17.1004 36.2928C15.0357 33.4851 14.3952 30.2215 14.7984 27.2095C15.1901 24.1569 16.5198 21.4612 18.1496 19.1907C19.8462 16.7708 22.2215 15.103 24.4798 13.891C26.6816 12.7289 28.8938 11.9895 30.9581 11.5769C34.8385 10.7829 38.1797 11.2348 40.197 11.9777Z" fill="currentColor"/>
        </svg>
    </a>

    <button
      class="md:hidden w-12 h-12 inline-flex items-center justify-center rounded-lg border-2 border-transparent text-[var(--white)] 
      hover:text-[var(--hover)] hover:border-[var(--hover)] transition-colors duration-300 ml-4"
      aria-label="Open menu"
      aria-expanded={openMobileMenu}
      aria-controls="mobile-menu"
      on:click={toggleMobileMenu}
    >
      {#if !openMobileMenu}
        <!-- menu icon -->
        <svg viewBox="0 0 24 24" class="w-12 h-12" fill="none" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      {/if}
    </button>

    <nav class="hidden md:flex justify-center space-x-4 md:space-x-10 text-2xl font-regular">
        <a href="#about"
            on:click|preventDefault={() => scrollToId('about')}
            class="min-w-[10ch] text-center rounded-full px-4 py-2 
                    border-2 border-transparent
                    transition-all duration-500
                    hover:border-[var(--hover)] 
                    hover:text-[var(--hover)]
                    hover:bg-[var(--background)]/20
                    hover:backdrop-blur">
            About
        </a>
        <a href="#projects"
            on:click|preventDefault={() => scrollToId('projects')}
            class="min-w-[10ch] text-center rounded-full px-4 py-2 
                    border-2 border-transparent
                    transition-all duration-500
                    hover:border-[var(--hover)] 
                    hover:text-[var(--hover)]
                    hover:bg-[var(--background)]/20
                    hover:backdrop-blur">
            Projects
        </a>
        <a href="#contact"
            on:click|preventDefault={() => scrollToId('contact')}
            class="min-w-[10ch] text-center rounded-full px-4 py-2 
                    border-2 border-transparent
                    transition-all duration-500
                    hover:border-[var(--hover)] 
                    hover:text-[var(--hover)]
                    hover:bg-[var(--background)]/20
                    hover:backdrop-blur">
            Contact
        </a>
    </nav>

    <!-- Theme Menu -->
    <div class="relative mr-4 md:mr-0">
        <button type="button" class="z-1 relative w-12 h-12 text-[var(--white)] hover:text-[var(--hover)] transition-colors duration-300 cursor-pointer" on:click={toggleModeMenu} aria-label="theme-menu">
            <!-- add more theme svgs here -->
            {#if $currentTheme === 'day'}<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full"> <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M31.9646 0L39.674 13.353L54.5671 9.36241L50.5765 24.2554L63.9292 31.9645L50.5765 39.6737L54.5672 54.5671L39.6739 50.5764L31.9647 63.9292L24.2554 50.5763L9.36203 54.567L13.3527 39.6737L0 31.9646L13.3529 24.2553L9.36229 9.36217L24.2554 13.3528L31.9646 0ZM31.8661 50.3147C41.946 50.3147 50.1174 42.1433 50.1174 32.0633C50.1174 21.9833 41.946 13.8119 31.8661 13.8119C21.7861 13.8119 13.6147 21.9833 13.6147 32.0633C13.6147 42.1433 21.7861 50.3147 31.8661 50.3147Z"/><circle cx="32" cy="32" r="14" fill="currentColor" /></svg>{/if}
            {#if $currentTheme === 'night'}<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M33.3252 9.0166C45.3693 9.45085 55 19.3499 55 31.5C55 43.9264 44.9264 54 32.5 54C21.2451 54 11.9209 45.7362 10.2627 34.9453C13.4716 38.6533 18.2114 41 23.5 41C33.165 41 41 33.165 41 23.5C41 17.4771 37.9572 12.165 33.3252 9.0166Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/></svg>{/if}
            {#if $currentTheme === 'space'}<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.1554 33.0684C48.4193 42.1233 40.8387 49.2429 31.5945 49.2429C25.1883 49.2427 19.5812 45.8228 16.497 40.7098C21.0899 40.5453 26.5949 39.8222 32.4231 38.5132C38.9124 37.0556 44.7307 35.1157 49.1554 33.0684Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/><path d="M31.5945 14C37.8417 14 43.329 17.2517 46.458 22.1544C46.4001 22.1552 46.3421 22.1545 46.2839 22.1555C46.3522 22.1692 46.4197 22.1838 46.4865 22.1982C47.5351 23.852 48.3158 25.6922 48.7676 27.6582C45.8823 30.3614 39.2054 33.2785 31.1314 35.092C24.6613 36.5453 18.699 36.9729 14.6485 36.4641C14.2096 34.9254 13.9746 33.3005 13.9746 31.6209C13.9747 21.8893 21.8634 14.0003 31.5945 14Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/><path d="M50.5548 24.2676C58.2497 23.9058 63.4519 24.8486 63.9595 27.1085C64.8404 31.0309 51.2458 37.4242 33.5951 41.3884C15.9443 45.3526 0.921425 45.3865 0.0404969 41.4641C-0.414451 39.4384 2.99229 36.7556 8.82376 34.0868C7.19968 35.322 6.38533 36.4972 6.61092 37.5017C7.34503 40.7703 18.8042 40.9801 32.2057 37.9703C45.6072 34.9605 55.8761 29.8707 55.142 26.6021C54.8766 25.4204 53.2089 24.6421 50.5548 24.2676Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/></svg>{/if}
        </button>

        {#if showThemes} <!-- Desktop -->
            <div class="z-0 backdrop-blur absolute left-1/2 -top-[0.88rem] -translate-x-1/2 flex flex-col items-center space-y-8 border-2 border-[var(--hover)] rounded-xl px-3 py-3 bg-[var(--background)]/30"
                in:slide={{ duration: 400 }}
                out:slide={{ duration: 200 }}>
                <button type="button" class="w-12 h-12 text-[var(--hover)] hover:text-[var(--hover)] transition-colors duration-300 cursor-pointer" on:click={toggleModeMenu} aria-label="theme-menu">
                    <svg viewBox="0 0 64 64" class="invisible w-full h-full"></svg>
                </button>
                
                {#if $currentTheme !== 'day'}
                <button on:click={() => switchTo('day')} aria-label="Day" title="Day" class="w-12 h-12">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full hover:text-[var(--hover)] cursor-pointer"> <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M31.9646 0L39.674 13.353L54.5671 9.36241L50.5765 24.2554L63.9292 31.9645L50.5765 39.6737L54.5672 54.5671L39.6739 50.5764L31.9647 63.9292L24.2554 50.5763L9.36203 54.567L13.3527 39.6737L0 31.9646L13.3529 24.2553L9.36229 9.36217L24.2554 13.3528L31.9646 0ZM31.8661 50.3147C41.946 50.3147 50.1174 42.1433 50.1174 32.0633C50.1174 21.9833 41.946 13.8119 31.8661 13.8119C21.7861 13.8119 13.6147 21.9833 13.6147 32.0633C13.6147 42.1433 21.7861 50.3147 31.8661 50.3147Z"/><circle cx="32" cy="32" r="14" fill="currentColor" /></svg>
                </button>
                {/if}

                {#if $currentTheme !== 'night'}
                <button on:click={() => switchTo('night')} aria-label="Night" title="Night" class="w-12 h-12 hover:text-[var(--hover)] cursor-pointer">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.3252 9.0166C45.3693 9.45085 55 19.3499 55 31.5C55 43.9264 44.9264 54 32.5 54C21.2451 54 11.9209 45.7362 10.2627 34.9453C13.4716 38.6533 18.2114 41 23.5 41C33.165 41 41 33.165 41 23.5C41 17.4771 37.9572 12.165 33.3252 9.0166Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/>
                    </svg>
                </button>
                {/if}

                {#if $currentTheme !== 'space'}
                <button on:click={() => switchTo('space')} aria-label="Space" title="Space" class="w-12 h-12 hover:text-[var(--hover)] cursor-pointer">
                    <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M49.1554 33.0684C48.4193 42.1233 40.8387 49.2429 31.5945 49.2429C25.1883 49.2427 19.5812 45.8228 16.497 40.7098C21.0899 40.5453 26.5949 39.8222 32.4231 38.5132C38.9124 37.0556 44.7307 35.1157 49.1554 33.0684Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/><path d="M31.5945 14C37.8417 14 43.329 17.2517 46.458 22.1544C46.4001 22.1552 46.3421 22.1545 46.2839 22.1555C46.3522 22.1692 46.4197 22.1838 46.4865 22.1982C47.5351 23.852 48.3158 25.6922 48.7676 27.6582C45.8823 30.3614 39.2054 33.2785 31.1314 35.092C24.6613 36.5453 18.699 36.9729 14.6485 36.4641C14.2096 34.9254 13.9746 33.3005 13.9746 31.6209C13.9747 21.8893 21.8634 14.0003 31.5945 14Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/><path d="M50.5548 24.2676C58.2497 23.9058 63.4519 24.8486 63.9595 27.1085C64.8404 31.0309 51.2458 37.4242 33.5951 41.3884C15.9443 45.3526 0.921425 45.3865 0.0404969 41.4641C-0.414451 39.4384 2.99229 36.7556 8.82376 34.0868C7.19968 35.322 6.38533 36.4972 6.61092 37.5017C7.34503 40.7703 18.8042 40.9801 32.2057 37.9703C45.6072 34.9605 55.8761 29.8707 55.142 26.6021C54.8766 25.4204 53.2089 24.6421 50.5548 24.2676Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"/></svg>
                </button>
                {/if}
            </div>
        {/if}
    </div>
</header>

{#if openMobileMenu}
  <nav
    id="mobile-menu"
    class="fixed top-[5.25rem] left-0 w-[80%] z-40 px-2 -mt-16"
  >
    <div class="mx-4 rounded-2xl border-2 border-[var(--hover)] bg-[var(--background)]/20 backdrop-blur p-4 flex flex-col text-xl">
      <div class="flex items-center">
        <a
          href="#about"
          class="flex-1 px-4 py-3 hover:bg-[var(--wave-two)]/30 hover:text-[var(--hover)] transition"
          on:click={closeMobileMenu}
        >
          About
        </a>

        <button
          type="button"
          on:click={closeMobileMenu}
          aria-label="close-mobile-menu"
          class="w-10 h-10 inline-flex items-center justify-center rounded-lg text-[var(--white)] hover:text-[var(--hover)] hover:bg-[var(--wave-two)]/30 transition"
        >
          <svg viewBox="0 0 24 24" class="w-12 h-12" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" d="M6 6l12 12M18 6l-12 12"/>
          </svg>
        </button>
      </div>

      <a
        href="#projects"
        class="px-4 py-3 hover:bg-[var(--wave-two)]/30 hover:text-[var(--hover)] transition"
        on:click={closeMobileMenu}
      >
        Projects
      </a>

      <a
        href="#contact"
        class="px-4 py-3 hover:bg-[var(--wave-two)]/30 hover:text-[var(--hover)] transition"
        on:click={closeMobileMenu}
      >
        Contact
      </a>
    </div>
  </nav>
{/if}
