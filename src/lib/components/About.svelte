<script lang="ts"> 
    import { onMount } from 'svelte';
    import { fly } from 'svelte/transition';
    import { asset } from '$app/paths';
    
    let show = false;
    onMount(() => show = true);

    const birthDate = new Date(2003, 10, 27); 

    function calculateAge(dateOfBirth: Date): number {
        const today = new Date();
        let age = today.getFullYear() - dateOfBirth.getFullYear();

        const birthdayHasPassed = today.getMonth() > dateOfBirth.getMonth() || (today.getMonth() === dateOfBirth.getMonth() && today.getDate() >= dateOfBirth.getDate());

        if (!birthdayHasPassed) { age--; }

        return age;
    }

    const age = calculateAge(birthDate);
</script>

<section id="about" class="pt-36 flex items-center">
    {#if show}
        <div class="w-[90%] md:w-[55%] max-w-3xl mx-auto rounded-3xl border-[3px] border-[var(--contrast)] shadow-lg/20 bg-black/20 backdrop-blur-md grid grid-cols-1 xl:grid-cols-2 gap-8 p-6 md:p-8" in:fly={{ y: -30, duration: 1500}}>
            <div class="flex flex-col items-center text-center gap-6 md:gap-6">
                <img src={asset('/images/profile.png')} alt="Profile" class="block w-full max-w-[300px] aspect-[4/5] max-h-[320px] object-cover object-center rounded-2xl border-[3px] border-[var(--contrast)]" style="object-fit: cover"/>

                <h1 class="font-semibold xl:text-4xl text-5xl" style="color: var(--contrast)">Gonçalo Sampaio</h1>
                <nav class="w-[90%] mx-auto flex flex-wrap items-center justify-evenly text-[var(--white)]">
                    
                    <a href="https://github.com/goncalosamp27" target="_blank" rel="noopener noreferrer"
                        class="w-12 h-12 hover:text-[var(--hover)] transition-colors rounded focus:outline-none focus:ring-2 focus:ring-[var(--hover)]"
                        aria-label="GitHub">
                        <svg viewBox="0 0 64 64" class="w-full h-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M32.5186 10C20.0664 10 10 20.1406 10 32.6859C10 42.7141 16.4499 51.2027 25.3976 54.2071C26.5163 54.4329 26.9261 53.719 26.9261 53.1184C26.9261 52.5924 26.8892 50.7897 26.8892 48.9114C20.6251 50.2638 19.3206 46.2071 19.3206 46.2071C18.3139 43.5779 16.8223 42.9021 16.8223 42.9021C14.7721 41.5124 16.9717 41.5124 16.9717 41.5124C19.2459 41.6627 20.4393 43.8411 20.4393 43.8411C22.4522 47.2963 25.6958 46.32 27.0007 45.7189C27.187 44.2541 27.7839 43.24 28.4177 42.6767C23.4216 42.1508 18.165 40.1978 18.165 31.4838C18.165 29.0049 19.0593 26.9768 20.4762 25.3994C20.2526 24.8362 19.4695 22.5071 20.7002 19.3897C20.7002 19.3897 22.6016 18.7887 26.8887 21.7184C28.7242 21.2218 30.6171 20.9692 32.5186 20.9671C34.42 20.9671 36.3582 21.2303 38.148 21.7184C42.4357 18.7887 44.337 19.3897 44.337 19.3897C45.5677 22.5071 44.7842 24.8362 44.5606 25.3994C46.0149 26.9768 46.8722 29.0049 46.8722 31.4838C46.8722 40.1978 41.6157 42.113 36.5822 42.6767C37.4027 43.3903 38.1107 44.7422 38.1107 46.8833C38.1107 49.9254 38.0738 52.367 38.0738 53.1179C38.0738 53.719 38.4841 54.4329 39.6023 54.2075C48.55 51.2022 54.9999 42.7141 54.9999 32.6859C55.0368 20.1406 44.9335 10 32.5186 10Z" fill="currentColor"/>
                        </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/gonçalo-sampaio27/" target="_blank" rel="noopener noreferrer" 
                        class="w-12 h-12 hover:text-[var(--hover)] transition-colors rounded focus:outline-none focus:ring-2 focus:ring-[var(--hover)]"
                        aria-label="LinkedIn">
                        <svg viewBox="0 0 64 64" class="w-full h-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M51.6689 10H13.3223C11.4854 10 10 11.4165 10 13.1677V50.7772C10 52.5284 11.4854 53.9535 13.3223 53.9535H51.6689C53.5059 53.9535 55 52.5284 55 50.7858V13.1677C55 11.4165 53.5059 10 51.6689 10ZM23.3506 47.4549H16.6709V26.474H23.3506V47.4549ZM20.0107 23.6153C17.8662 23.6153 16.1348 21.9241 16.1348 19.838C16.1348 17.752 17.8662 16.0608 20.0107 16.0608C22.1465 16.0608 23.8779 17.752 23.8779 19.838C23.8779 21.9155 22.1465 23.6153 20.0107 23.6153ZM48.3467 47.4549H41.6758V37.2563C41.6758 34.8269 41.6318 31.6935 38.2041 31.6935C34.7324 31.6935 34.2051 34.3461 34.2051 37.0846V47.4549H27.543V26.474H33.9414V29.3413H34.0293C34.917 27.693 37.0967 25.9503 40.3398 25.9503C47.0986 25.9503 48.3467 30.2942 48.3467 35.9429V47.4549Z" fill="currentColor"/>
                        </svg>
                    </a>

                    <a href="mailto:goncalo20.sampaio03@gmail.com" 
                        class="w-12 h-12 hover:text-[var(--hover)] transition-colors rounded focus:outline-none focus:ring-2 focus:ring-[var(--hover)]"
                        aria-label="Send email">
                        <svg viewBox="0 0 64 64" class="w-full h-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" d="M59.5 21.0909C59.5 18.68 58.5338 16.3673 56.816 14.6618C55.0963 12.9582 52.7643 12 50.3333 12C40.5763 12 23.4237 12 13.6667 12C11.2357 12 8.90367 12.9582 7.184 14.6618C5.46617 16.3673 4.5 18.68 4.5 21.0909C4.5 27.4291 4.5 36.5709 4.5 42.9091C4.5 45.32 5.46617 47.6327 7.184 49.3382C8.90367 51.0418 11.2357 52 13.6667 52C23.4237 52 40.5763 52 50.3333 52C52.7643 52 55.0963 51.0418 56.816 49.3382C58.5338 47.6327 59.5 45.32 59.5 42.9091C59.5 36.5709 59.5 27.4291 59.5 21.0909ZM10.814 20.6891C10.814 20.6891 20.2465 28.3927 26.1627 33.2236C29.5525 35.9927 34.4475 35.9873 37.8318 33.2109C43.7663 28.3436 53.2557 20.5582 53.2557 20.5582C54.0348 19.9182 54.1448 18.7709 53.4995 17.9982C52.856 17.2255 51.6992 17.1164 50.9182 17.7564C50.9182 17.7564 41.4288 25.54 35.4962 30.4091C33.4648 32.0745 30.5278 32.0782 28.4928 30.4164L13.1442 17.8818C12.3632 17.2436 11.2082 17.3545 10.5647 18.1291C9.92117 18.9036 10.033 20.0509 10.814 20.6891Z"  fill="currentColor"/>
                        </svg>
                    </a>

                    <a href="https://www.instagram.com/goncalosampa27/" target="_blank" rel="noopener noreferrer"
                        class="w-12 h-12 hover:text-[var(--hover)] transition-colors rounded focus:outline-none focus:ring-2 focus:ring-[var(--hover)]"
                        aria-label="Instagram">
                        <svg viewBox="0 0 64 64" class="w-full h-full" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M47.5004 13.2143C50.4589 13.2145 52.8569 15.6132 52.8569 18.5717V46.4282C52.8569 49.3867 50.4589 51.7853 47.5004 51.7856H18.5717C15.613 51.7856 13.2143 49.3868 13.2143 46.4282V18.5717C13.2143 15.613 15.613 13.2143 18.5717 13.2143H47.5004ZM32.5571 24.0004C26.1766 24.0007 21.0007 29.1766 21.0004 35.5571C21.0004 41.9378 26.1764 47.1144 32.5571 47.1147C38.9379 47.1147 44.1147 41.9379 44.1147 35.5571C44.1144 29.1764 38.9378 24.0004 32.5571 24.0004ZM45.4086 15.9994C43.4315 15.9994 41.817 17.6024 41.8168 19.5912C41.8168 21.5685 43.4197 23.183 45.4086 23.183C47.3856 23.1828 49.0004 21.58 49.0004 19.5912C49.0003 17.6143 47.3856 15.9997 45.4086 15.9994Z" fill="currentColor"/>
                            <path d="M32.5 14.0518C38.5117 14.0518 39.2236 14.0781 41.5879 14.1836C43.7852 14.2803 44.9717 14.6494 45.7627 14.957C46.8086 15.3613 47.5645 15.8535 48.3467 16.6357C49.1377 17.4268 49.6211 18.1738 50.0254 19.2197C50.333 20.0107 50.7022 21.2061 50.7988 23.3945C50.9043 25.7676 50.9307 26.4795 50.9307 32.4824C50.9307 38.4941 50.9043 39.2061 50.7988 41.5703C50.7022 43.7676 50.333 44.9541 50.0254 45.7451C49.6211 46.791 49.1289 47.5469 48.3467 48.3291C47.5557 49.1201 46.8086 49.6035 45.7627 50.0078C44.9717 50.3154 43.7764 50.6846 41.5879 50.7812C39.2148 50.8867 38.5029 50.9131 32.5 50.9131C26.4883 50.9131 25.7764 50.8867 23.4121 50.7812C21.2148 50.6846 20.0283 50.3154 19.2373 50.0078C18.1914 49.6035 17.4355 49.1113 16.6533 48.3291C15.8623 47.5381 15.3789 46.791 14.9746 45.7451C14.667 44.9541 14.2979 43.7588 14.2012 41.5703C14.0957 39.1973 14.0693 38.4854 14.0693 32.4824C14.0693 26.4707 14.0957 25.7588 14.2012 23.3945C14.2979 21.1973 14.667 20.0107 14.9746 19.2197C15.3789 18.1738 15.8711 17.418 16.6533 16.6357C17.4443 15.8447 18.1914 15.3613 19.2373 14.957C20.0283 14.6494 21.2236 14.2803 23.4121 14.1836C25.7764 14.0781 26.4883 14.0518 32.5 14.0518ZM32.5 10C26.3916 10 25.627 10.0264 23.2275 10.1318C20.8369 10.2373 19.1934 10.624 17.7695 11.1777C16.2842 11.7578 15.0273 12.5225 13.7793 13.7793C12.5225 15.0273 11.7578 16.2842 11.1777 17.7607C10.624 19.1934 10.2373 20.8281 10.1318 23.2187C10.0264 25.627 10 26.3916 10 32.5C10 38.6084 10.0264 39.373 10.1318 41.7725C10.2373 44.1631 10.624 45.8066 11.1777 47.2305C11.7578 48.7158 12.5225 49.9727 13.7793 51.2207C15.0273 52.4687 16.2842 53.2422 17.7607 53.8135C19.1934 54.3672 20.8281 54.7539 23.2188 54.8594C25.6182 54.9648 26.3828 54.9912 32.4912 54.9912C38.5996 54.9912 39.3643 54.9648 41.7637 54.8594C44.1543 54.7539 45.7979 54.3672 47.2217 53.8135C48.6982 53.2422 49.9551 52.4687 51.2031 51.2207C52.4512 49.9727 53.2246 48.7158 53.7959 47.2393C54.3496 45.8066 54.7363 44.1719 54.8418 41.7812C54.9473 39.3818 54.9736 38.6172 54.9736 32.5088C54.9736 26.4004 54.9473 25.6357 54.8418 23.2363C54.7363 20.8457 54.3496 19.2021 53.7959 17.7783C53.2422 16.2842 52.4775 15.0273 51.2207 13.7793C49.9727 12.5312 48.7158 11.7578 47.2393 11.1865C45.8066 10.6328 44.1719 10.2461 41.7813 10.1406C39.373 10.0264 38.6084 10 32.5 10Z" fill="currentColor"/>
                        </svg>
                    </a>
                </nav>
            </div>

            <div class="flex flex-col items-center text-center gap-4 md:gap-6 px-1">
                <h2 class="font-semibold text-3xl md:text-4xl" style="color: var(--hover)">About me</h2>

                <div class="space-y-3 text-white text-[16px] md:text-[16px] leading-relaxed [text-align:justify] max-w-[70ch] overflow-auto break-words">
                    <div>
                        Hey, I am Gonçalo, {age} years old, born and raised in Portugal. I consider myself a creative, understanding and fun person, with a strong desire to help others overcoming their challenges and reaching their goals.
                    </div>
                    <div>
                        My passion for software and modern technologies started really soon, which made me pursue Informatics and Computing Engineering at FEUP where I am currently taking a masters in Software Engineering.
                    </div>
                    <div>
                        If you would like to learn more about my experience and the projects I have worked on, feel free to explore my portfolio or get in touch with me!
                    </div>
                </div>
            </div>
        </div>
    {/if}
</section>