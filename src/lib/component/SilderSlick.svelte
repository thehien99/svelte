<script>
  export let img;
  import {Splide, SplideSlide} from "@splidejs/svelte-splide";
  import "@splidejs/svelte-splide/css";
</script>

<Splide aria-label="My Favorite Images">
  {#each img as item}
    <SplideSlide>
      <div class="h-[320px] bg-black flex justify-center px-12">
        <img src={item} alt="hinh" class="object-contain m-auto h-full" />
      </div>
    </SplideSlide>
  {/each}
</Splide>
